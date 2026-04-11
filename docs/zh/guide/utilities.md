# 实用工具

## 下载文件

通知浏览器下载文件。

```js
import { download } from '@varlet/axle'

download(await axle.getBlob('/url', { id: 1 }), 'filename')
```

## 错误处理

同时返回成功响应和错误响应。

```js
import { withResponse } from '@varlet/axle'

const { response, errorResponse } = await withResponse(axle.get('/url'))
```

## 公共 Header 操作

```js
const headers = axle.getHeaders()
axle.setHeader('TOKEN', TOKEN)
axle.removeHeader('TOKEN')
```
