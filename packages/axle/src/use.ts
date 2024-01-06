import { ref, type Ref } from 'vue'
import { isFunction } from '@varlet/shared'
import { type RunnerMethod, type AxleInstance, type AxleRequestConfig } from './instance.js'

export interface RunOptions<V, P> {
  url?: string
  params?: P
  config?: AxleRequestConfig
  resetValue?: boolean
  cloneResetValue?: boolean | ((value: V) => V)
}

export type Run<V, R, P> = (options?: RunOptions<V, P>) => Promise<R>

export interface UseAxleRefs<V> {
  value: Ref<V>
  loading: Ref<boolean>
  error: Ref<Error | undefined>
  uploadProgress: Ref<number>
  downloadProgress: Ref<number>
}

export interface UseAxleOptions<V = any, R = any, P = Record<string, any>> {
  url: string | (() => string)
  method: RunnerMethod
  value?: V
  params?: P | (() => P)
  resetValue?: boolean
  cloneResetValue?: boolean | ((value: V) => V)
  immediate?: boolean
  config?: AxleRequestConfig | (() => AxleRequestConfig)
  onBefore?(refs: UseAxleRefs<V>): void
  onAfter?(refs: UseAxleRefs<V>): void
  onTransform?(response: R, refs: UseAxleRefs<V>): V
  onSuccess?(response: R, refs: UseAxleRefs<V>): void
  onError?(error: Error, refs: UseAxleRefs<V>): void
}

export interface ResetValueOptions<V> {
  cloneResetValue?: boolean | ((value: V) => V)
}

export type UseAxleInstance<V, R, P> = [
  value: Ref<V>,
  run: Run<V, R, P>,
  extra: {
    uploadProgress: Ref<number>
    downloadProgress: Ref<number>
    loading: Ref<boolean>
    error: Ref<Error | undefined>
    abort(): void
    resetValue(options?: ResetValueOptions<V>): void
  }
]

export interface CreateUseAxleOptions {
  axle: AxleInstance
  immediate?: boolean
  onTransform?(response: any, refs: any): any
}

export function normalizeValueGetter<T>(valueGetter: T | (() => T)) {
  return isFunction(valueGetter) ? valueGetter() : valueGetter
}

export function createUseAxle(options: CreateUseAxleOptions) {
  const { axle, onTransform: defaultOnTransform, immediate: defaultImmediate = false } = options

  const useAxle = <V = any, R = any, P = Record<string, any>>(
    options: UseAxleOptions<V, R, P>
  ): UseAxleInstance<V, R, P> => {
    const {
      url: initialUrlOrGetter,
      method,
      immediate = defaultImmediate,
      value: initialValue,
      resetValue: initialResetValue,
      cloneResetValue: initialCloneResetValue,
      params: initialParamsOrGetter,
      config: initialConfigOrGetter,
      onBefore = () => {},
      onAfter = () => {},
      onTransform = (defaultOnTransform as UseAxleOptions<V, R, P>['onTransform']) ??
        ((response) => response as unknown as V),
      onSuccess = () => {},
      onError = () => {},
    } = options

    const value = ref(initialValue) as Ref<V>
    const loading = ref(false)
    const error = ref<Error>()
    const downloadProgress = ref(0)
    const uploadProgress = ref(0)

    const refs: UseAxleRefs<V> = {
      value,
      loading,
      error,
      downloadProgress,
      uploadProgress,
    }

    let controller = new AbortController()

    const resetValue = (options: ResetValueOptions<V> = {}) => {
      const cloneResetValue = options.cloneResetValue ?? initialCloneResetValue ?? false
      const cloneFn =
        cloneResetValue === true
          ? (v: V) => (v == null ? null : JSON.parse(JSON.stringify(v)))
          : isFunction(initialCloneResetValue)
          ? initialCloneResetValue
          : (v: V) => v
      value.value = cloneFn(initialValue as V)
    }

    const run: Run<V, R, P> = async (options: RunOptions<V, P> = {}) => {
      if (controller.signal.aborted) {
        controller = new AbortController()
      }

      const resetValueOption = options.resetValue ?? initialResetValue ?? false
      if (resetValueOption === true) {
        resetValue(options)
      }

      uploadProgress.value = 0
      downloadProgress.value = 0

      const url = options.url ?? normalizeValueGetter(initialUrlOrGetter)
      const params = options.params ?? normalizeValueGetter(initialParamsOrGetter)
      const config = options.config ?? normalizeValueGetter(initialConfigOrGetter)

      onBefore(refs)

      loading.value = true

      try {
        const response = await axle[method](url, params, {
          signal: controller.signal,

          onUploadProgress(event) {
            uploadProgress.value = event.progress ?? 0
          },

          onDownloadProgress(event) {
            downloadProgress.value = event.progress ?? 0
          },

          ...config,
        })

        value.value = onTransform(response as R, refs)
        error.value = undefined
        onSuccess(response as R, refs)
        loading.value = false
        onAfter(refs)

        return response as R
      } catch (responseError: any) {
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
        url: normalizeValueGetter(initialUrlOrGetter),
        params: normalizeValueGetter(initialParamsOrGetter),
        config: normalizeValueGetter(initialConfigOrGetter),
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
        resetValue,
      },
    ]
  }

  return useAxle
}

export * from './composables/useValues.js'
export * from './composables/useHasLoading.js'
export * from './composables/useAverageProgress.js'
