# Enhance

### Normalize Api Arguments

`Axle` unifies the input parameter format of the interface, so that developers can focus more on business development. 
The following are some examples compared with `axios`.

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

// By default, axios serializes JavaScript objects to JSON. To send data in the application/x-www-form-urlencoded format instead, you can use one of the following options.
function postURLSearchParams() {
    const params = new URLSearchParams();
    params.append('name', 'axios');
    return  axios.post('/foo', params);

    // or 
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

// create axle instance , axle has the same abilities as axios
const axle = createAxle(/** @see http://www.axios-js.com/zh-cn/docs/#axios-create-config **/)

// Some helper functions of axle
const axleHelpers = axle.helpers

function getUser() {
  return axleHelpers.get('/user', { id: 1 })
}

// axle enhances the way to send data in application/x-www-form-urlencoded format
function postURLSearchParams() {
    return axleHelpers.post('/foo', { name: 'axle'});
}

function uploadFile() {
  return axleHelpers.postMultipart('/user', { name: 'axle', file: new File() })
}

axleHelpers.setHeader('Authorization', 'your token')
```