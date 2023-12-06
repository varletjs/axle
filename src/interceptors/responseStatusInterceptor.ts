import type { AxiosInterceptorOptions, AxiosResponse } from 'axios'
import type { ResponseInterceptor } from '../instance'
import { createMatcher } from '../matcher'
import { isFunction } from '@varlet/shared'

export interface ResponseStatusInterceptorOptions {
  handlerCode?: Record<number, (response: any) => Record<string, string>> | any
  handlerError?: Record<number, (response: any) => Record<string, string>> | any
  include?: string[]
  exclude?: string[]
  axiosInterceptorOptions?: AxiosInterceptorOptions
}

export function responseStatusInterceptor(options: ResponseStatusInterceptorOptions): ResponseInterceptor {
  return {
    onFulfilled: (response: AxiosResponse) => {
      const { handlerCode } = options

      const matcher = createMatcher(options.include, options.exclude)
      if (!matcher(response.config.method ?? '', response.config.url ?? '')) {
        return response
      }

      const keys = Object.keys(handlerCode)
      const key = keys.find((currentKey) => currentKey === response.status.toString())
      if (!handlerCode[key as unknown as number] && !isFunction(handlerCode[key as unknown as number])) {
        throw Error(`[Axle] ${key} handler should be a function`)
      }
      const responseData = handlerCode[key as unknown as number](response)
      return responseData || response
    },

    onRejected: (error: any) => {
      const { handlerCode, handlerError } = options

      if (!error.response) {
        const errorData = handlerError(error)
        return errorData || Promise.reject(error)
      }

      const keys = Object.keys(handlerCode)
      const key = keys.find((currentKey) => currentKey === error.response.status.toString())
      if (!handlerCode[key as unknown as number] && !isFunction(handlerCode[key as unknown as number])) {
        throw Error(`[Axle] ${key} handler should be a function`)
      }
      const errorData = handlerCode[key as unknown as number](error)
      return errorData || error
    },
    options: options.axiosInterceptorOptions,
  }
}
