import type { AxiosInterceptorOptions, AxiosResponse } from 'axios'
import type { ResponseInterceptor } from '../instance'

export interface ResponseBlobInterceptorOptions {
  onResponse?: (response: AxiosResponse<any, any>) => any
  axiosInterceptorOptions?: AxiosInterceptorOptions
}

export function responseBlobInterceptor(options: ResponseBlobInterceptorOptions = {}): ResponseInterceptor {
  return {
    onFulfilled(response) {
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
