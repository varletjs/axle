import { isFunction } from 'rattail'
import { type AxleInstance, type AxleRequestConfig, type RunnerMethod } from './instance'
import { type UseAxle, type UseAxleOptions } from './use'

export type ApiPathParams = Record<string, any> | (() => Record<string, any>)

export type ApiUseOptions<V, R, P> = Partial<UseAxleOptions<V, R, P>> & { pathParams?: ApiPathParams }

export function createApi(axle: AxleInstance, useAxle: UseAxle) {
  return function api<R = any, P = Record<string, any>>(url: string, method: RunnerMethod) {
    function load(params?: P, pathParams?: ApiPathParams, config?: AxleRequestConfig): Promise<R> {
      return axle[method](patchUrl(url, pathParams ?? {}), params, config)
    }

    function use<UV = any>(options: ApiUseOptions<UV, R, P> = {}) {
      const { pathParams = {}, ...rest } = options

      return useAxle<UV, R, P>({
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
