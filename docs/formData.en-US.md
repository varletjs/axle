# Axle API

## Modify

### FormData

`Axle` provides the following methods to send `multipart/form-data` format data.

- `postMultipart`
- `putMultipart`
- `patchMultipart`

### Function Signature

```ts
export type ModifyHelper = < T = any, R = AxiosResponse<T>>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) => Promise<R>

export interface AxleHelpers {
  postMultipart: ModifyHelper
  putMultipart: ModifyHelper
  patchMultipart: ModifyHelper
}
```

### Example

`POST` , `PUT` , `PATCH` have similar behaviors. Let's take `POST` as an example.


```js
import { createAxle } from '@varlet/axle'

const axle = createAxle(/** @see http://www.axios-js.com/zh-cn/docs/#axios-create-config **/)
const axleHelpers = axle.helpers

function postMultipart() {
  return axleHelpers.postMultipart('/user', { name: 'axle', file: new File() })
}
```

