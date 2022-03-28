# 用例

### Modify

`POST` , `PUT` , `PATCH` 拥有相似的行为，我们以 `POST` 举例。

```js
import { createAxle } from '@varlet/axle'

const axle = createAxle(/** @see http://www.axios-js.com/zh-cn/docs/#axios-create-config **/)
const axleHelpers = axle.helpers

function post(){
  return axleHelpers.post('/url', { name: 'axle' })
}

function postJSON() {
  return axleHelpers.postJSON('/url', { name: 'axle' })
}

function postMultipart() {
  return axleHelpers.postMultipart('/url',{
    file:new File(),
    name:'axle'
  })
}
```