import { isFunction } from 'rattail'
import { type AxleInstance, type AxleRequestConfig, type RunnerMethod } from './instance'
import {
  UseAxleInstance,
  UseAxleOptionsWithRunnable,
  type UseAxle,
  type UseAxleOptions,
  type WatchOptions,
} from './use'

export type ApiPathParams = Record<string, any> | (() => Record<string, any>)

export type ApiWatchOptions = WatchOptions & {
  pathParams?: boolean
}

export type ApiUseOptions<V, R, P, D> = Partial<UseAxleOptions<V, R, P, D>> & {
  pathParams?: ApiPathParams
  watch?: ApiWatchOptions
}

export type ApiUseOptionsWithRunnable<V, R, P, D> = Partial<Omit<UseAxleOptionsWithRunnable<V, R, P, D>, 'runnable'>> &
  Pick<UseAxleOptionsWithRunnable<V, R, P, D>, 'runnable'> & {
    pathParams?: ApiPathParams
    watch?: ApiWatchOptions
  }

export function createApi(axle: AxleInstance, useAxle: UseAxle) {
  return function api<R = any, P = Record<string, any>, D = Record<string, any>>(url: string, method: RunnerMethod) {
    function load(params?: P, pathParams?: ApiPathParams, config?: AxleRequestConfig<D>): Promise<R> {
      return axle[method](patchUrl(url, pathParams ?? {}), params, config)
    }

    function use<V = R>(options?: ApiUseOptionsWithRunnable<V, R, P, D>): UseAxleInstance<V, R | undefined, P, D>
    function use<V = R>(options?: ApiUseOptions<V, R, P, D>): UseAxleInstance<V, R, P, D>
    function use<V = R>(options: any = {}): any {
      const { pathParams = {}, watch: watchOptions, ...rest } = options
      const enableWatchPathParams = isFunction(pathParams) && (watchOptions?.pathParams || watchOptions === true)
      const normalizedWatchOptions =
        watchOptions === true
          ? { params: true, config: true, _custom: enableWatchPathParams ? pathParams : undefined }
          : watchOptions === false
            ? { params: false, config: false }
            : { params: false, config: false, ...watchOptions, _custom: enableWatchPathParams ? pathParams : undefined }

      return useAxle<V, R, P, D>({
        url: () => patchUrl(url, pathParams),
        method,
        watch: normalizedWatchOptions,
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
