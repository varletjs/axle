# Response Status Interceptor

```js
import { createAxle, responseStatusInterceptor } from '@varlet/axle'

const axle = createAxle()

axle.useResponseInterceptor(
  responseStatusInterceptor({
    handlerCode: {
      300: (response) => {
        console.log('300', 300, response)
        return response
      },
      400: (response) => {
        console.log('400', 400, response)
        return response
      },
      500: (response) => {
        console.log('500', 500, response)
        return response
      },
    },
    handlerError: (error) => {
      console.log(error, 'error')
      return error
    },

    // optional filtering options that determine whether the interceptor intercepts
    include: ['method:get', 'method:post'],
    exclude: ['/user/**'],
  })
)
```
