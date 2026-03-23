# 请求函数

`Axle` 提供的请求函数可以帮助您更轻松地发送请求。以下是一些示例，包括与 `axios` 的比较。

::: tip
下面只是以 `get` 和 `post` 为例，除此之外 Axle 还支持 `options`、`head`、`delete`、`patch`、`put` 方法。
:::

## get

### JSON

```js
// axle
axle.get('/url', { id: 1 })
// axios
axios.get('/url', { params: { id: 1 } })
```

### Blob

```js
// axle
axle.getBlob('/url', { id: 1 })
// axios
axios.get('/url', { params: { id: 1 }, responseType: 'blob' })
```

### Text

```js
// axle
axle.getText('/url', { id: 1 })
// axios
axios.get('/url', { params: { id: 1 }, responseType: 'text' })
```

### Document

```js
// axle
axle.getDocument('/url', { id: 1 })
// axios
axios.get('/url', { params: { id: 1 }, responseType: 'document' })
```

### ArrayBuffer

```js
// axle
axle.getArrayBuffer('/url', { id: 1 })
// axios
axios.get('/url', { params: { id: 1 }, responseType: 'arraybuffer' })
```

### Stream

```js
// axle
axle.getStream('/url', { id: 1 })
// axios
axios.get('/url', { params: { id: 1 }, responseType: 'stream' })
```

## post

### JSON

和 axios 一致。

```js
// axle
axle.post('/url', { name: 'foo' })
// axios
axios.post('/url', { name: 'foo' })
```

### application/x-www-form-urlencoded

```js
// axle
axle.postUrlEncode('/url', { name: 'foo' })
// axios
axios.post('/url', qs.stringify({ name: 'foo' }), {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})
```

### multipart/form-data

```js
// axle
axle.postMultipart('/url', { name: 'foo', file: new File() })
// axios
const formData = new FormData()
formData.append('name', 'foo')
formData.append('file', new File())

axios.post('/url', formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})
```
