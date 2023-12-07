# Response Status Interceptor

```js
import { createAxle, responseStatusInterceptor } from '@varlet/axle'

const axle = createAxle()

axle.useResponseInterceptor(
  responseStatusInterceptor({
    // by default, axios defines status >= 200 && status < 300 to be valid status
    validStatusHandler: {
      200: (response) => {
        console.log('validate handler status 200:', response)
      },
    },
    invalidStatusHandler: {
      500: (error) => {
        console.log('invalidate handler status 500:', error)
      },
    },

    // optional filtering options that determine whether the interceptor intercepts
    include: ['method:get', 'method:post'],
    exclude: ['/user/**'],
  })
)
```
