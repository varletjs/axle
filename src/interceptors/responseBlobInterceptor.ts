import type { AxiosInterceptorOptions, AxiosResponse } from 'axios'
import type { ResponseInterceptor } from '../instance'
import { createMatcher } from '../matcher'

export interface ResponseBlobInterceptorOptions {
  onResponse?: (response: AxiosResponse<any, any>) => any
  axiosInterceptorOptions?: AxiosInterceptorOptions
  include?: string[]
  exclude?: string[]
}

export function responseBlobInterceptor(options: ResponseBlobInterceptorOptions = {}): ResponseInterceptor {
  return {
    onFulfilled(response) {
      const matcher = createMatcher(options.include, options.exclude)
      if (!matcher(response.config.method ?? '', response.config.url ?? '')) {
        return response
      }

      if (response.request.responseType === 'blob') {
        return options.onResponse?.(response) ?? response
      }

      return response
    },
    onRejected(error) {
      return Promise.reject(error)
    },
    options: options.axiosInterceptorOptions,
  }
}
