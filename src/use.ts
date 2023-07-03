import { ref, type Ref, type UnwrapRef } from 'vue'
import { type AxleRequestConfig, createFetchHelper, createModifyHelper } from './instance.js'

// default options
export interface CreateUseAxleOptions {
  runner?: ReturnType<typeof createFetchHelper> | ReturnType<typeof createModifyHelper>
  url?: string
  data?: any
  params?: any
  config?: AxleRequestConfig
  immediate?: boolean
  dataTransformer?(data: any, prevData: any): any
  errorTransformer?(errorResponse: Error, prevError: Error): Error
}

export interface RunOptions<P> {
  url?: string
  params?: P
  config?: AxleRequestConfig
}

export type Run<D, P> = (options?: RunOptions<P>) => Promise<UnwrapRef<D>>

export interface UseAxleOptions<D, P, R> {
  runner?: ReturnType<typeof createFetchHelper> | ReturnType<typeof createModifyHelper>
  url?: string
  data?: D
  params?: P
  config?: AxleRequestConfig
  immediate?: boolean
  dataTransformer?(response: R, prevData: D): D
  errorTransformer?(errorResponse: Error, prevError: Error): Error
}

export function createUseAxle(options: CreateUseAxleOptions = {}) {
  const defaultRunner = options.runner
  const defaultUrl = options.url
  const defaultInitialData = options.data
  const defaultInitialParams = options.params
  const defaultInitialConfig = options.config
  const defaultImmediate = options.immediate ?? true
  const defaultDataTransformer = options.dataTransformer ?? ((v) => v)
  const defaultErrorTransformer = options.errorTransformer ?? ((v) => v)

  const useAxle = <D = any, P = any, R = any>(
    options: UseAxleOptions<D, P, R> = {}
  ): [
    data: Ref<UnwrapRef<D>>,
    run: Run<D, P>,
    loading: Ref<UnwrapRef<boolean>>,
    extra: { error: Ref<UnwrapRef<Error | undefined>> }
  ] => {
    const {
      runner = defaultRunner,
      data: initialData = defaultInitialData,
      url = defaultUrl,
      params: initialParams = defaultInitialParams,
      config: initialConfig = defaultInitialConfig,
      immediate = defaultImmediate,
      dataTransformer = defaultDataTransformer,
      errorTransformer = defaultErrorTransformer
    } = options
    const initialUrl = url
    const data = ref<D>(initialData)
    const loading = ref(false)
    const error = ref<Error>()

    if (!runner) {
      throw new Error('[Axle]: Cannot found valid runner, so options.runner is required')
    }

    const run: Run<D, P> = (options: RunOptions<P> = {}): Promise<UnwrapRef<D>> => {
      const url = options.url ?? initialUrl

      if (!url) {
        throw new Error('[Axle]: Cannot found valid url, so options.url is required')
      }

      loading.value = true

      return runner(url, options.params, options.config)
        .then((response) => {
          data.value = dataTransformer(response, data.value)
          error.value = undefined
          loading.value = false

          return data.value
        })
        .catch((responseError) => {
          data.value = initialData
          error.value = errorTransformer(responseError, error.value)
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
