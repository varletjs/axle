import type { AxiosInterceptorOptions, AxiosResponse } from 'axios'
import type { ResponseInterceptor } from '../instance'
import { createMatcher } from '../matcher'
import { isFunction } from '@varlet/shared'

export interface ResponseStatusInterceptorOptions {
  handler?: Record<number, (response: any) => Record<string, string>> | any
  axiosInterceptorOptions?: AxiosInterceptorOptions
}

export function responseStatusInterceptor(options: ResponseStatusInterceptorOptions): ResponseInterceptor {
  const proxyResponse = (newResponse: any, type: string): any => {
    const { handler } = options
    const keys = Object.keys(handler)
    const status = type === 'success' ? newResponse.status : newResponse.response.status
    const key = keys.find((currentKey) => currentKey === status.toString())
    if (!handler[key as unknown as number] && !isFunction(handler[key as unknown as number])) {
      throw Error(`[Axle] ${key} handler should be a function`)
    }

    handler[key as unknown as number](newResponse)

    return newResponse
  }
  return {
    onFulfilled: (response: AxiosResponse<any, any>) => proxyResponse(response, 'success'),
    onRejected: (error: any) => proxyResponse(error, 'error'),
    options: options.axiosInterceptorOptions,
  }
}
