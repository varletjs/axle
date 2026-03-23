# responseStatusInterceptor

Used to intercept status code.

## Usage

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
    include: ['method:get', 'method:post'],
    exclude: [({ url }) => url.startsWith('/other/')],
  }),
)
```
