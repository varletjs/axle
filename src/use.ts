import { ref, type Ref, type UnwrapRef } from 'vue'
import { type AxleRequestConfig, createFetchHelper, createModifyHelper } from './instance.js'

export interface RunOptions<P> {
  url?: string
  params?: P
  config?: AxleRequestConfig
}

export type Run<D, R, P> = (options?: RunOptions<P>) => Promise<UnwrapRef<D | R>>

export interface UseAxleOptions<D = any, R = any, P = Record<string, any>> {
  url: string
  data: D | R
  runner: ReturnType<typeof createFetchHelper> | ReturnType<typeof createModifyHelper>
  params?: P
  config?: AxleRequestConfig
  immediate?: boolean
  onBefore?(): void
  onSuccess?(response: UnwrapRef<R>, prev: UnwrapRef<D | R>): UnwrapRef<D | R>
  onError?(error: Error, prev: Error | undefined): Error
}

export function createUseAxle() {
  const useAxle = <D = any, R = any, P = Record<string, any>>(
    options: UseAxleOptions<D, R, P>
  ): [
    data: Ref<UnwrapRef<D | R>>,
    run: Run<D, R, P>,
    loading: Ref<UnwrapRef<boolean>>,
    extra: { error: Ref<UnwrapRef<Error | undefined>> }
  ] => {
    const {
      url,
      runner,
      immediate,
      data: initialData,
      params: initialParams,
      config: initialConfig,
      onBefore = () => {},
      onSuccess = (response) => response,
      onError = (error) => error,
    } = options
    const initialUrl = url
    const data = ref<D | R>(initialData)
    const loading = ref(false)
    const error = ref<Error>()

    const run: Run<D, R, P> = (options: RunOptions<P> = {}): Promise<UnwrapRef<D | R>> => {
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
