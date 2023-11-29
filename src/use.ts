import { ref, type Ref } from 'vue'
import { type AxleRequestConfig, type RunnerMethod, type AxleInstance } from './instance.js'
import { isFunction } from '@varlet/shared'

export interface RunOptions<P> {
  url?: string
  params?: P
  config?: AxleRequestConfig
  _retryCount?: number
}

export type Run<R, P> = (options?: RunOptions<P>) => Promise<R>

export interface UseAxleRefs<V> {
  value: Ref<V>
  loading: Ref<boolean>
  error: Ref<Error | undefined>
  uploadProgress: Ref<number>
  downloadProgress: Ref<number>
}

export interface UseAxleOptions<V = any, R = any, P = Record<string, any>> {
  url: string
  method: RunnerMethod
  value?: V
  params?: P | (() => P)
  retry?: number
  config?: AxleRequestConfig
  immediate?: boolean
  onBefore?(refs: UseAxleRefs<V>): void
  onAfter?(refs: UseAxleRefs<V>): void
  onTransform?(response: R, refs: UseAxleRefs<V>): V
  onSuccess?(response: R, refs: UseAxleRefs<V>): void
  onError?(error: Error, refs: UseAxleRefs<V>): void
}

export type UseAxleInstance<V, R, P> = [
  value: Ref<V>,
  run: Run<R, P>,
  extra: {
    uploadProgress: Ref<number>
    downloadProgress: Ref<number>
    loading: Ref<boolean>
    error: Ref<Error | undefined>
    abort(): void
  }
]

export interface CreateUseAxleOptions {
  axle: AxleInstance
  onTransform?(response: any, refs: any): any
}

export function createUseAxle(options: CreateUseAxleOptions) {
  const { axle, onTransform: defaultOnTransform } = options

  const useAxle = <V = any, R = any, P = Record<string, any>>(
    options: UseAxleOptions<V, R, P>
  ): UseAxleInstance<V, R, P> => {
    const {
      url,
      method,
      immediate,
      value: initialValue,
      params: initialParamsOrGetter,
      config: initialConfig,
      retry = 0,
      onBefore = () => {},
      onAfter = () => {},
      onTransform = (defaultOnTransform as UseAxleOptions<V, R, P>['onTransform']) ??
        ((response) => response as unknown as V),
      onSuccess = () => {},
      onError = () => {},
    } = options

    const initialUrl = url
    const value = ref(initialValue) as Ref<V>
    const loading = ref(false)
    const error = ref<Error>()
    const downloadProgress = ref(0)
    const uploadProgress = ref(0)
    const shouldRetry = retry > 0

    const refs: UseAxleRefs<V> = {
      value,
      loading,
      error,
      downloadProgress,
      uploadProgress,
    }

    let controller = new AbortController()

    const run: Run<R, P> = async (options: RunOptions<P> = {}) => {
      if (controller.signal.aborted) {
        controller = new AbortController()
      }

      uploadProgress.value = 0
      downloadProgress.value = 0

      const url = options.url ?? initialUrl

      onBefore(refs)

      loading.value = true

      try {
        const getterParams = isFunction(initialParamsOrGetter) ? initialParamsOrGetter() : {}
        const response = await axle[method](
          url,
          { ...getterParams, ...options.params },
          {
            signal: controller.signal,

            onUploadProgress(event) {
              uploadProgress.value = event.progress ?? 0
            },

            onDownloadProgress(event) {
              downloadProgress.value = event.progress ?? 0
            },

            ...options.config,
          }
        )

        value.value = onTransform(response as R, refs)
        error.value = undefined
        onSuccess(response as R, refs)
        loading.value = false
        onAfter(refs)

        return response as R
      } catch (responseError: unknown) {
        const currentRetryCount = options._retryCount == null ? 0 : options._retryCount

        if (shouldRetry && currentRetryCount < retry) {
          return run({ ...options, _retryCount: currentRetryCount + 1 })
        }

        error.value = responseError as Error
        onError(responseError as Error, refs)
        loading.value = false
        onAfter(refs)

        throw responseError
      }
    }

    const abort = () => {
      controller.abort()
    }

    if (immediate) {
      run({
        url: initialUrl,
        params: isFunction(initialParamsOrGetter) ? ({} as P) : initialParamsOrGetter,
        config: initialConfig,
      })
    }

    return [
      value,
      run,
      {
        loading,
        error,
        uploadProgress,
        downloadProgress,
        abort,
      },
    ]
  }

  return useAxle
}

export * from './useValues.js'
export * from './useHasLoading.js'
export * from './useAverageProgress.js'
