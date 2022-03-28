import{_ as l}from"./elevation.22442860.js";import{e as n,o as t,c as p,i as c,j as r,a,m as s}from"./vendor.16f6342a.js";const h={components:{}},o={class:"varlet-site-doc"},i=a("h1",null,"\u51FD\u6570\u7B7E\u540D",-1),j=a("pre",{class:"hljs"},[a("code",null,[a("link",{class:"hljs-style",rel:"stylesheet",href:"./highlight.css"}),a("span",{class:"hljs-comment"},"// 'get' | 'head' | 'options' | 'delete'"),s(`
`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"type"),s(" FetchHelper = < T = "),a("span",{class:"hljs-built_in"},"any"),s(", R = AxiosResponse<T>>"),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},[s(`
  url: `),a("span",{class:"hljs-built_in"},"string"),s(`,
  params?: `),a("span",{class:"hljs-built_in"},"any"),s(`,
  config?: AxiosRequestConfig
`)]),s(") =>")]),s(),a("span",{class:"hljs-built_in"},"Promise"),s(`<R>

`),a("span",{class:"hljs-comment"},"// 'post' | 'put' | 'patch'"),s(`
`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"type"),s(" ModifyHelper = < T = "),a("span",{class:"hljs-built_in"},"any"),s(", R = AxiosResponse<T>>"),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},[s(`
  url: `),a("span",{class:"hljs-built_in"},"string"),s(`,
  data?: `),a("span",{class:"hljs-built_in"},"any"),s(`,
  config?: AxiosRequestConfig
`)]),s(") =>")]),s(),a("span",{class:"hljs-built_in"},"Promise"),s(`<R>

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"interface"),s(` AxleHelpers {
    `),a("span",{class:"hljs-comment"},"// \u83B7\u53D6json\u683C\u5F0F\u6570\u636E"),s(`
    `),a("span",{class:"hljs-attr"},"get"),s(`: FetchHelper
    `),a("span",{class:"hljs-comment"},"// \u83B7\u53D6blob\u683C\u5F0F\u6570\u636E,\u53EF\u7528\u4E8E\u6D4F\u89C8\u5668\u4E0B\u6784\u9020URL\u4E0B\u8F7D"),s(`
    `),a("span",{class:"hljs-attr"},"getBlob"),s(`: FetchHelper
    `),a("span",{class:"hljs-comment"},"// \u83B7\u53D6html\u6587\u6863, \u8FD4\u56DE\u4E00\u4E2Adom\u8282\u70B9, \u53EF\u76F4\u63A5\u5D4C\u5165\u6587\u6863"),s(`
    `),a("span",{class:"hljs-attr"},"getDocument"),s(`: FetchHelper
    `),a("span",{class:"hljs-comment"},"// \u83B7\u53D6\u6587\u672C"),s(`
    `),a("span",{class:"hljs-attr"},"getText"),s(`: FetchHelper
    `),a("span",{class:"hljs-comment"},"// \u83B7\u53D6Arraybuffer, \u53EF\u7528\u4E8E\u5206\u6BB5\u4E0B\u8F7D"),s(`
    `),a("span",{class:"hljs-attr"},"getArraybuffer"),s(`: FetchHelper
    `),a("span",{class:"hljs-comment"},"// \u83B7\u53D6\u53EF\u8BFB\u6D41, \u53EF\u7528\u4E8E\u6D4F\u89C8\u5668\u7F13\u5B58"),s(`
    `),a("span",{class:"hljs-attr"},"getStream"),s(`: FetchHelper

    `),a("span",{class:"hljs-attr"},"head"),s(`: FetchHelper
    `),a("span",{class:"hljs-attr"},"headBlob"),s(`: FetchHelper
    `),a("span",{class:"hljs-attr"},"headDocument"),s(`: FetchHelper
    `),a("span",{class:"hljs-attr"},"headText"),s(`: FetchHelper
    `),a("span",{class:"hljs-attr"},"headArraybuffer"),s(`: FetchHelper
    `),a("span",{class:"hljs-attr"},"headStream"),s(`: FetchHelper

    `),a("span",{class:"hljs-attr"},"options"),s(`: FetchHelper
    `),a("span",{class:"hljs-attr"},"optionsBlob"),s(`: FetchHelper
    `),a("span",{class:"hljs-attr"},"optionsDocument"),s(`: FetchHelper
    `),a("span",{class:"hljs-attr"},"optionsText"),s(`: FetchHelper
    `),a("span",{class:"hljs-attr"},"optionsArraybuffer"),s(`: FetchHelper
    `),a("span",{class:"hljs-attr"},"optionsStream"),s(`: FetchHelper

    `),a("span",{class:"hljs-attr"},"delete"),s(`: FetchHelper
    `),a("span",{class:"hljs-attr"},"deleteBlob"),s(`: FetchHelper
    `),a("span",{class:"hljs-attr"},"deleteDocument"),s(`: FetchHelper
    `),a("span",{class:"hljs-attr"},"deleteText"),s(`: FetchHelper
    `),a("span",{class:"hljs-attr"},"deleteArrayBuffer"),s(`: FetchHelper
    `),a("span",{class:"hljs-attr"},"deleteStream"),s(`: FetchHelper

    `),a("span",{class:"hljs-comment"},"// \u63D0\u4EA4application/x-www-form-urlencoded\u7F16\u7801\u7684\u6570\u636E\u5305"),s(`
    `),a("span",{class:"hljs-attr"},"post"),s(`: ModifyHelper
    `),a("span",{class:"hljs-comment"},"// \u63D0\u4EA4application/json\u7F16\u7801\u7684\u6570\u636E\u5305"),s(`
    `),a("span",{class:"hljs-attr"},"postJSON"),s(`: ModifyHelper
    `),a("span",{class:"hljs-comment"},"// \u63D0\u4EA4multipart/form-data\u7F16\u7801\u7684\u6570\u636E\u5305"),s(`
    `),a("span",{class:"hljs-attr"},"postMultipart"),s(`: ModifyHelper

    `),a("span",{class:"hljs-attr"},"put"),s(`: ModifyHelper
    `),a("span",{class:"hljs-attr"},"putJSON"),s(`: ModifyHelper
    `),a("span",{class:"hljs-attr"},"putMultipart"),s(`: ModifyHelper

    `),a("span",{class:"hljs-attr"},"patch"),s(`: ModifyHelper
    `),a("span",{class:"hljs-attr"},"patchJSON"),s(`: ModifyHelper
    `),a("span",{class:"hljs-attr"},"patchMultipart"),s(`: ModifyHelper

    `),a("span",{class:"hljs-comment"},"// \u6D4F\u89C8\u5668\u4E0B\u8F7D\u6587\u4EF6"),s(`
    download(blob: `),a("span",{class:"hljs-built_in"},"string"),s(" | Blob, "),a("span",{class:"hljs-attr"},"filename"),s(": "),a("span",{class:"hljs-built_in"},"string"),s("): "),a("span",{class:"hljs-built_in"},"void"),s(`

    `),a("span",{class:"hljs-comment"},"// \u8BBE\u7F6E\u5168\u5C40header"),s(`
    setHeader(key: `),a("span",{class:"hljs-built_in"},"string"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-built_in"},"string"),s("): "),a("span",{class:"hljs-built_in"},"void"),s(`
    `),a("span",{class:"hljs-comment"},"// \u5220\u9664\u5168\u5C40header"),s(`
    removeHeader(key: `),a("span",{class:"hljs-built_in"},"string"),s(" | "),a("span",{class:"hljs-built_in"},"string"),s("[]): "),a("span",{class:"hljs-built_in"},"void"),s(`  
}
`)])],-1);function d(m,u,f,_,H,y){const e=n("var-site-code-example");return t(),p("div",o,[i,c(e,null,{default:r(()=>[j]),_:1})])}var g=l(h,[["render",d]]);export{g as default};
