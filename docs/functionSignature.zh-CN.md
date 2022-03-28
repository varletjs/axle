# 函数签名

```typescript
// 'get' | 'head' | 'options' | 'delete'
export type FetchHelper = < T = any, R = AxiosResponse<T>>(
  url: string,
  params?: any,
  config?: AxiosRequestConfig
) => Promise<R>

// 'post' | 'put' | 'patch'
export type ModifyHelper = < T = any, R = AxiosResponse<T>>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) => Promise<R>

export interface AxleHelpers {
    // 获取json格式数据
    get: FetchHelper
    // 获取blob格式数据,可用于浏览器下构造URL下载
    getBlob: FetchHelper
    // 获取html文档, 返回一个dom节点, 可直接嵌入文档
    getDocument: FetchHelper
    // 获取文本
    getText: FetchHelper
    // 获取Arraybuffer, 可用于分段下载
    getArraybuffer: FetchHelper
    // 获取可读流, 可用于浏览器缓存
    getStream: FetchHelper

    head: FetchHelper
    headBlob: FetchHelper
    headDocument: FetchHelper
    headText: FetchHelper
    headArraybuffer: FetchHelper
    headStream: FetchHelper

    options: FetchHelper
    optionsBlob: FetchHelper
    optionsDocument: FetchHelper
    optionsText: FetchHelper
    optionsArraybuffer: FetchHelper
    optionsStream: FetchHelper

    delete: FetchHelper
    deleteBlob: FetchHelper
    deleteDocument: FetchHelper
    deleteText: FetchHelper
    deleteArrayBuffer: FetchHelper
    deleteStream: FetchHelper

    // 提交application/x-www-form-urlencoded编码的数据包
    post: ModifyHelper
    // 提交application/json编码的数据包
    postJSON: ModifyHelper
    // 提交multipart/form-data编码的数据包
    postMultipart: ModifyHelper

    put: ModifyHelper
    putJSON: ModifyHelper
    putMultipart: ModifyHelper

    patch: ModifyHelper
    patchJSON: ModifyHelper
    patchMultipart: ModifyHelper

    // 浏览器下载文件
    download(blob: string | Blob, filename: string): void

    // 设置全局header
    setHeader(key: string, value: string): void
    // 删除全局header
    removeHeader(key: string | string[]): void  
}
```
