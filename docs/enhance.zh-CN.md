# 加强

### 格式化接口参数

`axle` 统一了接口的入参格式，使得开发者可以更专注于业务的开发，以下是一些与 `axios` 对比的例子。

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

// 默认情况下，axios将 JavaScript 对象序列化为 JSON 。 要以 application/x-www-form-urlencoded 格式发送数据，您可以使用以下选项之一。
function postURLSearchParams(){
    const params = new URLSearchParams();
    params.append('name', 'axios');
    return  axios.post('/foo', params);
    
    // 或者
    return axios.post('/foo', qs.stringify({ 'name': 'axios' }));
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

axios.defaults.headers.common['Authorization'] = 'your token';

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

// axle加强了以 application/x-www-form-urlencoded 格式发送数据的方法
function postURLSearchParams(){
    return axleHelpers.post('/foo', { name: 'axle'});
}

function uploadFile() {
  return axleHelpers.postMultipart('/user', { name: 'axle', file: new File() })
}

axleHelpers.setHeader('Authorization', 'your token')
```