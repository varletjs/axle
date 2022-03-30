# Axle API

## Fetch

### Text

`Axle` provides the following methods to fetch `text`.

- `getText`
- `headText`
- `optionsText`
- `deleteText`

### Function Signature

```ts
export type FetchHelper = < T = any, R = AxiosResponse<T>>(
  url: string,
  params?: any,
  config?: AxiosRequestConfig
) => Promise<R>

export interface AxleHelpers {
  getText: FetchHelper
  headText: FetchHelper
  optionsText: FetchHelper
  deleteText: FetchHelper
}
```

### Example

`GET` , `HEAD` , `DELETE` , `OPTION` have similar behaviors. Let's take `GET` as an example.

```js
import { createAxle } from '@varlet/axle'

const axle = createAxle(/** @see http://www.axios-js.com/zh-cn/docs/#axios-create-config **/)
const axleHelpers = axle.helpers

function getText() {
  return axleHelpers.getText('/index.html')
}
```

