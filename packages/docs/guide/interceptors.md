# Interceptors

Axle provides some practical request/response interceptors, and is compatible with both `axle` and `axios`.

## Usage with axle

```ts
import { requestHeadersInterceptor, responseRetryInterceptor } from '@varlet/axle'

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

## Usage with axios

```ts
import { requestHeadersInterceptor, responseRetryInterceptor } from '@varlet/axle'

const headersInterceptor = requestHeadersInterceptor({
  headers: () => ({
    token: localStorage.getItem('token'),
    'Axle-Custom-Header': 'Axle-Custom-Header',
  }),
})

const retryInterceptor = responseRetryInterceptor({ count: 3 })

axios.interceptors.request.use(
  headersInterceptor.onFulfilled,
  headersInterceptor.onRejected,
  headersInterceptor.options,
)
axios.interceptors.response.use(retryInterceptor.onFulfilled, retryInterceptor.onRejected, retryInterceptor.options)
```

## General Parameters

Each built-in interceptor supports `include`, `exclude`, and `axiosInterceptorOptions` (same as Axios interceptor).

### include & exclude

Used for request filtering to determine which requests should apply the interceptor. Supports specifying `method`, `glob` syntax, or `status` code.

```ts
axle.useResponseInterceptor(
  responseRetryInterceptor({
    count: 3,
    include: ['method:put', 'method:post', 'status:500'],
    exclude: ['/system/**', '/user/addUser', 'status:400'],
  }),
)
```

## List of Built-in Interceptors

| Name                                                                   | Description                                       |
| ---------------------------------------------------------------------- | ------------------------------------------------- |
| [requestHeadersInterceptor](/interceptors/request-headers-interceptor) | Used to customize the request header              |
| [requestMockInterceptor](/interceptors/request-mock-interceptor)       | Used to mock data                                 |
| [requestMd5Interceptor](/interceptors/request-md5-interceptor)         | Used for md5 encryption of parameters and headers |
| [responseRetryInterceptor](/interceptors/response-retry-interceptor)   | Used to realize the request abnormal retry        |
| [responseStatusInterceptor](/interceptors/response-status-interceptor) | Used to intercept status code                     |
| [responseBlobInterceptor](/interceptors/response-blob-interceptor)     | Used to intercept blob type                       |
