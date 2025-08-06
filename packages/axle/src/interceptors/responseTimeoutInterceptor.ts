import type { AxiosInterceptorOptions } from 'axios'
import type { ResponseInterceptor } from '../instance'
import { createMatcher, MatchPattern } from '../matcher'

export interface ResponseTimeoutInterceptorOptions {
  normalizeErrorCode?: string
  include?: MatchPattern[]
  exclude?: MatchPattern[]
  axiosInterceptorOptions?: AxiosInterceptorOptions
}

export function responseTimeoutInterceptor(options: ResponseTimeoutInterceptorOptions = {}): ResponseInterceptor {
  return {
    onFulfilled: (response) => response,
    onRejected(error) {
      const matcher = createMatcher(options.include, options.exclude)
      if (!matcher(error.config.method ?? '', error.config.url ?? '', error?.response?.status)) {
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
