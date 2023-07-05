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
  onAfter?(): void
  onTransform?(response: UnwrapRef<R>, prev: UnwrapRef<D>): UnwrapRef<D>
  onSuccess?(response: UnwrapRef<R>): void
  onError?(error: Error): void
}

export type UseAxleReturn<D, P> = [
  data: Ref<UnwrapRef<D>>,
  run: Run<D, P>,
  extra: {
    loading: Ref<UnwrapRef<boolean>>
    error: Ref<UnwrapRef<Error | undefined>>
  }
]

export interface CreateUseAxleOptions {
  onTransform?(response: any, prev: any): any
}

export function createUseAxle(options: CreateUseAxleOptions = {}) {
  const { onTransform: defaultOnTransform } = options
  
  const useAxle = <D = any, R = any, P = Record<string, any>>(
    options: UseAxleOptions<D, R, P>
  ): UseAxleReturn<D, P> => {
    const {
      url,
      runner,
      immediate,
      data: initialData,
      params: initialParams,
      config: initialConfig,
      onBefore = () => {},
      onAfter = () => {},
      onTransform = (defaultOnTransform as UseAxleOptions<D, R, P>['onTransform']) ?? ((response) => response as unknown as UnwrapRef<D>),
      onSuccess = () => {},
      onError = () => {},
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
          data.value = onTransform(response as UnwrapRef<R>, data.value)
          error.value = undefined

          onSuccess(response as UnwrapRef<R>)

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
      },
    ]
  }

  return useAxle
}
