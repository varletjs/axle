# Example

### Fetch

`GET` , `HEAD` , `DELETE` , `OPTION` have similar behaviors. Let's take `GET` as an example.

```js
import { createAxle } from '@varlet/axle'

const axle = createAxle(/** @see http://www.axios-js.com/zh-cn/docs/#axios-create-config **/)
const axleHelpers = axle.helpers

function getById() {
  return axleHelpers.get('url/1')
}

function getBlob() {
  axleHelpers.getBlob('/url', { name: 'axle'}, { onDownloadProgress: (e) => {console.log(e)}}).then((res) => {
    axleHelpers.download(res.data, 'getBlob.png')
  })  
}

function getDocument() {
  return axleHelpers.getDocument('/index.html')
}

function getArrayBuffer() {
    return axleHelpers.getArrayBuffer('/url')
}

function getText() {
  return axleHelpers.getText('/index.html')
}

function getStream() {
  return axleHelpers.getStream('/url')
}
```
