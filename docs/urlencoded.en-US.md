# Axle API

## Modify

### Urlencoded

`Axle` provides the following methods to send `application/x-www-form-urlencoded` format data.

- `post`
- `put`
- `patch`

### Function Signature

```ts
export type ModifyHelper = < T = any, R = AxiosResponse<T>>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) => Promise<R>

export interface AxleHelpers {
  post: ModifyHelper
  put: ModifyHelper
  patch: ModifyHelper
}
```

### Example

`POST` , `PUT` , `PATCH` have similar behaviors. Let's take `POST` as an example.


```js
import { createAxle } from '@varlet/axle'

const axle = createAxle(/** @see http://www.axios-js.com/zh-cn/docs/#axios-create-config **/)
const axleHelpers = axle.helpers

function postData() {
  return axleHelpers.post('/user', { name: 'axle' })
}
```

