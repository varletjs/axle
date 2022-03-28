# Example

### Modify

`POST` , `PUT` , `PATCH` have similar behaviors. Let's take `POST` as an example.

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