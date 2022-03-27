# 用例

### 格式化接口参数

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

// 创建axle实例，axle拥有与axios相同的能力
const axle = createAxle(/** @see http://www.axios-js.com/zh-cn/docs/#axios-create-config **/)

// axle的一些辅助函数
const axleHelpers = axle.helpers

function getUser() {
  return axleHelpers.get('/user', { id: 1 })
}

function addUser() {
  return axleHelpers.postMultipart('/user', { name: 'axle', file: new File() })
}
```