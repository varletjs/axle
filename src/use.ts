import { ref, type Ref, type UnwrapRef } from 'vue'
import { type AxleRequestConfig, createFetchHelper, createModifyHelper } from './helpers'

// default options
export interface CreateUseAxleHelperOptions {
  runner?: ReturnType<typeof createFetchHelper> | ReturnType<typeof createModifyHelper>
  url?: string
  data?: any
  params?: any
  config?: AxleRequestConfig
  immediate?: boolean
  dataFormatter?(data: any): any
  errorFormatter?(errorResponse: Error): Error
}

export interface RunOptions<P> {
  url?: string
  params?: P
  config?: AxleRequestConfig
}

export type RunReturn<D> = Promise<[UnwrapRef<D>, undefined] | [undefined, Error]>

export type Run<D, P> = (options?: RunOptions<P>) => RunReturn<D>

export interface UseAxleHelperOptions<D, P> {
  runner?: ReturnType<typeof createFetchHelper> | ReturnType<typeof createModifyHelper>
  url?: string
  data?: D
  params?: P
  config?: AxleRequestConfig
  immediate?: boolean
  dataFormatter?(response: any): D
  errorFormatter?(errorResponse: Error): Error
}

export function createUseAxleHelper(options: CreateUseAxleHelperOptions = {}) {
  const defaultRunner = options.runner
  const defaultUrl = options.url
  const defaultInitialData = options.data
  const defaultInitialParams = options.params
  const defaultInitialConfig = options.config
  const defaultImmediate = options.immediate ?? true
  const defaultDataFormatter = options.dataFormatter ?? ((v) => v)
  const defaultErrorFormatter = options.errorFormatter ?? ((v) => v)

  const useAxleHelper = <D = any, P = any>(
    options: UseAxleHelperOptions<D, P> = {}
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
      dataFormatter = defaultDataFormatter,
      errorFormatter = defaultErrorFormatter
    } = options
    const initialUrl = url
    const data = ref<D>(initialData)
    const loading = ref(false)
    const error = ref<Error>()

    if (!runner) {
      throw new Error('[Axle]: Cannot found valid runner, so options.runner is required')
    }

    const run: Run<D, P> = (options: RunOptions<P> = {}): RunReturn<D> => {
      const url = options.url ?? initialUrl

      if (!url) {
        throw new Error('[Axle]: Cannot found valid url, so options.url is required')
      }

      loading.value = true

      return runner(url, options.params, options.config)
        .then((response) => {
          data.value = dataFormatter(response)
          error.value = undefined
          loading.value = false

          return [data.value, undefined] as any
        })
        .catch((responseError) => {
          data.value = initialData
          error.value = errorFormatter(responseError)
          loading.value = false

          return [undefined, error.value!] as any
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

  return useAxleHelper
}
