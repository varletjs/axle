import axios from 'axios'
import qs from 'qs'
import type {
  AxiosInstance,
  AxiosInterceptorOptions,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  HeadersDefaults,
  InternalAxiosRequestConfig,
  ResponseType,
} from 'axios'
import { inBrowser } from '@varlet/shared'

export type AxleRequestConfig = AxiosRequestConfig & {
  exceptionMessage?: any
}

export type FetchRunner = <T = any, R = AxiosResponse<T>>(
  url: string,
  params?: any,
  config?: AxleRequestConfig
) => Promise<R>

export type ModifyRunner = <T = any, R = AxiosResponse<T>>(
  url: string,
  params?: any,
  config?: AxleRequestConfig
) => Promise<R>

export type FetchMethod = 'get' | 'delete' | 'options' | 'head'

export type ModifyMethod = 'post' | 'put' | 'patch'

export type RunnerMethod = keyof Omit<
  AxleInstance,
  'axios' | 'getHeaders' | 'setHeader' | 'removeHeader' | 'useRequestInterceptor' | 'useResponseInterceptor'
>

export interface Interceptor<V> {
  onFulfilled?: ((value: V) => any) | null
  onRejected?: ((error: any) => any) | null
  options?: AxiosInterceptorOptions
}

export type RequestInterceptor = Interceptor<InternalAxiosRequestConfig>

export type ResponseInterceptor<V = AxiosResponse<any, any>> = Interceptor<V>

export type AxleInstance = {
  get: FetchRunner
  getBlob: FetchRunner
  getDocument: FetchRunner
  getText: FetchRunner
  getArrayBuffer: FetchRunner
  getStream: FetchRunner

  head: FetchRunner
  headBlob: FetchRunner
  headDocument: FetchRunner
  headText: FetchRunner
  headArrayBuffer: FetchRunner
  headStream: FetchRunner

  options: FetchRunner
  optionsBlob: FetchRunner
  optionsDocument: FetchRunner
  optionsText: FetchRunner
  optionsArrayBuffer: FetchRunner
  optionsStream: FetchRunner

  delete: FetchRunner
  deleteBlob: FetchRunner
  deleteDocument: FetchRunner
  deleteText: FetchRunner
  deleteArrayBuffer: FetchRunner
  deleteStream: FetchRunner

  post: ModifyRunner
  postUrlEncode: ModifyRunner
  postMultipart: ModifyRunner

  put: ModifyRunner
  putUrlEncode: ModifyRunner
  putMultipart: ModifyRunner

  patch: ModifyRunner
  patchUrlEncode: ModifyRunner
  patchMultipart: ModifyRunner

  getHeaders(): HeadersDefaults['common']
  setHeader(key: string, value: string): void
  removeHeader(key: string | string[]): void

  useRequestInterceptor(...interceptors: RequestInterceptor[]): void
  useResponseInterceptor(...interceptors: ResponseInterceptor[]): void

  axios: AxiosInstance
}

export function createFetchRunner(service: AxiosInstance, method: FetchMethod, responseType: ResponseType) {
  return function <T, R = AxiosResponse<T>>(url: string, params?: any, config?: AxleRequestConfig): Promise<R> {
    return service[method](url, {
      params,
      responseType,
      ...config,
    })
  }
}

export function createModifyRunner(
  service: AxiosInstance,
  method: ModifyMethod,
  contentType: 'application/json' | 'multipart/form-data' | 'application/x-www-form-urlencoded'
) {
  return function <T, R = AxiosResponse<T>>(url: string, params?: any, config?: AxleRequestConfig): Promise<R> {
    if (contentType === 'application/x-www-form-urlencoded') {
      params = qs.stringify(params)
    }

    if (contentType === 'multipart/form-data') {
      const formData = new FormData()
      Object.keys(params).forEach((key) => formData.append(key, params[key]))
      params = formData
    }

    return service[method](url, params, {
      headers: {
        'Content-Type': contentType,
      },
      ...config,
    })
  }
}

export function download(url: string | Blob, filename: string) {
  if (!inBrowser()) {
    return
  }

  const a = document.createElement('a')
  a.download = filename
  a.style.display = 'none'
  a.href = typeof url === 'string' ? url : URL.createObjectURL(url)
  document.body.appendChild(a)
  a.click()
  URL.revokeObjectURL(a.href)
  document.body.removeChild(a)
}

export function createAxle(config: AxiosRequestConfig = {}): AxleInstance {
  const service = axios.create(config)

  function getHeaders() {
    return service.defaults.headers.common
  }

  function setHeader(key: string, value: string | number | boolean) {
    ;(service.defaults.headers.common as AxiosRequestHeaders)[key] = value
  }

  function removeHeader(key: string | string[]) {
    if (typeof key === 'string') {
      Reflect.deleteProperty(service.defaults.headers.common as AxiosRequestHeaders, key)
      return
    }

    key.forEach((k) => Reflect.deleteProperty(service.defaults.headers.common as AxiosRequestHeaders, k))
  }

  function useRequestInterceptor(...interceptors: RequestInterceptor[]) {
    interceptors.forEach((interceptor) => {
      service.interceptors.request.use(interceptor.onFulfilled, interceptor.onRejected, interceptor.options)
    })
  }

  function useResponseInterceptor(...interceptors: ResponseInterceptor[]) {
    interceptors.forEach((interceptor) => {
      service.interceptors.response.use(interceptor.onFulfilled, interceptor.onRejected, interceptor.options)
    })
  }

  return {
    get: createFetchRunner(service, 'get', 'json'),
    getBlob: createFetchRunner(service, 'get', 'blob'),
    getDocument: createFetchRunner(service, 'get', 'document'),
    getArrayBuffer: createFetchRunner(service, 'get', 'arraybuffer'),
    getText: createFetchRunner(service, 'get', 'text'),
    getStream: createFetchRunner(service, 'get', 'stream'),

    head: createFetchRunner(service, 'head', 'json'),
    headBlob: createFetchRunner(service, 'head', 'blob'),
    headDocument: createFetchRunner(service, 'head', 'document'),
    headArrayBuffer: createFetchRunner(service, 'head', 'arraybuffer'),
    headText: createFetchRunner(service, 'head', 'text'),
    headStream: createFetchRunner(service, 'head', 'stream'),

    options: createFetchRunner(service, 'options', 'json'),
    optionsBlob: createFetchRunner(service, 'options', 'blob'),
    optionsDocument: createFetchRunner(service, 'options', 'document'),
    optionsArrayBuffer: createFetchRunner(service, 'options', 'arraybuffer'),
    optionsText: createFetchRunner(service, 'options', 'text'),
    optionsStream: createFetchRunner(service, 'options', 'stream'),

    delete: createFetchRunner(service, 'delete', 'json'),
    deleteBlob: createFetchRunner(service, 'delete', 'blob'),
    deleteDocument: createFetchRunner(service, 'delete', 'document'),
    deleteArrayBuffer: createFetchRunner(service, 'delete', 'arraybuffer'),
    deleteText: createFetchRunner(service, 'delete', 'text'),
    deleteStream: createFetchRunner(service, 'delete', 'stream'),

    post: createModifyRunner(service, 'post', 'application/json'),
    postUrlEncode: createModifyRunner(service, 'post', 'application/x-www-form-urlencoded'),
    postMultipart: createModifyRunner(service, 'post', 'multipart/form-data'),

    put: createModifyRunner(service, 'put', 'application/json'),
    putUrlEncode: createModifyRunner(service, 'put', 'application/x-www-form-urlencoded'),
    putMultipart: createModifyRunner(service, 'put', 'multipart/form-data'),

    patch: createModifyRunner(service, 'patch', 'application/json'),
    patchUrlEncode: createModifyRunner(service, 'patch', 'application/x-www-form-urlencoded'),
    patchMultipart: createModifyRunner(service, 'patch', 'multipart/form-data'),

    getHeaders,
    setHeader,
    removeHeader,

    useRequestInterceptor,
    useResponseInterceptor,

    axios: service,
  }
}
