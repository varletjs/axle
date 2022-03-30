# Axle API

## 提交数据

### 提交 Json

`Axle` 提供了以下方法用于以 `application/json` 格式发送数据。

- `postJson`
- `putJson`
- `patchJson`

### 函数签名

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

### 用例

`POST` , `PUT` , `PATCH` 拥有相似的行为，我们以 `POST` 举例。

```js
import { createAxle } from '@varlet/axle'

const axle = createAxle(/** @see http://www.axios-js.com/zh-cn/docs/#axios-create-config **/)
const axleHelpers = axle.helpers

function postJson() {
  return axleHelpers.postJson('/user', { name: 'axle' })
}
```

