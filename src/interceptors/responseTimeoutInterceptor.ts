import type { AxiosInterceptorOptions } from 'axios'
import type { ResponseInterceptor } from '../instance'
import { createMatcher } from '../matcher'

export interface ResponseTimeoutInterceptorOptions {
  normalizeErrorCode?: string
  include?: string[]
  exclude?: string[]
  axiosInterceptorOptions?: AxiosInterceptorOptions
}

export function responseTimeoutInterceptor(options: ResponseTimeoutInterceptorOptions = {}): ResponseInterceptor {
  return {
    onFulfilled: (response) => response,
    onRejected(error) {
      const matcher = createMatcher(options.include, options.exclude)
      if (!matcher(error.config.method ?? '', error.config.url ?? '')) {
        return Promise.reject(error)
      }

      if ((error.code === 'ECONNABORTED' && error.message.includes('timeout')) || error.code === 'ETIMEDOUT') {
        error.code = options?.normalizeErrorCode ?? 'TIMEOUT'
      }

      return Promise.reject(error)
    },
    options: options.axiosInterceptorOptions,
  }
}
