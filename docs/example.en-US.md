# Example

### Normalize Api Arguments

```js
// axios
import { createAxios } from 'axios'

const axios = createAxios({})

function getUser() {
  return axios.get('/user', {
    params: {
      id: 1,
    },
  })
}

function uploadFile() {
  const formData = new FormData()
  formData.append('name', 'axios')
  formData.append('file', new File())
    
  return axios.post('/user', formData, {
    headers: {
      'Ccontent-Type': 'multipart/form-data',
    },
  })
}
```

```js
// axle
import { createAxle } from '@varlet/axle'

// create axle instance , axle has the same abilities as axios
const axle = createAxle(/** @see http://www.axios-js.com/zh-cn/docs/#axios-create-config **/)

// Some helper functions of axle
const axleHelpers = axle.helpers

function getUser() {
  return axleHelpers.get('/user', { id: 1 })
}

function addUser() {
  return axleHelpers.postMultipart('/user', { name: 'axle', file: new File() })
}
```