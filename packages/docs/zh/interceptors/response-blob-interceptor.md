# responseBlobInterceptor

用于拦截 blob 类型。

## 使用

```js
import { createAxle, responseBlobInterceptor } from '@varlet/axle'

const axle = createAxle()

axle.useResponseInterceptor(
  responseBlobInterceptor({
    onResponse: (response) => ({
      ...response,
      data: {
        code: 200,
        data: response.data,
        message: 'success',
      },
    }),
    include: ['method:get', 'method:post'],
    exclude: [({ url }) => url.startsWith('/other/')],
  }),
)
```
