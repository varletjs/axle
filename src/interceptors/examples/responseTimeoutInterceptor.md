# Response Timeout Interceptor

```js
import { createAxle, responseTimeoutInterceptor } from '@varlet/axle'

const axle = createAxle()

axle.useResponseInterceptor(
  // normalize the timeout error code to TIMEOUT
  responseTimeoutInterceptor({
    // optional filtering options that determine whether the interceptor intercepts
    include: ['method:get', 'method:post'],
    exclude: ['/user/**'],
  })
)
```

```js
import { createAxle, responseTimeoutInterceptor } from '@varlet/axle'

const axle = createAxle()

axle.useResponseInterceptor(
  // custom error code
  responseTimeoutInterceptor({
    normalizeErrorCode: 'CUSTOM',

    // optional filtering options that determine whether the interceptor intercepts
    include: ['method:get', 'method:post'],
    exclude: ['/user/**'],
  })
)
```