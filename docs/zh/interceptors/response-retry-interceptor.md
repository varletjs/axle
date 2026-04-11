# responseRetryInterceptor

用于实现请求异常重试。

## 使用

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
