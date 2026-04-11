import type { AxiosInterceptorOptions } from 'axios'
import { isFunction } from 'rattail'
import type { RequestInterceptor } from '../instance'
import { createMatcher, MatchPattern } from '../matcher'

export interface RequestHeadersInterceptorOptions {
  headers?: Record<string, string> | (() => Record<string, string>)
  include?: MatchPattern[]
  exclude?: MatchPattern[]
  axiosInterceptorOptions?: AxiosInterceptorOptions
}

export function requestHeadersInterceptor(options: RequestHeadersInterceptorOptions = {}): RequestInterceptor {
  const { headers: headersOrGetter } = options

  return {
    onFulfilled(config) {
      const matcher = createMatcher(options.include, options.exclude)
      if (!matcher(config.method ?? '', config.url ?? '')) {
        return config
      }

      const headers = (isFunction(headersOrGetter) ? headersOrGetter() : headersOrGetter) ?? {}

      Object.entries(headers).forEach(([key, value]) => {
        config.headers[key] = value
      })

      return config
    },
    onRejected: (error) => Promise.reject(error),
    options: options.axiosInterceptorOptions,
  }
}
