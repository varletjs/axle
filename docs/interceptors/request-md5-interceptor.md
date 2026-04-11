# requestMd5Interceptor

Used for md5 encryption of parameters and headers.

## Usage

```js
import { createAxle, requestMd5Interceptor } from '@varlet/axle'

const axle = createAxle()

axle.useRequestInterceptor(
  requestMd5Interceptor({
    mappings: [
      {
        url: '/user/login',
        path: ['data.password'],
      },
      {
        url: (url) => url === '/user/add-user',
        method: 'post',
        path: ['data.name'],
      },
    ],
    include: ['method:post'],
    exclude: [({ url }) => url.startsWith('/other/')],
  }),
)
```
