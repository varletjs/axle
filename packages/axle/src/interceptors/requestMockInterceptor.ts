import { createMatcher } from '../matcher'
import { AxiosError } from 'axios'
import { minimatch } from 'minimatch'
import type { RequestInterceptor } from '../instance'
import type { AxiosInterceptorOptions, AxiosRequestConfig, AxiosResponse } from 'axios'

export type RequestMockInterceptorMapping = {
  url: string
  handler: (config: AxiosRequestConfig) => { data: any; status?: number; statusText?: string }
  method?: string
  delay?: number
}

export interface RequestMockInterceptorOptions {
  mappings?: RequestMockInterceptorMapping[]
  include?: string[]
  exclude?: string[]
  axiosInterceptorOptions?: AxiosInterceptorOptions
}

function settle(
  response: AxiosResponse,
  resolve: (response: AxiosResponse) => void,
  reject: (error: AxiosError) => void,
  delay = 0
) {
  if (delay > 0) {
    setTimeout(() => {
      settle(response, resolve, reject)
    }, delay)
    return
  }

  if (!response.config.validateStatus || response.config.validateStatus(response.status)) {
    resolve(response)
  } else {
    reject(new AxiosError(`Request failed with status code ${response.status}`, undefined, response.config, response))
  }
}

export function requestMockInterceptor(options: RequestMockInterceptorOptions = {}): RequestInterceptor {
  return {
    onFulfilled(config) {
      const matcher = createMatcher(options.include, options.exclude)
      if (!matcher(config.method ?? '', config.url ?? '')) {
        return config
      }

      const findMapping = () =>
        (options.mappings ?? []).find((mapping) => {
          const isMatchUrl = minimatch(config.url ?? '', mapping.url)
          const isMatchMethod = mapping.method != null ? config.method === mapping.method : true
          return isMatchUrl && isMatchMethod
        })

      const mapping = findMapping()
      if (!mapping) {
        return config
      }

      config.adapter = () => {
        const partialResponse = mapping.handler(config)
        const response: AxiosResponse<any, any> = {
          ...partialResponse,
          headers: config.headers,
          config,
          request: {},
          data: partialResponse.data,
          status: partialResponse.status ?? 200,
          statusText: partialResponse.statusText ?? 'OK',
        }

        return new Promise((resolve, reject) => {
          settle(response, resolve, reject, mapping.delay)
        })
      }

      return config
    },
    onRejected: (error) => Promise.reject(error),
    options: options.axiosInterceptorOptions,
  }
}
