import type { AxiosInterceptorOptions, AxiosResponse } from 'axios'
import type { ResponseInterceptor } from '../instance'
import { createMatcher } from '../matcher'

export interface ResponseStatusInterceptorOptions {
  validStatusHandler?: Record<number | string, (response: AxiosResponse<any, any>) => any>
  invalidStatusHandler?: Record<number | string, (error: any) => any>
  include?: string[]
  exclude?: string[]
  axiosInterceptorOptions?: AxiosInterceptorOptions
}

export function responseStatusInterceptor(options: ResponseStatusInterceptorOptions): ResponseInterceptor {
  return {
    onFulfilled: (response) => {
      const matcher = createMatcher(options.include, options.exclude)
      if (!matcher(response.config.method ?? '', response.config.url ?? '', response.status)) {
        return response
      }

      const handler = (options.validStatusHandler ?? {})[response.status]
      if (!handler) {
        return response
      }

      const handlerResponse = handler(response)

      return handlerResponse ?? response
    },

    onRejected: (error) => {
      const matcher = createMatcher(options.include, options.exclude)
      if (!matcher(error.config.method ?? '', error.config.url ?? '', error?.response?.status)) {
        return Promise.reject(error)
      }

      const handler = (options.invalidStatusHandler ?? {})[error.response.status]
      if (!handler) {
        return Promise.reject(error)
      }

      const handlerError = handler(error)
      return handlerError ?? Promise.reject(error)
    },
    options: options.axiosInterceptorOptions,
  }
}
