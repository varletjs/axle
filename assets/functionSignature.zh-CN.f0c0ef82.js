import{_ as r}from"./elevation.a0cf3236.js";import{e as o,o as l,c as s,i as p,j as a,a as e,m as t}from"./vendor.16f6342a.js";const c={components:{}},i={class:"varlet-site-doc"},d=e("h1",null,"\u51FD\u6570\u7B7E\u540D",-1),h=e("pre",{class:"hljs"},[e("code",null,[e("link",{class:"hljs-style",rel:"stylesheet",href:"./highlight.css"}),e("span",{class:"hljs-comment"},"// 'get' | 'head' | 'options' | 'delete'"),t(`
`),e("span",{class:"hljs-keyword"},"export"),t(),e("span",{class:"hljs-keyword"},"type"),t(` FetchHelper = <T = any, R = AxiosResponse<T>>(
  url: string,
  params?: any,
  config?: AxiosRequestConfig
) => Promise<R>

// 'post' | 'put' | 'patch'
export type ModifyHelper = <T = any, R = AxiosResponse<T>>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) => Promise<R>

export interface AxleHelpers {
    // \u83B7\u53D6json\u683C\u5F0F\u6570\u636E
    get: FetchHelper
    // \u83B7\u53D6blob\u683C\u5F0F\u6570\u636E,\u53EF\u7528\u4E8E\u6D4F\u89C8\u5668\u4E0B\u6784\u9020URL\u4E0B\u8F7D
    getBlob: FetchHelper
    // \u83B7\u53D6html\u6587\u6863, \u8FD4\u56DE\u4E00\u4E2Adom\u8282\u70B9, \u53EF\u76F4\u63A5\u5D4C\u5165\u6587\u6863
    getDocument: FetchHelper
    // \u83B7\u53D6\u6587\u672C
    getText: FetchHelper
    // \u83B7\u53D6Arraybuffer, \u53EF\u7528\u4E8E\u5206\u6BB5\u4E0B\u8F7D
    getArraybuffer: FetchHelper
    // \u83B7\u53D6\u53EF\u8BFB\u6D41, \u53EF\u7528\u4E8E\u6D4F\u89C8\u5668\u7F13\u5B58
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

    // \u63D0\u4EA4application/x-www-form-urlencoded\u7F16\u7801\u7684\u6570\u636E\u5305
    post: ModifyHelper
    // \u63D0\u4EA4application/json\u7F16\u7801\u7684\u6570\u636E\u5305
    postJSON: ModifyHelper
    // \u63D0\u4EA4multipart/form-data\u7F16\u7801\u7684\u6570\u636E\u5305
    postMultipart: ModifyHelper

    put: ModifyHelper
    putJSON: ModifyHelper
    putMultipart: ModifyHelper

    patch: ModifyHelper
    patchJSON: ModifyHelper
    patchMultipart: ModifyHelper

    // \u6D4F\u89C8\u5668\u4E0B\u8F7D\u6587\u4EF6
    download(blob: string | Blob, filename: string): void

    // \u8BBE\u7F6E\u5168\u5C40header
    setHeader(key: string, value: string): void
    // \u5220\u9664\u5168\u5C40header
    removeHeader(key: string | string[]): void  
}
`)])],-1);function f(H,u,m,y,F,g){const n=o("var-site-code-example");return l(),s("div",i,[d,p(n,null,{default:a(()=>[h]),_:1})])}var b=r(c,[["render",f]]);export{b as default};
