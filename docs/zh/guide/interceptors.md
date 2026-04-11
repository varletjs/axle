# 拦截器

Axle 提供了一些实用的请求/响应拦截器，并且兼容 `axle` 和 `axios`。

## 在 axle 中使用

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

## 在 axios 中使用

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

## 通用参数

每个内置拦截器都支持 `include`、`exclude` 和 `axiosInterceptorOptions`（与 axios 拦截器一致）。

### include & exclude

用于请求过滤，以确定什么请求应该应用该拦截器，支持指定 `method`、`glob` 或者 `status`。

```ts
axle.useResponseInterceptor(
  responseRetryInterceptor({
    count: 3,
    include: ['method:put', 'method:post', 'status:500'],
    exclude: ['/system/**', '/user/addUser', 'status:400'],
  }),
)
```

## 内置拦截器一览

| 名称                                                                      | 描述                        |
| ------------------------------------------------------------------------- | --------------------------- |
| [requestHeadersInterceptor](/zh/interceptors/request-headers-interceptor) | 用于自定义请求头            |
| [requestMockInterceptor](/zh/interceptors/request-mock-interceptor)       | 用于模拟数据                |
| [requestMd5Interceptor](/zh/interceptors/request-md5-interceptor)         | 用于对请求参数进行 md5 处理 |
| [responseRetryInterceptor](/zh/interceptors/response-retry-interceptor)   | 用于实现请求异常重试        |
| [responseStatusInterceptor](/zh/interceptors/response-status-interceptor) | 用于拦截状态码              |
| [responseBlobInterceptor](/zh/interceptors/response-blob-interceptor)     | 用于拦截 blob 类型          |
