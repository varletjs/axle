# requestHeadersInterceptor

Used to customize the request header.

## Usage

```js
import { createAxle, requestHeadersInterceptor } from '@varlet/axle'

const axle = createAxle()

axle.useRequestInterceptor(
  requestHeadersInterceptor({
    headers: {
      'Custom-Field': 'custom-field',
    },
    include: ['method:get', 'method:post'],
    exclude: [({ url }) => url.startsWith('/other/')],
  }),
)
```

`headers` can also be a getter function:

```js
import { createAxle, requestHeadersInterceptor } from '@varlet/axle'

const axle = createAxle()

axle.useRequestInterceptor(
  requestHeadersInterceptor({
    headers: () => ({
      Authorization: localStorage.getItem('token'),
      'Custom-Field': 'custom-field',
    }),
    include: ['method:get', 'method:post'],
    exclude: [({ url }) => url.startsWith('/other/')],
  }),
)
```
