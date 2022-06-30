<div>
  <a href="https://github.com/varletjs/axle">
    <img src="https://github.com/varletjs/axle/blob/main/public/logo.svg" width="400">
  </a>
  <h2>A tool library based on axios to simplify the development process</h2>
</div>

### Quickstart

```shell
# use npm or yarn or pnpm

# npm
npm i @varlet/axle -S

# yarn
yarn add @varlet/axle

# pnpm
pnpm add @varlet/axle
```

### Function Signature

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
  // get ArrayBuffer, which can be used for segmented download
  getArrayBuffer: FetchHelper
  // get a readable stream, which can be used for browser caching
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

### Normalize Api Arguments

```js
// axios
import { createAxios } from 'axios'

const axios = createAxios({})

function getUser() {
  return axios.get('/user', {
    params: {
      id: 1,
    },
  })
}

function uploadFile() {
  const formData = new FormData()
  formData.append('name', 'axios')
  formData.append('file', new File())
    
  return axios.post('/user', formData, {
    headers: {
      'Ccontent-Type': 'multipart/form-data',
    },
  })
}
```

```js
// axle
import { createAxle } from '@varlet/axle'

// create axle instance , axle has the same abilities as axios
const axle = createAxle(/** @see http://www.axios-js.com/zh-cn/docs/#axios-create-config **/)

// Some helper functions of axle
const axleHelpers = axle.helpers

function getUser() {
  return axleHelpers.get('/user', { id: 1 })
}

function addUser() {
  return axleHelpers.postMultipart('/user', { name: 'axle', file: new File() })
}
```
