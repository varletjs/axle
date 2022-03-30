# Axle API

## Fetch

### Document

`Axle` provides the following methods to fetch `document`.

- `getDocument`
- `headDocument`
- `optionsDocument`
- `deleteDocument`

### Function Signature

```ts
export type FetchHelper = < T = any, R = AxiosResponse<T>>(
  url: string,
  params?: any,
  config?: AxiosRequestConfig
) => Promise<R>

export interface AxleHelpers {
  getDocument: FetchHelper
  headDocument: FetchHelper
  optionsDocument: FetchHelper
  deleteDocument: FetchHelper
}
```

### Example

`GET` , `HEAD` , `DELETE` , `OPTION` have similar behaviors. Let's take `GET` as an example.

```js
import { createAxle } from '@varlet/axle'

const axle = createAxle(/** @see http://www.axios-js.com/zh-cn/docs/#axios-create-config **/)
const axleHelpers = axle.helpers

function getDocument() {
  return axleHelpers.getDocument('/index.html')
}
```

