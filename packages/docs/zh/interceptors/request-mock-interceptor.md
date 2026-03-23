# requestMockInterceptor

用于模拟数据。

## 使用

```js
import { createAxle, requestMockInterceptor } from '@varlet/axle'

const axle = createAxle()

axle.useRequestInterceptor(
  requestMockInterceptor({
    mappings: [
      {
        url: '/user/getUser',
        handler: () => ({
          data: {
            code: 200,
            message: 'success',
            data: {
              id: 1,
              name: 'Mock Jack Ma',
            },
          },
        }),
      },
      {
        url: '/user/getUsers',
        method: 'get',
        delay: 1000,
        handler: () => ({
          data: {
            code: 200,
            message: 'success',
            data: [
              {
                id: 1,
                name: 'Mock Jack Ma',
              },
              {
                id: 2,
                name: 'Mock Tom',
              },
            ],
          },
        }),
      },
      {
        url: (url) => url.startsWith('/error/'),
        delay: 1000,
        handler: () => ({
          // status 默认 200
          status: 500,
          data: null,
        }),
      },
    ],
    include: ['method:get', 'method:post'],
    exclude: [({ url }) => url.startsWith('/other/')],
  }),
)
```
