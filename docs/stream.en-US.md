# Axle API

## Fetch

### Stream

`Axle` provides the following methods to fetch `stream`.

- `getStream`
- `headStream`
- `optionsStream`
- `deleteStream`

### Function Signature

```ts
export type FetchHelper = < T = any, R = AxiosResponse<T>>(
  url: string,
  params?: any,
  config?: AxiosRequestConfig
) => Promise<R>

export interface AxleHelpers {
  getStream: FetchHelper
  headStream: FetchHelper
  optionsStream: FetchHelper
  deleteStream: FetchHelper
}
```

### Example

`GET` , `HEAD` , `DELETE` , `OPTION` have similar behaviors. Let's take `GET` as an example.

```js
import { createAxle } from '@varlet/axle'

const axle = createAxle(/** @see http://www.axios-js.com/zh-cn/docs/#axios-create-config **/)
const axleHelpers = axle.helpers

function getStream() {
  return axleHelpers.getStream('/streamurl')
}
```

