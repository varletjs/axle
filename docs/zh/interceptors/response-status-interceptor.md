# responseStatusInterceptor

用于拦截状态码。

## 使用

```js
import { createAxle, responseStatusInterceptor } from '@varlet/axle'

const axle = createAxle()

axle.useResponseInterceptor(
  responseStatusInterceptor({
    // 默认情况下，axios 定义 status >= 200 && status < 300 为有效状态
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
