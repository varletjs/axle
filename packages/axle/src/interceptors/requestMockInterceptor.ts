import { createMatcher } from '../matcher'
import { AxiosError } from 'axios'
import { minimatch } from 'minimatch'
import type { RequestInterceptor } from '../instance'
import type { AxiosInterceptorOptions, AxiosRequestConfig, AxiosResponse } from 'axios'
import { isFunction } from '@varlet/shared'

export type RequestMockInterceptorMappingValue = {
  handler: (config: AxiosRequestConfig) => { data: any; status?: number; statusText?: string }
  method?: string
  delay?: number
}

export interface RequestMockInterceptorOptions {
  mapping?: Record<string, RequestMockInterceptorMappingValue | RequestMockInterceptorMappingValue['handler']>
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

function normalizeMapping(mapping: RequestMockInterceptorOptions['mapping']) {
  return Object.entries(mapping ?? {}).reduce((normalizedMapping, [key, value]) => {
    const normalizedValue: RequestMockInterceptorMappingValue = isFunction(value) ? { handler: value } : value
    normalizedMapping[key] = normalizedValue
    return normalizedMapping
  }, {} as Record<string, RequestMockInterceptorMappingValue>)
}

export function requestMockInterceptor(options: RequestMockInterceptorOptions = {}): RequestInterceptor {
  return {
    onFulfilled(config) {
      const matcher = createMatcher(options.include, options.exclude)
      if (!matcher(config.method ?? '', config.url ?? '')) {
        return config
      }

      const mapping = normalizeMapping(options.mapping)

      const findMappingRecord = () =>
        Object.entries(mapping).find(([key, value]) => {
          const isMatchUrl = minimatch(config.url ?? '', key)
          const isMatchMethod = value.method != null ? config.method === value.method : true
          return isMatchUrl && isMatchMethod
        })

      const mappingRecord = findMappingRecord()
      if (!mappingRecord) {
        return config
      }

      const [, mappingValue] = mappingRecord
      config.adapter = () => {
        const partialResponse = mappingValue.handler(config)
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
          settle(response, resolve, reject, mappingValue.delay)
        })
      }

      return config
    },
    onRejected: (error) => Promise.reject(error),
    options: options.axiosInterceptorOptions,
  }
}
