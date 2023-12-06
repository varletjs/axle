# Response Blob Interceptor

```js
import { createAxle, responseBlobInterceptor } from '@varlet/axle'

const axle = createAxle()

axle.useResponseInterceptor(
  responseBlobInterceptor({
    // transform blob to normal response type
    onResponse: (response) => ({
      ...response,
      data: {
        code: 200,
        data: response.data,
        message: 'success',
      }
    }),

    // optional filtering options that determine whether the interceptor intercepts
    include: ['method:get', 'method:post'],
    exclude: ['/user/**'],
  })
)
```