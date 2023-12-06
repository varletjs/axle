# Response Retry Interceptor

```js
import { createAxle, responseRetryInterceptor } from '@varlet/axle'

const axle = createAxle()

axle.useResponseInterceptor(
  responseRetryInterceptor({
    // retry count
    count: 3,

    // optional filtering options that determine whether the interceptor intercepts
    include: ['method:get', 'method:post'],
    exclude: ['/user/**'],
  })
)
```