import type { AxiosInterceptorOptions } from 'axios'
import type { ResponseInterceptor } from '../instance'
import { createMatcher } from '../matcher'
import axios, { isCancel } from 'axios'

export interface ResponseRetryInterceptorOptions {
  count?: number
  include?: string[]
  exclude?: string[]
  axiosInterceptorOptions?: AxiosInterceptorOptions
}

export function responseRetryInterceptor(options: ResponseRetryInterceptorOptions): ResponseInterceptor {
  return {
    onFulfilled: (response) => response,
    async onRejected(error) {
      const matcher = createMatcher(options.include, options.exclude)
      if (!matcher(error.config.method ?? '', error.config.url ?? '', error?.response?.status) || isCancel(error)) {
        return Promise.reject(error)
      }

      const { count = 1 } = options
      let retryCount = 0

      async function retry() {
        try {
          retryCount++
          return await axios.create()(error.config)
        } catch (error) {
          if (retryCount === count) {
            return Promise.reject(error)
          }

          return retry()
        }
      }

      return retry()
    },
    options: options.axiosInterceptorOptions,
  }
}
