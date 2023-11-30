import type { AxiosResponse } from 'axios'
import type { ResponseInterceptor } from '../instance'

export interface ResponseBlobInterceptorOptions {
  data?: (response: AxiosResponse<any, any>) => any
}

export function responseBlobInterceptor(options: ResponseBlobInterceptorOptions = {}): ResponseInterceptor {
  return {
    onFulfilled(response) {
      if (response.request.responseType === 'blob') {
        return options.data?.(response) ?? response
      }

			return response
    },
    onRejected(error) {
      return Promise.reject(error)
    },
  }
}
