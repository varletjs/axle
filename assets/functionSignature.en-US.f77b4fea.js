import{_ as t}from"./elevation.22442860.js";import{e as n,o as l,c,i as r,j as p,a as e,m as s}from"./vendor.16f6342a.js";const o={components:{}},h={class:"varlet-site-doc"},i=e("h1",null,"Function Signature",-1),d=e("pre",{class:"hljs"},[e("code",null,[e("link",{class:"hljs-style",rel:"stylesheet",href:"./highlight.css"}),e("span",{class:"hljs-comment"},"// 'get' | 'head' | 'options' | 'delete'"),s(`
`),e("span",{class:"hljs-keyword"},"export"),s(),e("span",{class:"hljs-keyword"},"type"),s(" FetchHelper = < T = "),e("span",{class:"hljs-built_in"},"any"),s(", R = AxiosResponse<T>>"),e("span",{class:"hljs-function"},[s("("),e("span",{class:"hljs-params"},[s(`
  url: `),e("span",{class:"hljs-built_in"},"string"),s(`,
  params?: `),e("span",{class:"hljs-built_in"},"any"),s(`,
  config?: AxiosRequestConfig
`)]),s(") =>")]),s(),e("span",{class:"hljs-built_in"},"Promise"),s(`<R>

`),e("span",{class:"hljs-comment"},"// 'post' | 'put' | 'patch'"),s(`
`),e("span",{class:"hljs-keyword"},"export"),s(),e("span",{class:"hljs-keyword"},"type"),s(" ModifyHelper = < T = "),e("span",{class:"hljs-built_in"},"any"),s(", R = AxiosResponse<T>>"),e("span",{class:"hljs-function"},[s("("),e("span",{class:"hljs-params"},[s(`
  url: `),e("span",{class:"hljs-built_in"},"string"),s(`,
  data?: `),e("span",{class:"hljs-built_in"},"any"),s(`,
  config?: AxiosRequestConfig
`)]),s(") =>")]),s(),e("span",{class:"hljs-built_in"},"Promise"),s(`<R>

`),e("span",{class:"hljs-keyword"},"export"),s(),e("span",{class:"hljs-keyword"},"interface"),s(` AxleHelpers {
  `),e("span",{class:"hljs-comment"},"// get data in json format"),s(`
  `),e("span",{class:"hljs-attr"},"get"),s(`: FetchHelper
  `),e("span",{class:"hljs-comment"},"// get data in blob format, which can be used to construct URL download under browser"),s(`
  `),e("span",{class:"hljs-attr"},"getBlob"),s(`: FetchHelper
  `),e("span",{class:"hljs-comment"},"// get the html document, return a dom node, can directly embed the document"),s(`
  `),e("span",{class:"hljs-attr"},"getDocument"),s(`: FetchHelper
  `),e("span",{class:"hljs-comment"},"// get text"),s(`
  `),e("span",{class:"hljs-attr"},"getText"),s(`: FetchHelper
  `),e("span",{class:"hljs-comment"},"// get Arraybuffer, which can be used for segmented download"),s(`
  `),e("span",{class:"hljs-attr"},"getArraybuffer"),s(`: FetchHelper
  `),e("span",{class:"hljs-comment"},"// get a readable stream, which can be used for browser caching"),s(`
  `),e("span",{class:"hljs-attr"},"getStream"),s(`: FetchHelper

  `),e("span",{class:"hljs-attr"},"head"),s(`: FetchHelper
  `),e("span",{class:"hljs-attr"},"headBlob"),s(`: FetchHelper
  `),e("span",{class:"hljs-attr"},"headDocument"),s(`: FetchHelper
  `),e("span",{class:"hljs-attr"},"headText"),s(`: FetchHelper
  `),e("span",{class:"hljs-attr"},"headArraybuffer"),s(`: FetchHelper
  `),e("span",{class:"hljs-attr"},"headStream"),s(`: FetchHelper

  `),e("span",{class:"hljs-attr"},"options"),s(`: FetchHelper
  `),e("span",{class:"hljs-attr"},"optionsBlob"),s(`: FetchHelper
  `),e("span",{class:"hljs-attr"},"optionsDocument"),s(`: FetchHelper
  `),e("span",{class:"hljs-attr"},"optionsText"),s(`: FetchHelper
  `),e("span",{class:"hljs-attr"},"optionsArraybuffer"),s(`: FetchHelper
  `),e("span",{class:"hljs-attr"},"optionsStream"),s(`: FetchHelper

  `),e("span",{class:"hljs-attr"},"delete"),s(`: FetchHelper
  `),e("span",{class:"hljs-attr"},"deleteBlob"),s(`: FetchHelper
  `),e("span",{class:"hljs-attr"},"deleteDocument"),s(`: FetchHelper
  `),e("span",{class:"hljs-attr"},"deleteText"),s(`: FetchHelper
  `),e("span",{class:"hljs-attr"},"deleteArrayBuffer"),s(`: FetchHelper
  `),e("span",{class:"hljs-attr"},"deleteStream"),s(`: FetchHelper

  `),e("span",{class:"hljs-comment"},"// submit application/x-www-form-urlencoded encoded data"),s(`
  `),e("span",{class:"hljs-attr"},"post"),s(`: ModifyHelper
  `),e("span",{class:"hljs-comment"},"// submit application/json encoded data"),s(`
  `),e("span",{class:"hljs-attr"},"postJSON"),s(`: ModifyHelper
  `),e("span",{class:"hljs-comment"},"// submit multipart/form-data encoded data"),s(`
  `),e("span",{class:"hljs-attr"},"postMultipart"),s(`: ModifyHelper

  `),e("span",{class:"hljs-attr"},"put"),s(`: ModifyHelper
  `),e("span",{class:"hljs-attr"},"putJSON"),s(`: ModifyHelper
  `),e("span",{class:"hljs-attr"},"putMultipart"),s(`: ModifyHelper

  `),e("span",{class:"hljs-attr"},"patch"),s(`: ModifyHelper
  `),e("span",{class:"hljs-attr"},"patchJSON"),s(`: ModifyHelper
  `),e("span",{class:"hljs-attr"},"patchMultipart"),s(`: ModifyHelper

  `),e("span",{class:"hljs-comment"},"// browser download file"),s(`
  download(blob: `),e("span",{class:"hljs-built_in"},"string"),s(" | Blob, "),e("span",{class:"hljs-attr"},"filename"),s(": "),e("span",{class:"hljs-built_in"},"string"),s("): "),e("span",{class:"hljs-built_in"},"void"),s(`

  `),e("span",{class:"hljs-comment"},"// set global header"),s(`
  setHeader(key: `),e("span",{class:"hljs-built_in"},"string"),s(", "),e("span",{class:"hljs-attr"},"value"),s(": "),e("span",{class:"hljs-built_in"},"string"),s("): "),e("span",{class:"hljs-built_in"},"void"),s(`
  `),e("span",{class:"hljs-comment"},"// remove global header"),s(`
  removeHeader(key: `),e("span",{class:"hljs-built_in"},"string"),s(" | "),e("span",{class:"hljs-built_in"},"string"),s("[]): "),e("span",{class:"hljs-built_in"},"void"),s(`
}
`)])],-1);function j(m,u,f,b,_,H){const a=n("var-site-code-example");return l(),c("div",h,[i,r(a,null,{default:p(()=>[d]),_:1})])}var F=t(o,[["render",j]]);export{F as default};
