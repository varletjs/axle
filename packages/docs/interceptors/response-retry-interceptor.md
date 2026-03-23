# responseRetryInterceptor

Used to realize the request abnormal retry.

## Usage

```js
import { createAxle, responseRetryInterceptor } from '@varlet/axle'

const axle = createAxle()

axle.useResponseInterceptor(
  responseRetryInterceptor({
    count: 3,
    include: ['method:get', 'method:post'],
    exclude: [({ url }) => url.startsWith('/other/')],
  }),
)
```
