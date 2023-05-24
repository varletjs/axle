import axios from 'axios'
import qs from 'qs'
import type { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse, ResponseType } from 'axios'

export type AxleRequestConfig = AxiosRequestConfig & {
  exceptionMessage?: any
}
export type FetchHelper = <T = any, R = AxiosResponse<T>>(
  url: string,
  params?: any,
  config?: AxleRequestConfig
) => Promise<R>
export type ModifyHelper = <T = any, R = AxiosResponse<T>>(
  url: string,
  params?: any,
  config?: AxleRequestConfig
) => Promise<R>

export interface AxiosHelpers {
  get: FetchHelper
  getBlob: FetchHelper
  getDocument: FetchHelper
  getText: FetchHelper
  getArrayBuffer: FetchHelper
  getStream: FetchHelper

  head: FetchHelper
  headBlob: FetchHelper
  headDocument: FetchHelper
  headText: FetchHelper
  headArrayBuffer: FetchHelper
  headStream: FetchHelper

  options: FetchHelper
  optionsBlob: FetchHelper
  optionsDocument: FetchHelper
  optionsText: FetchHelper
  optionsArrayBuffer: FetchHelper
  optionsStream: FetchHelper

  delete: FetchHelper
  deleteBlob: FetchHelper
  deleteDocument: FetchHelper
  deleteText: FetchHelper
  deleteArrayBuffer: FetchHelper
  deleteStream: FetchHelper

  post: ModifyHelper
  postJSON: ModifyHelper
  postMultipart: ModifyHelper

  put: ModifyHelper
  putJSON: ModifyHelper
  putMultipart: ModifyHelper

  patch: ModifyHelper
  patchJSON: ModifyHelper
  patchMultipart: ModifyHelper

  download(blob: string | Blob, filename: string): void

  setHeader(key: string, value: string): void
  removeHeader(key: string | string[]): void
}

export type FetchMethods = 'get' | 'delete' | 'options' | 'head'

export type ModifyMethods = 'post' | 'put' | 'patch'

export type AxleInstance = AxiosInstance & {
  helpers: AxiosHelpers
}

export function createFetchHelper(service: AxleInstance, method: FetchMethods, responseType: ResponseType) {
  return function <T, R = AxiosResponse<T>>(url: string, params?: any, config?: AxleRequestConfig): Promise<R> {
    return service[method](url, {
      params: {
        _t: Date.now(),
        ...params,
      },
      responseType,
      ...config,
    })
  }
}

export function createModifyHelper(
  service: AxleInstance,
  method: ModifyMethods,
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
  const service = axios.create(config) as AxleInstance

  function setHeader(key: string, value: string | number | boolean) {
    ;(service.defaults.headers['common'] as AxiosRequestHeaders)[key] = value
  }

  function removeHeader(key: string | string[]) {
    if (typeof key === 'string') {
      Reflect.deleteProperty(service.defaults.headers['common'] as AxiosRequestHeaders, key)
      return
    }

    key.forEach((k) => Reflect.deleteProperty(service.defaults.headers['common'] as AxiosRequestHeaders, k))
  }

  service.helpers = {
    get: createFetchHelper(service, 'get', 'json'),
    getBlob: createFetchHelper(service, 'get', 'blob'),
    getDocument: createFetchHelper(service, 'get', 'document'),
    getArrayBuffer: createFetchHelper(service, 'get', 'arraybuffer'),
    getText: createFetchHelper(service, 'get', 'text'),
    getStream: createFetchHelper(service, 'get', 'stream'),

    head: createFetchHelper(service, 'head', 'json'),
    headBlob: createFetchHelper(service, 'head', 'blob'),
    headDocument: createFetchHelper(service, 'head', 'document'),
    headArrayBuffer: createFetchHelper(service, 'head', 'arraybuffer'),
    headText: createFetchHelper(service, 'head', 'text'),
    headStream: createFetchHelper(service, 'head', 'stream'),

    options: createFetchHelper(service, 'options', 'json'),
    optionsBlob: createFetchHelper(service, 'options', 'blob'),
    optionsDocument: createFetchHelper(service, 'options', 'document'),
    optionsArrayBuffer: createFetchHelper(service, 'options', 'arraybuffer'),
    optionsText: createFetchHelper(service, 'options', 'text'),
    optionsStream: createFetchHelper(service, 'options', 'stream'),

    delete: createFetchHelper(service, 'delete', 'json'),
    deleteBlob: createFetchHelper(service, 'delete', 'blob'),
    deleteDocument: createFetchHelper(service, 'delete', 'document'),
    deleteArrayBuffer: createFetchHelper(service, 'delete', 'arraybuffer'),
    deleteText: createFetchHelper(service, 'delete', 'text'),
    deleteStream: createFetchHelper(service, 'delete', 'stream'),

    post: createModifyHelper(service, 'post', 'application/x-www-form-urlencoded'),
    postJSON: createModifyHelper(service, 'post', 'application/json'),
    postMultipart: createModifyHelper(service, 'post', 'multipart/form-data'),

    put: createModifyHelper(service, 'put', 'application/x-www-form-urlencoded'),
    putJSON: createModifyHelper(service, 'put', 'application/json'),
    putMultipart: createModifyHelper(service, 'put', 'multipart/form-data'),
    patch: createModifyHelper(service, 'patch', 'application/x-www-form-urlencoded'),
    patchJSON: createModifyHelper(service, 'patch', 'application/json'),
    patchMultipart: createModifyHelper(service, 'patch', 'multipart/form-data'),
    download,

    setHeader,
    removeHeader,
  }

  return service
}
