# Axle API

## Fetch

### Json

`Axle` provides the following methods to fetch `json`.

- `get`
- `head`
- `options`
- `delete`

### Function Signature

```ts
export type FetchHelper = < T = any, R = AxiosResponse<T>>(
  url: string,
  params?: any,
  config?: AxiosRequestConfig
) => Promise<R>

export interface AxleHelpers {
  get: FetchHelper
  head: FetchHelper
  options: FetchHelper
  delete: FetchHelper
}
```

### Example

`GET` , `HEAD` , `DELETE` , `OPTION` have similar behaviors. Let's take `GET` as an example.

```js
import { createAxle } from '@varlet/axle'

const axle = createAxle(/** @see http://www.axios-js.com/zh-cn/docs/#axios-create-config **/)
const axleHelpers = axle.helpers

function getJson() {
  return axleHelpers.get('/user/1')
}
```

