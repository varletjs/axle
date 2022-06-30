# Axle API

## Fetch

### ArrayBuffer

`Axle` provides the following methods to fetch `arraybuffer`.

- `getArrayBuffer`
- `headArrayBuffer`
- `optionsArrayBuffer`
- `deleteArrayBuffer`

### Function Signature

```ts
export type FetchHelper = < T = any, R = AxiosResponse<T>>(
  url: string,
  params?: any,
  config?: AxiosRequestConfig
) => Promise<R>

export interface AxleHelpers {
  getArrayBuffer: FetchHelper
  headArrayBuffer: FetchHelper
  optionsArrayBuffer: FetchHelper
  deleteArrayBuffer: FetchHelper
}
```

### Example

`GET` , `HEAD` , `DELETE` , `OPTION` have similar behaviors. Let's take `GET` as an example.

```js
import { createAxle } from '@varlet/axle'

const axle = createAxle(/** @see http://www.axios-js.com/zh-cn/docs/#axios-create-config **/)
const axleHelpers = axle.helpers

function getArrayBuffer() {
  return axleHelpers.getArrayBuffer('/arraybufferurl')
}
```

