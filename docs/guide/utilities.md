# Utilities

## Download File

Notify the browser to download the file.

```js
import { download } from '@varlet/axle'

download(await axle.getBlob('/url', { id: 1 }), 'filename')
```

## Error Handling

Return both a success response and an error response.

```js
import { withResponse } from '@varlet/axle'

const { response, errorResponse } = await withResponse(axle.get('/url'))
```

## Common Header Operations

```js
const headers = axle.getHeaders()
axle.setHeader('TOKEN', TOKEN)
axle.removeHeader('TOKEN')
```
