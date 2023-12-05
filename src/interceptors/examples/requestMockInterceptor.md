# Request Mock Interceptor

```js
import { createAxle, requestMockInterceptor } from '@varlet/axle'

const axle = createAxle()

axle.useRequestInterceptor(
  requestMockInterceptor({
    // url and handler mapping
    mapping: {
      '/user/getUsers': {
        // request delay time (ms)
        delay: 1000,
        handler: () => ({
          data: {
            code: 200,
            data: [
              {
                id: 1,
                name: 'Mock Jack Ma',
              },
              {
                id: 2,
                name: 'Mock Tom',
              },
            ],
            message: 'success',
          },
        }),
      },

      '/error/**': {
        delay: 1000,
        handler: () => ({
          // status defaults 200
          status: 500,
          data: null
        }),
      }
    },

    // optional filtering options that determine whether the interceptor intercepts
    include: ['method:get', 'method:post'],
    exclude: ['/user/**'],
  })
)
```