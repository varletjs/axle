import{_ as o}from"./elevation.22442860.js";import{e as r,o as a,c as l,i as s,j as c,a as e,m as t}from"./vendor.16f6342a.js";const p={components:{}},d={class:"varlet-site-doc"},i=e("h1",null,"Function Signature",-1),h=e("pre",{class:"hljs"},[e("code",null,[e("link",{class:"hljs-style",rel:"stylesheet",href:"./highlight.css"}),e("span",{class:"hljs-comment"},"// 'get' | 'head' | 'options' | 'delete'"),t(`
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
  // get data in json format
  get: FetchHelper
  // get data in blob format, which can be used to construct URL download under browser
  getBlob: FetchHelper
  // get the html document, return a dom node, can directly embed the document
  getDocument: FetchHelper
  // get text
  getText: FetchHelper
  // get Arraybuffer, which can be used for segmented download
  getArraybuffer: FetchHelper
  // get a readable stream, which can be used for browser caching
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

  // submit application/x-www-form-urlencoded encoded data
  post: ModifyHelper
  // submit application/json encoded data
  postJSON: ModifyHelper
  // submit multipart/form-data encoded data
  postMultipart: ModifyHelper

  put: ModifyHelper
  putJSON: ModifyHelper
  putMultipart: ModifyHelper

  patch: ModifyHelper
  patchJSON: ModifyHelper
  patchMultipart: ModifyHelper

  // browser download file
  download(blob: string | Blob, filename: string): void

  // set global header
  setHeader(key: string, value: string): void
  // remove global header
  removeHeader(key: string | string[]): void
}
`)])],-1);function u(f,m,H,g,y,b){const n=r("var-site-code-example");return a(),l("div",d,[i,s(n,null,{default:c(()=>[h]),_:1})])}var x=o(p,[["render",u]]);export{x as default};
