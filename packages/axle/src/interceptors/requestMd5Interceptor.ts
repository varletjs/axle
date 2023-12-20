import type { RequestInterceptor } from '../instance'
import type { AxiosInterceptorOptions, AxiosRequestConfig } from 'axios'
import qs from 'qs'
import md5 from 'crypto-js/md5.js'
import get from 'lodash/get.js'
import set from 'lodash/set.js'
import { createMatcher } from '../matcher'
import { minimatch } from 'minimatch'
import { formDataToObject, isFormData, objectToFormData } from '../utils'
import { isString } from '@varlet/shared'

export type RequestMd5InterceptorMapping = {
  url: string
  path: string[]
  method?: string
}

export interface RequestMd5InterceptorOptions {
  mappings?: RequestMd5InterceptorMapping[]
  include?: string[]
  exclude?: string[]
  axiosInterceptorOptions?: AxiosInterceptorOptions
}

function withCtxMd5(
  ctx: Pick<AxiosRequestConfig, 'data' | 'params' | 'headers'>,
  mapping: RequestMd5InterceptorMapping
) {
  mapping.path.forEach((path) => {
    const targetValue = get(ctx, path)
    if (targetValue != null) {
      set(ctx, path, md5(String(targetValue)).toString())
    }
  })
}

function withMd5(config: AxiosRequestConfig, mapping: RequestMd5InterceptorMapping): AxiosRequestConfig {
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
    withCtxMd5(ctx, mapping)
    ctx.data = qs.stringify(ctx.data)
  } else if (isFormData(ctx.data)) {
    ctx.data = formDataToObject(ctx.data)
    withCtxMd5(ctx, mapping)
    ctx.data = objectToFormData(ctx.data)
  } else {
    withCtxMd5(ctx, mapping)
  }

  return {
    ...config,
    ...ctx,
  }
}

export function requestMd5Interceptor(options: RequestMd5InterceptorOptions = {}): RequestInterceptor {
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

      return withMd5(config, mapping)
    },
    onRejected: (error) => Promise.reject(error),
    options: options.axiosInterceptorOptions,
  }
}
