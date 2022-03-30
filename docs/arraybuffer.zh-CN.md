# Axle API

## 请求数据

### 请求 Arraybuffer

`Axle` 提供了以下几种请求 `arraybuffer` 的方法。

- `getArraybuffer`
- `headArraybuffer`
- `optionsArraybuffer`
- `deleteArraybuffer`

### 函数签名

```ts
export type FetchHelper = < T = any, R = AxiosResponse<T>>(
  url: string,
  params?: any,
  config?: AxiosRequestConfig
) => Promise<R>

export interface AxleHelpers {
  getArraybuffer: FetchHelper
  headArraybuffer: FetchHelper
  optionsArraybuffer: FetchHelper
  deleteArraybuffer: FetchHelper
}
```

### 用例

`GET` , `HEAD` , `DELETE` , `OPTION` 拥有相似的行为，我们以 `GET` 举例。

```js
import { createAxle } from '@varlet/axle'

const axle = createAxle(/** @see http://www.axios-js.com/zh-cn/docs/#axios-create-config **/)
const axleHelpers = axle.helpers

function getArraybuffer() {
  return axleHelpers.getArraybuffer('/arraybufferurl')
}
```

