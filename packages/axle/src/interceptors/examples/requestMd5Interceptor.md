# Request Md5 Interceptor

```js
import { createAxle, requestMd5Interceptor } from '@varlet/axle'

const axle = createAxle()

axle.useRequestInterceptor(
  requestMd5Interceptor({
    // url and data/params/headers path mapping
    mapping: {
      '/user/add-user': {
        path: ['data.name'],
        method: 'post'
      }
    },

    // optional filtering options that determine whether the interceptor intercepts
    include: ['method:post'],
    exclude: ['/other/**'],
  })
)
```