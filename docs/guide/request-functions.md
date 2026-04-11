# Request Functions

The request function provided by Axle can help you send requests more easily. Here are some examples including comparison with axios.

::: tip
Take `get` and `post` as examples below, Axle also supports `options`, `head`, `delete`, `patch`, `put` methods.
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

Same with axios.

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
