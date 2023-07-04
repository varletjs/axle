import { ref, type Ref, type UnwrapRef } from 'vue'
import { type AxleRequestConfig, createFetchHelper, createModifyHelper } from './instance.js'

export interface RunOptions<P> {
  url?: string
  params?: P
  config?: AxleRequestConfig
}

export type Run<D, P> = (options?: RunOptions<P>) => Promise<UnwrapRef<D>>

export interface UseAxleOptions<D = any, R = any, P = Record<string, any>> {
  url: string
  runner: ReturnType<typeof createFetchHelper> | ReturnType<typeof createModifyHelper>
  data: D
  params?: P
  config?: AxleRequestConfig
  immediate?: boolean
  onBefore?(): void
  onSuccess?(response: UnwrapRef<R>, prev: UnwrapRef<D>): UnwrapRef<D>
  onError?(error: Error, prev: Error | undefined): Error
}

export type UseAxleReturn<D = any, R = any, P = Record<string, any>> = [
  data: Ref<UnwrapRef<D | R | undefined | null>>,
  run: Run<D, P>,
  loading: Ref<UnwrapRef<boolean>>,
  extra: { error: Ref<UnwrapRef<Error | undefined>> }
]

export function createUseAxle() {
  const useAxle = <D = any, R = any, P = Record<string, any>>(
    options: UseAxleOptions<D, R, P>
  ): UseAxleReturn<D, R, P> => {
    const {
      url,
      runner,
      immediate,
      data: initialData,
      params: initialParams,
      config: initialConfig,
      onBefore = () => {},
      onSuccess = (response) => response as unknown as UnwrapRef<D>,
      onError = (error) => error,
    } = options
    const initialUrl = url
    const data = ref<D>(initialData)
    const loading = ref(false)
    const error = ref<Error>()

    const run: Run<D, P> = (options: RunOptions<P> = {}): Promise<UnwrapRef<D>> => {
      const url = options.url ?? initialUrl

      onBefore()

      loading.value = true

      return runner(url, options.params, options.config)
        .then((response) => {
          data.value = onSuccess(response as UnwrapRef<R>, data.value)
          error.value = undefined
          loading.value = false

          return data.value
        })
        .catch((responseError) => {
          error.value = onError(responseError, error.value)
          loading.value = false

          throw responseError
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
      loading,
      {
        error,
      },
    ]
  }

  return useAxle
}
