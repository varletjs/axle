# requestHeadersInterceptor

用于自定义请求头。

## 使用

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

`headers` 也可以是一个 getter 函数：

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
