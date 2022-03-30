# Axle API

## Fetch

### Blob

`Axle` provides the following methods to fetch `blob`.

- `getBlob`
- `headBlob`
- `optionsBlob`
- `deleteBlob`

### Function Signature

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

### Example

`GET` , `HEAD` , `DELETE` , `OPTION` have similar behaviors. Let's take `GET` as an example.

```js
import { createAxle } from '@varlet/axle'

const axle = createAxle(/** @see http://www.axios-js.com/zh-cn/docs/#axios-create-config **/)
const axleHelpers = axle.helpers

function getBlob() {
  return axleHelpers.getBlob('/bloburl')
}
```

