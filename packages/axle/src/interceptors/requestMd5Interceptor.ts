import type { RequestInterceptor } from '../instance'
import type { AxiosInterceptorOptions, AxiosRequestConfig } from 'axios'
import qs from 'qs'
import { createMatcher } from '../matcher'
import { minimatch } from 'minimatch'
import { set, get } from 'lodash-es'
import { MD5 } from 'crypto-js'
import { formDataToObject, isFormData, objectToFormData } from '../utils'
import { isArray, isString } from '@varlet/shared'

export type RequestMd5InterceptorMappingValue = {
  path: string[]
  method?: string
}

export interface RequestMd5InterceptorOptions {
  mapping?: Record<string, RequestMd5InterceptorMappingValue | RequestMd5InterceptorMappingValue['path']>
  include?: string[]
  exclude?: string[]
  axiosInterceptorOptions?: AxiosInterceptorOptions
}

function withCtxMd5(
  ctx: Pick<AxiosRequestConfig, 'data' | 'params' | 'headers'>,
  mappingValue: RequestMd5InterceptorMappingValue
) {
  mappingValue.path.forEach((path) => {
    const targetValue = get(ctx, path)
    if (targetValue != null) {
      set(ctx, path, MD5(String(targetValue)).toString())
    }
  })
}

function withMd5(config: AxiosRequestConfig, mappingValue: RequestMd5InterceptorMappingValue): AxiosRequestConfig {
  const { data = {}, params = {}, headers = {} } = config

  // clone ctx fields
  const ctx = {
    data: isFormData(data) ? data : JSON.parse(JSON.stringify(data)),
    params: JSON.parse(JSON.stringify(params)),
    headers: JSON.parse(JSON.stringify(headers)),
  }

  if (
    isString(ctx.data) &&
    ctx.data.length > 0 &&
    ctx.headers['Content-Type'] === 'application/x-www-form-urlencoded'
  ) {
    ctx.data = qs.parse(ctx.data)
    withCtxMd5(ctx, mappingValue)
    ctx.data = qs.stringify(ctx.data)
  } else if (isFormData(ctx.data)) {
    ctx.data = formDataToObject(ctx.data)
    withCtxMd5(ctx, mappingValue)
    ctx.data = objectToFormData(ctx.data)
  } else {
    withCtxMd5(ctx, mappingValue)
  }

  return {
    ...config,
    ...ctx,
  }
}

function normalizeMapping(mapping: RequestMd5InterceptorOptions['mapping']) {
  return Object.entries(mapping ?? {}).reduce((normalizedMapping, [key, value]) => {
    const normalizedValue: RequestMd5InterceptorMappingValue = isArray(value) ? { path: value } : value
    normalizedMapping[key] = normalizedValue
    return normalizedMapping
  }, {} as Record<string, RequestMd5InterceptorMappingValue>)
}

export function requestMd5Interceptor(options: RequestMd5InterceptorOptions = {}): RequestInterceptor {
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

      return withMd5(config, mappingValue)
    },
    onRejected: (error) => Promise.reject(error),
    options: options.axiosInterceptorOptions,
  }
}
