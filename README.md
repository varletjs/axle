<span>English</span> |
<a href="https://github.com/varletjs/axle/blob/main/README.zh-CN.md">中文</a>

### Intro

Progressive request tool based on axios. It does not destroy the original abilities of axios, and helps you process requests more easily.

### QuickStart

#### Install

```shell
# Install with npm, yarn or pnpm

# npm
npm i @varlet/axle -S

#yarn
yarn add @varlet/axle

#pnpm
pnpm add @varlet/axle
```

#### Send Request

Axle normalizes the parameters of the request function, and expands more request functions for different interface requirements. Here is a simple example.

```js
import { createAxle } from '@varlet/axle'

const axle = createAxle(/** @see https://axios-http.com **/)

axle.get('/url', { current: 1, pageSize: 10 }, { headers: {} })
axle.post('/url', { name: 'Axle' }, { headers: {} })
```

### Config

Axle fully supports all configuration abilities of axios.

```js
const axle = createAxle(/** @see https://axios-http.com **/)
// The built-in axios of the axle, the usage is exactly the same as that of axios, and shares the configuration with the axle.
const { axios } = axle

axios.defaults.baseURL = 'https://api.example.com'
axios.defaults.headers.common['TOKEN'] = TOKEN
axios.defaults.timeout = 2500

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)
```

## Axle & Axios Request Functions

The request function provided by Axle can help you send requests more easily. Here are some examples including comparison with axios.
Tips: Take `get` and `post` as examples below, Axle also supports `options`, `head`, `delete`, `patch` , `put` methods.

### get

#### JSON

```js
// axios
axios.get('/url', { params: { id: 1 } })
// axle
axle.get('/url', { id: 1 })
```

#### Blob

```js
// axios
axios.get('/url', { params: { id: 1 }, responseType: 'blob' })
// axle
axle.getBlob('/url', { id: 1 })
```

#### Text

```js
// axios
axios.get('/url', { params: { id: 1 }, responseType: 'text' })
// axle
axle.getText('/url', { id: 1 })
```

#### Document

```js
// axios
axios.get('/url', { params: { id: 1 }, responseType: 'document' })
// axle
axle.getDocument('/url', { id: 1 })
```

#### ArrayBuffer

```js
// axios
axios.get('/url', { params: { id: 1 }, responseType: 'arraybuffer' })
// axle
axle.getArrayBuffer('/url', { id: 1 })
```

#### Stream

```js
// axios
axios.get('/url', { params: { id: 1 }, responseType: 'stream' })
// axle
axle.getStream('/url', { id: 1 })
```

### post

#### JSON

Same with axios.

```js
// axios
axios.post('/url', { name: 'foo' })
// axle
axle.post('/url', { name: 'foo' })
```

#### application/x-www-form-urlencoded

```js
// axios
axios.post('/url', qs.stringify({ name: 'foo' }), {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})
// axle
axle.postUrlEncode('/url', { name: 'foo' })
```

#### multipart/form-data

```js
// axios
const formData = new FormData()
formData.append('name', 'foo')
formData.append('file', new File())

axios.post('/url', formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})
// axle
axle.postMultipart('/url', { name: 'foo', file: new File() })
```

## Utils

#### Notify the browser to download the file

```js
import { download } from '@varlet/axle'

download(await axle.getBlob('/url', { id: 1 }), 'filename')
```

#### Return both a success response and an error response

```js
import { withResponse } from '@varlet/axle'

const { response, errorResponse } = await withResponse(axle.get('/url'))
```

#### Common Header Operate

```js
const headers = axle.getHeaders()
axle.setHeader('TOKEN', TOKEN)
axle.removeHeader('TOKEN')
```

## Built-in interceptor

axle provides some practical requests/response interceptors, and is compatible with `axle` and `axios`.

### axios

```ts
import { requestHeadersInterceptor, responseTimeoutInterceptor } from '@varlet/axle'

const headersInterceptor = requestHeadersInterceptor({
  headers: () => ({
    token: localStorage.getItem('token'),
    'Axle-Custom-Header': 'Axle-Custom-Header',
  })
})

const retryInterceptor = responseRetryInterceptor({ count: 3 })

axios.interceptors.request.use(
  headersInterceptor.onFulfilled, 
  headersInterceptor.onRejected, 
  headersInterceptor.options
)
axios.interceptors.response.use(
  retryInterceptor.onFulfilled,
  retryInterceptor.onRejected, 
  retryInterceptor.options
)
```

### axle

```ts
import { requestHeadersInterceptor, responseTimeoutInterceptor } from '@varlet/axle'

axle.useRequestInterceptor(
  requestHeadersInterceptor({
    headers: () => ({
      token: localStorage.getItem('token'),
      'Axle-Custom-Header': 'Axle-Custom-Header',
    }),
  }),
)

axle.useResponseInterceptor(responseRetryInterceptor({ count: 3 }))
```

### General parameter of the interceptor

Each built-in interceptor supports `include` `exclude` `axiosInterceptorOptions (same with Axios interceptor)`.

#### include & exclude

It is used to request filtering to determine what request should apply the interceptor and support specifying the `method`、 `glob` syntax or `status` code. The usage method is as follows.

```ts
axle.useResponseInterceptor(
  responseRetryInterceptor({ 
    count: 3,
    include: ['method:put', 'method:post', 'status:500'],
    exclude: ['/system/**', '/user/addUser', 'status:400']
  }),
)
```

### List of built-in interceptor

| Name | Description |
| --- | --- |
| [requestHeadersInterceptor](https://github.com/varletjs/axle/blob/main/packages/axle/src/interceptors/examples/requestHeadersInterceptor.md) | Used to customize the request header |
| [requestMockInterceptor](https://github.com/varletjs/axle/blob/main/packages/axle/src/interceptors/examples/requestMockInterceptor.md) | Used to mock data |
| [requestMd5Interceptor](https://github.com/varletjs/axle/blob/main/packages/axle/src/interceptors/examples/requestMd5Interceptor.md) | Used for md encryption of parameters and headers |
| [responseRetryInterceptor](https://github.com/varletjs/axle/blob/main/packages/axle/src/interceptors/examples/responseRetryInterceptor.md) | Used to realize the request abnormal retry |
| [responseStatusInterceptor](https://github.com/varletjs/axle/blob/main/packages/axle/src/interceptors/examples/responseStatusInterceptor.md) | Used to intercept status code |
| [responseBlobInterceptor](https://github.com/varletjs/axle/blob/main/packages/axle/src/interceptors/examples/responseBlobInterceptor.md) | Used to intercept blob type |
| [responseTimeoutInterceptor](https://github.com/varletjs/axle/blob/main/packages/axle/src/interceptors/examples/responseTimeoutInterceptor.md) | Used to abnormal timeout |

## Vue Composition API

Axle provides the usage of Vue Composition API style, which encapsulates the `loading status`, `error status`, `upload and download progress` of the request, `return data`, `lifecycle`, etc., And inherit all the configuration of `axios`.

```html
<script setup>
import { createAxle } from '@varlet/axle'
import { createUseAxle } from '@varlet/axle/use'

const axle = createAxle(/** @see https://axios-http.com **/)

const useAxle = createUseAxle({
  axle,
  // Optional value: Default immediate of the useAxle
  immediate: true,
  // Optional value: Default onTransform of the useAxle
  onTransform: (response) => response,
})

const [users, getUsers, { loading, error, uploadProgress, downloadProgress, abort, resetValue }] = useAxle({
  // Request initial value
  value: [],
  // Request method
  method: 'get',
  // Request url can be a getter function
  url: '/user',
  // Whether to send the request immediately, defaults false
  immediate: true,
  // Whether the value needs to be reset before requesting, defaults false
  resetValue: true,
  // Whether to clone when resetting value, defaults false
  // When set to true, use JSON.parse(JSON.stringify(value)) cloned
  // When set to a function, the set function will be used as the clone function, such as v => _.cloneDeep(v)
  cloneResetValue: true,
  // Request params, defaults {}, can be a getter function
  params: { current: 1, pageSize: 10 },
  // Axios config, see https://axios-http.com can be a getter function
  config: { headers: {} },
  // lifecycle
  onBefore(refs) {
    const { data, loading, error, uploadProgress, downloadProgress } = refs
    console.log(data.value, loading.value, error.value, uploadProgress.value, downloadProgress.value)
    // Do request before
  },
  onTransform(response, refs) {
    // Handle data transform, The transformed data will be the value of users.
    return response.data
  },
  onSuccess(response, refs) {
    // Do request success
  },
  onError(error, refs) {
    // Do request error
  },
  onAfter(refs) {
    // Do request after
  },
})
</script>

<template>
  <span>{{ users }}</span>
  <span>{{ loading }}</span>
  <span>{{ error }}</span>
  <span>{{ uploadProgress }}</span>
  <span>{{ downloadProgress }}</span>
  <button @click="getUsers">Send Request</button>
  <button @click="abort">Abort Request</button>
</template>
```

### Parallel Utils

Axle provides some parallel request processing tools, please refer to the following examples.

```html
<script setup>
import { createAxle } from '@varlet/axle'
import { createUseAxle, useValues, useAverageProgress, useHasLoading } from '@varlet/axle/use'

const axle = createAxle(/** @see https://axios-http.com **/)

const useAxle = createUseAxle({ axle })

const [users, getUsers, { loading: isUsersLoading, downloadProgress: usersDownloadProgress }] = useAxle({
  value: [],
  method: 'get',
  url: '/user',
})

const [roles, getRoles, { loading: isRolesLoading, downloadProgress: rolesDownloadProgress }] = useAxle({
  value: [],
  method: 'get',
  url: '/role',
})

// At the end of all requests, loading is false
const loading = useHasLoading(isUsersLoading, isRolesLoading)
// At the end of all requests, downloadProgress is 1
const downloadProgress = useAverageProgress(usersDownloadProgress, rolesDownloadProgress)
// Ref<[
//   [{ name: 'foo' }, { name: 'bar' }],
//   [{ role: 'admin' }, { role: 'user' }]
// ]> <-
// [
//   Ref<[{ name: 'foo' }, { name: 'bar' }]>,
//   Ref<[{ role: 'admin' }, { role: 'user' }]>
// ]
const usersRoles = useValues(users, roles)

function sendAllRequest() {
  // parallel
  getUsers()
  getRoles()
}
</script>

<template>
  <span>{{ usersRoles }}</span>
  <span>{{ loading }}</span>
  <span>{{ downloadProgress }}</span>
  <button @click="sendAllRequest">Send All Request</button>
</template>
```
