import type { AxiosInterceptorOptions, AxiosResponse } from 'axios'
import type { ResponseInterceptor } from '../instance'
import { createMatcher } from '../matcher'
import { isFunction } from '@varlet/shared'

export interface ResponseStatusInterceptorOptions {
  validateHandler?: Record<number, (response: AxiosResponse<any, any>) => any> | any
  invalidateHandler?: Record<number, (response: AxiosResponse<any, any>) => any> | any
  include?: string[]
  exclude?: string[]
  axiosInterceptorOptions?: AxiosInterceptorOptions
}

export function responseStatusInterceptor(options: ResponseStatusInterceptorOptions): ResponseInterceptor {
  return {
    onFulfilled: (response: AxiosResponse) => {
      const { validateHandler } = options

      const matcher = createMatcher(options.include, options.exclude)
      if (!matcher(response.config.method ?? '', response.config.url ?? '')) {
        return response
      }

      const keys = Object.keys(validateHandler)
      const key = keys.find((currentKey) => currentKey === response.status.toString())
      if (!validateHandler[key as unknown as number] && !isFunction(validateHandler[key as unknown as number])) {
        throw Error(`[Axle] ${key} handler should be a function`)
      }
      const responseData = validateHandler[key as unknown as number](response)
      return responseData ?? response
    },

    onRejected: (error: any) => {
      const { validateHandler, invalidateHandler, include, exclude } = options

      const matcher = createMatcher(include, exclude)
      if (!matcher(error.method ?? '', error.url ?? '')) {
        return invalidateHandler(error) ?? error
      }

      const keys = Object.keys(validateHandler)
      const key = keys.find((currentKey) => currentKey === error.response.status.toString())
      const errorData = validateHandler[key as unknown as number](error)
      return errorData ?? error
    },
    options: options.axiosInterceptorOptions,
  }
}
