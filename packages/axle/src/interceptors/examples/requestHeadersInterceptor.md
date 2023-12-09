# Request Headers Interceptor

```js
import { createAxle, requestHeadersInterceptor } from '@varlet/axle'

const axle = createAxle()

axle.useRequestInterceptor(
  requestHeadersInterceptor({
    // additional headers carried by the request
    headers: {
      'Custom-Field': 'custom-field'
    },

    // optional filtering options that determine whether the interceptor intercepts
    include: ['method:get', 'method:post'],
    exclude: ['/user/**'],
  })
)
```

```js
import { createAxle, requestHeadersInterceptor } from '@varlet/axle'

const axle = createAxle()

axle.useRequestInterceptor(
  requestHeadersInterceptor({
    // headers can also be a getter
    headers: () => ({
      'Authorization': localStorage.getItem('token'),
      'Custom-Field': 'custom-field',
    }),

    // optional filtering options that determine whether the interceptor intercepts
    include: ['method:get', 'method:post'],
    exclude: ['/user/**'],
  })
)
```