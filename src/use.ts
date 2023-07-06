import { ref, type Ref } from 'vue'
import { type AxleRequestConfig, createFetchHelper, createModifyHelper } from './instance.js'

export interface RunOptions<P> {
  url?: string
  params?: P
  config?: AxleRequestConfig
  _retryCount?: number
}

export type Run<R, P> = (options?: RunOptions<P>) => Promise<R>

export interface UseAxleRefs<D> {
  data: Ref<D>
  loading: Ref<boolean>
  error: Ref<Error | undefined>
  uploadProgress: Ref<number>
  downloadProgress: Ref<number>
}

export interface UseAxleOptions<D = any, R = any, P = Record<string, any>> {
  url: string
  runner: ReturnType<typeof createFetchHelper> | ReturnType<typeof createModifyHelper>
  data: D
  params?: P
  retry?: number
  config?: AxleRequestConfig
  immediate?: boolean
  onBefore?(refs: UseAxleRefs<D>): void
  onAfter?(refs: UseAxleRefs<D>): void
  onTransform?(response: R, refs: UseAxleRefs<D>): D
  onSuccess?(response: R, refs: UseAxleRefs<D>): void
  onError?(error: Error, refs: UseAxleRefs<D>): void
}

export type UseAxleInstance<D, R, P> = [
  data: Ref<D>,
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
  onTransform?(response: any, refs: any): any
}

export function createUseAxle(options: CreateUseAxleOptions = {}) {
  const { onTransform: defaultOnTransform } = options

  const useAxle = <D = any, R = any, P = Record<string, any>>(
    options: UseAxleOptions<D, R, P>
  ): UseAxleInstance<D, R, P> => {
    const {
      url,
      runner,
      immediate,
      data: initialData,
      params: initialParams,
      config: initialConfig,
      retry = 0,
      onBefore = () => {},
      onAfter = () => {},
      onTransform = (defaultOnTransform as UseAxleOptions<D, R, P>['onTransform']) ??
        ((response) => response as unknown as D),
      onSuccess = () => {},
      onError = () => {},
    } = options

    const initialUrl = url
    const data = ref<D>(initialData) as Ref<D>
    const loading = ref(false)
    const error = ref<Error>()
    const downloadProgress = ref(0)
    const uploadProgress = ref(0)
    const shouldRetry = retry > 0

    const refs: UseAxleRefs<D> = {
      data,
      loading,
      error,
      downloadProgress,
      uploadProgress
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
        const response = await runner(url, options.params, {
          signal: controller.signal,

          onUploadProgress(event) {
            uploadProgress.value = event.progress ?? 0
          },

          onDownloadProgress(event) {
            downloadProgress.value = event.progress ?? 0
          },

          ...options.config,
        })

        data.value = onTransform(response as R, refs)
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
        params: initialParams,
        config: initialConfig,
      })
    }

    return [
      data,
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
