import{_ as n}from"./elevation.c0e00a8b.js";import{e as o,o as c,c as r,a as s,i as e,j as t,U as p,m as a}from"./vendor.bb785d67.js";const i={components:{}},d={class:"varlet-site-doc"},h=p('<h1>Axle API</h1><h2>\u63D0\u4EA4\u6570\u636E</h2><div class="card"><h3>\u63D0\u4EA4 FormData</h3><p><code>Axle</code> \u63D0\u4F9B\u4E86\u4EE5\u4E0B\u65B9\u6CD5\u7528\u4E8E\u4EE5 <code>multipart/form-data</code> \u683C\u5F0F\u53D1\u9001\u6570\u636E\u3002</p><ul><li><code>postMultipart</code></li><li><code>putMultipart</code></li><li><code>patchMultipart</code></li></ul></div>',3),u={class:"card"},_=s("h3",null,"\u51FD\u6570\u7B7E\u540D",-1),j=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"type"),a(" ModifyHelper = < T = "),s("span",{class:"hljs-built_in"},"any"),a(", R = AxiosResponse<T>>"),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},[a(`
  url: `),s("span",{class:"hljs-built_in"},"string"),a(`,
  data?: `),s("span",{class:"hljs-built_in"},"any"),a(`,
  config?: AxiosRequestConfig
`)]),a(") =>")]),a(),s("span",{class:"hljs-built_in"},"Promise"),a(`<R>

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"interface"),a(` AxleHelpers {
  `),s("span",{class:"hljs-attr"},"postMultipart"),a(`: ModifyHelper
  `),s("span",{class:"hljs-attr"},"putMultipart"),a(`: ModifyHelper
  `),s("span",{class:"hljs-attr"},"patchMultipart"),a(`: ModifyHelper
}
`)])],-1),m={class:"card"},f=s("h3",null,"\u7528\u4F8B",-1),x=s("p",null,[s("code",null,"POST"),a(" , "),s("code",null,"PUT"),a(" , "),s("code",null,"PATCH"),a(" \u62E5\u6709\u76F8\u4F3C\u7684\u884C\u4E3A\uFF0C\u6211\u4EEC\u4EE5 "),s("code",null,"POST"),a(" \u4E3E\u4F8B\u3002")],-1),y=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/axle'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" axle = createAxle("),s("span",{class:"hljs-comment"},[a("/** "),s("span",{class:"hljs-doctag"},"@see "),a("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),a(`)
`),s("span",{class:"hljs-keyword"},"const"),a(` axleHelpers = axle.helpers

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"postMultipart"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  `),s("span",{class:"hljs-keyword"},"return"),a(" axleHelpers.postMultipart("),s("span",{class:"hljs-string"},"'/user'"),a(", { "),s("span",{class:"hljs-attr"},"name"),a(": "),s("span",{class:"hljs-string"},"'axle'"),a(", "),s("span",{class:"hljs-attr"},"file"),a(": "),s("span",{class:"hljs-keyword"},"new"),a(` File() })
}
`)])],-1);function w(k,M,v,A,g,H){const l=o("var-site-code-example");return c(),r("div",d,[h,s("div",u,[_,e(l,null,{default:t(()=>[j]),_:1})]),s("div",m,[f,x,e(l,null,{default:t(()=>[y]),_:1})])])}var C=n(i,[["render",w]]);export{C as default};
