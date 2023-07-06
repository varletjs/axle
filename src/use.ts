import { ref, type Ref } from 'vue'
import { type AxleRequestConfig, createFetchHelper, createModifyHelper } from './instance.js'

export interface RunOptions<P> {
  url?: string
  params?: P
  config?: AxleRequestConfig
}

export type Run<D, P> = (options?: RunOptions<P>) => Promise<D>

export interface UseAxleOptions<D = any, R = any, P = Record<string, any>> {
  url: string
  runner: ReturnType<typeof createFetchHelper> | ReturnType<typeof createModifyHelper>
  data: D
  params?: P
  config?: AxleRequestConfig
  immediate?: boolean
  onBefore?(): void
  onAfter?(): void
  onTransform?(response: R, prev: D): D
  onSuccess?(response: R): void
  onError?(error: Error): void
}

export type UseAxleReturn<D, P> = [
  data: Ref<D>,
  run: Run<D, P>,
  extra: {
    uploadProgress: Ref<number>
    downloadProgress: Ref<number>
    loading: Ref<boolean>
    error: Ref<Error | undefined>
    abort(): void
  }
]

export interface CreateUseAxleOptions {
  onTransform?(response: any, prev: any): any
}

export function createUseAxle(options: CreateUseAxleOptions = {}) {
  const { onTransform: defaultOnTransform } = options

  const useAxle = <D = any, R = any, P = Record<string, any>>(options: UseAxleOptions<D, R, P>) => {
    const {
      url,
      runner,
      immediate,
      data: initialData,
      params: initialParams,
      config: initialConfig,
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

    let controller = new AbortController()

    const abort = () => {
      controller.abort()
    }

    const run: Run<D, P> = (options: RunOptions<P> = {}) => {
      if (controller.signal.aborted) {
        controller = new AbortController()
      }

      uploadProgress.value = 0
      downloadProgress.value = 0

      const url = options.url ?? initialUrl

      onBefore()

      loading.value = true

      return runner(url, options.params, {
        signal: controller.signal,

        onUploadProgress(event) {
          uploadProgress.value = event.progress ?? 0
        },

        onDownloadProgress(event) {
          downloadProgress.value = event.progress ?? 0
        },

        ...options.config,
      })
        .then((response) => {
          data.value = onTransform(response as R, data.value)
          error.value = undefined

          onSuccess(response as R)

          return data.value
        })
        .catch((responseError) => {
          error.value = responseError

          onError(responseError)

          throw responseError
        })
        .finally(() => {
          loading.value = false
          onAfter()
        })
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
    ] as UseAxleReturn<D, P>
  }

  return useAxle
}
