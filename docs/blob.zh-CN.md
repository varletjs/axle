# Axle API

## 请求数据

### 请求 Blob

`Axle` 提供了以下几种请求 `blob` 的方法。

- `getBlob`
- `headBlob`
- `optionsBlob`
- `deleteBlob`

### 函数签名

```ts
export type FetchHelper = < T = any, R = AxiosResponse<T>>(
  url: string,
  params?: any,
  config?: AxiosRequestConfig
) => Promise<R>

export interface AxleHelpers {
  getBlob: FetchHelper
  headBlob: FetchHelper
  optionsBlob: FetchHelper
  deleteBlob: FetchHelper
}
```

### 用例

`GET` , `HEAD` , `DELETE` , `OPTION` 拥有相似的行为，我们以 `GET` 举例。

```js
import { createAxle } from '@varlet/axle'

const axle = createAxle(/** @see http://www.axios-js.com/zh-cn/docs/#axios-create-config **/)
const axleHelpers = axle.helpers

function getBlob() {
  return axleHelpers.getBlob('/bloburl')
}
```

