# Axle API

## 提交数据

### 提交 FormData

`Axle` 提供了以下方法用于以 `multipart/form-data` 格式发送数据。

- `postMultipart`
- `putMultipart`
- `patchMultipart`

### 函数签名

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

### 用例

`POST` , `PUT` , `PATCH` 拥有相似的行为，我们以 `POST` 举例。

```js
import { createAxle } from '@varlet/axle'

const axle = createAxle(/** @see http://www.axios-js.com/zh-cn/docs/#axios-create-config **/)
const axleHelpers = axle.helpers

function postMultipart() {
  return axleHelpers.postMultipart('/user', { name: 'axle', file: new File() })
}
```

