import type { AxiosInterceptorOptions, AxiosResponse } from 'axios'
import type { ResponseInterceptor } from '../instance'

export interface ResponseTimeoutInterceptorOptions {
  normalizeErrorCode?: string
  axiosInterceptorOptions?: AxiosInterceptorOptions
}

export function responseTimeoutInterceptor(options: ResponseTimeoutInterceptorOptions = {}): ResponseInterceptor {
  return {
    onFulfilled(response) {
      return response
    },
    onRejected(error) {
      if ((error.code == 'ECONNABORTED' && error.message.includes('timeout')) || error.code === 'ETIMEDOUT') {
        error.code = options?.normalizeErrorCode ?? 'TIMEOUT'
      }

      return Promise.reject(error)
    },
    options: options.axiosInterceptorOptions,
  }
}
