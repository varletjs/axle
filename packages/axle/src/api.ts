import { isFunction } from 'rattail'
import { type AxleInstance, type AxleRequestConfig, type RunnerMethod } from './instance'
import { Runnable, UseAxleInstance, type UseAxle, type UseAxleOptions } from './use'

export type ApiPathParams = Record<string, any> | (() => Record<string, any>)

export type ApiUseOptions<V, R, P, D> = Partial<Omit<UseAxleOptions<V, R, P, D>, 'runnable'>> & {
  pathParams?: ApiPathParams
}

export function createApi(axle: AxleInstance, useAxle: UseAxle) {
  return function api<R = any, P = Record<string, any>, D = Record<string, any>>(url: string, method: RunnerMethod) {
    function load(params?: P, pathParams?: ApiPathParams, config?: AxleRequestConfig<D>): Promise<R> {
      return axle[method](patchUrl(url, pathParams ?? {}), params, config)
    }

    function use<V = R>(
      options?: ApiUseOptions<V, R, P, D> & { runnable: Runnable },
    ): UseAxleInstance<V, R | undefined, P, D>
    function use<V = R>(options: ApiUseOptions<V, R, P, D>): UseAxleInstance<V, R, P, D>
    function use<V = R>(
      options: ApiUseOptions<V, R, P, D> & { runnable?: Runnable } = {},
    ): UseAxleInstance<V, R, P, D> {
      const { pathParams = {}, ...rest } = options

      return useAxle<V, R, P, D>({
        url: () => patchUrl(url, pathParams),
        method,
        ...rest,
      })
    }

    function patchUrl(url: string, pathParams: ApiPathParams) {
      const params: Record<string, any> = isFunction(pathParams) ? pathParams() : pathParams

      Object.entries(params).forEach(([key, value]) => {
        url = url.replace(`:${key}`, value)
      })

      return url
    }

    return {
      url,
      load,
      use,
      patchUrl,
    }
  }
}
