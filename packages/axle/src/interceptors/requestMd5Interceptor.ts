import type { RequestInterceptor } from '../instance'
import type { AxiosInterceptorOptions, AxiosRequestConfig } from 'axios'
import qs from 'qs'
import { createMatcher } from '../matcher'
import { minimatch } from 'minimatch'
import { set, get } from 'lodash-es'
import { MD5 } from 'crypto-js'
import { formDataToObject, isFormData, objectToFormData } from '../utils'
import { isPlainObject, isString } from '@varlet/shared'

export type RequestMd5InterceptorMappingValue = {
  path: string[]
  method?: string
}

export interface RequestMd5InterceptorOptions {
  mapping?: Record<string, RequestMd5InterceptorMappingValue>
  include?: string[]
  exclude?: string[]
  axiosInterceptorOptions?: AxiosInterceptorOptions
}

function withConfigMd5(config: AxiosRequestConfig, mappingValue: RequestMd5InterceptorMappingValue) {
  mappingValue.path.forEach((path) => {
    const targetValue = get(config, path)
    if (targetValue != null) {
      set(config, path, MD5(String(targetValue)).toString())
    }
  })
}

function withMd5(config: AxiosRequestConfig, mappingValue: RequestMd5InterceptorMappingValue): AxiosRequestConfig {
  const { data, headers = {} } = config

  if (isString(data) && data.length > 0 && headers['Content-Type'] === 'application/x-www-form-urlencoded') {
    config.data = qs.parse(config.data)
    withConfigMd5(config, mappingValue)
    config.data = qs.stringify(config.data)
  } else if (isFormData(data)) {
    config.data = formDataToObject(data)
    withConfigMd5(config, mappingValue)
    config.data = objectToFormData(config.data)
  } else {
    withConfigMd5(config, mappingValue)
  }

  return config
}

export function requestMd5Interceptor(options: RequestMd5InterceptorOptions = {}): RequestInterceptor {
  return {
    onFulfilled(config) {
      const matcher = createMatcher(options.include, options.exclude)
      if (!matcher(config.method ?? '', config.url ?? '')) {
        return config
      }

      const findMappingRecord = () =>
        Object.entries(options.mapping ?? {}).find(
          ([key, value]) => minimatch(config.url ?? '', key) && config.method === (value.method ?? 'get')
        )

      const mappingRecord = findMappingRecord()
      if (!mappingRecord) {
        return config
      }

      const [, mappingValue] = mappingRecord

      return withMd5(config, mappingValue)
    },
    onRejected: (error) => Promise.reject(error),
    options: options.axiosInterceptorOptions,
  }
}
