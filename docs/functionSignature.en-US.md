# Function Signature

```typescript
// 'get' | 'head' | 'options' | 'delete'
export type FetchHelper = <T = any, R = AxiosResponse<T>>(
  url: string,
  params?: any,
  config?: AxiosRequestConfig
) => Promise<R>

// 'post' | 'put' | 'patch'
export type ModifyHelper = <T = any, R = AxiosResponse<T>>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) => Promise<R>

export interface AxleHelpers {
  // get data in json format
  get: FetchHelper
  // get data in blob format, which can be used to construct URL download under browser
  getBlob: FetchHelper
  // get the html document, return a dom node, can directly embed the document
  getDocument: FetchHelper
  // get text
  getText: FetchHelper
  // get Arraybuffer, which can be used for segmented download
  getArraybuffer: FetchHelper
  // get a readable stream, which can be used for browser caching
  getStream: FetchHelper

  head: FetchHelper
  headBlob: FetchHelper
  headDocument: FetchHelper
  headText: FetchHelper
  headArraybuffer: FetchHelper
  headStream: FetchHelper

  options: FetchHelper
  optionsBlob: FetchHelper
  optionsDocument: FetchHelper
  optionsText: FetchHelper
  optionsArraybuffer: FetchHelper
  optionsStream: FetchHelper

  delete: FetchHelper
  deleteBlob: FetchHelper
  deleteDocument: FetchHelper
  deleteText: FetchHelper
  deleteArrayBuffer: FetchHelper
  deleteStream: FetchHelper

  // submit application/x-www-form-urlencoded encoded data
  post: ModifyHelper
  // submit application/json encoded data
  postJSON: ModifyHelper
  // submit multipart/form-data encoded data
  postMultipart: ModifyHelper

  put: ModifyHelper
  putJSON: ModifyHelper
  putMultipart: ModifyHelper

  patch: ModifyHelper
  patchJSON: ModifyHelper
  patchMultipart: ModifyHelper

  // browser download file
  download(blob: string | Blob, filename: string): void

  // set global header
  setHeader(key: string, value: string): void
  // remove global header
  removeHeader(key: string | string[]): void
}
```