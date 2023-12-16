# Request Md5 Interceptor

```js
import { createAxle, requestMd5Interceptor } from '@varlet/axle'

const axle = createAxle()

axle.useRequestInterceptor(
  requestMd5Interceptor({
    // url and data/params/headers path mapping
    mappings: [
      {
        url: '/user/login',
        path: ['data.password']
      },
      {
        url: '/user/add-user',
        method: 'post',
        path: ['data.name']
      }
    ],

    // optional filtering options that determine whether the interceptor intercepts
    include: ['method:post'],
    exclude: ['/other/**'],
  })
)
```