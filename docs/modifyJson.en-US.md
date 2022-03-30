# Axle API

## Modify

### Json

`Axle` provides the following methods to send `application/json` format data.

- `postJson`
- `putJson`
- `patchJson`

### Function Signature

```ts
export type ModifyHelper = < T = any, R = AxiosResponse<T>>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) => Promise<R>

export interface AxleHelpers {
  postJson: ModifyHelper
  putJson: ModifyHelper
  patchJson: ModifyHelper
}
```

### Example

`POST` , `PUT` , `PATCH` have similar behaviors. Let's take `POST` as an example.


```js
import { createAxle } from '@varlet/axle'

const axle = createAxle(/** @see http://www.axios-js.com/zh-cn/docs/#axios-create-config **/)
const axleHelpers = axle.helpers

function postJson() {
  return axleHelpers.postJson('/user', { name: 'axle' })
}
```

