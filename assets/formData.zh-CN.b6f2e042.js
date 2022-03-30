import{_ as n}from"./elevation.29571e53.js";import{e as c,o,c as r,a as s,i as a,j as t,U as p,m as l}from"./vendor.bb785d67.js";const i={components:{}},h={class:"varlet-site-doc"},d=p('<h1>Axle API</h1><h2>\u63D0\u4EA4\u6570\u636E</h2><div class="card"><h3>\u63D0\u4EA4 FormData</h3><p><code>Axle</code> \u63D0\u4F9B\u4E86\u4EE5\u4E0B\u65B9\u6CD5\u7528\u4E8E\u4EE5 <code>multipart/form-data</code> \u683C\u5F0F\u53D1\u9001\u6570\u636E\u3002</p><ul><li><code>postMultipart</code></li><li><code>putMultipart</code></li><li><code>patchMultipart</code></li></ul></div>',3),u={class:"card"},_=s("h3",null,"\u51FD\u6570\u7B7E\u540D",-1),j=s("pre",{class:"hljs"},[s("code",null,[s("link",{class:"hljs-style",rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"export"),l(),s("span",{class:"hljs-keyword"},"type"),l(" ModifyHelper = < T = "),s("span",{class:"hljs-built_in"},"any"),l(", R = AxiosResponse<T>>"),s("span",{class:"hljs-function"},[l("("),s("span",{class:"hljs-params"},[l(`
  url: `),s("span",{class:"hljs-built_in"},"string"),l(`,
  data?: `),s("span",{class:"hljs-built_in"},"any"),l(`,
  config?: AxiosRequestConfig
`)]),l(") =>")]),l(),s("span",{class:"hljs-built_in"},"Promise"),l(`<R>

`),s("span",{class:"hljs-keyword"},"export"),l(),s("span",{class:"hljs-keyword"},"interface"),l(` AxleHelpers {
  `),s("span",{class:"hljs-attr"},"postMultipart"),l(`: ModifyHelper
  `),s("span",{class:"hljs-attr"},"putMultipart"),l(`: ModifyHelper
  `),s("span",{class:"hljs-attr"},"patchMultipart"),l(`: ModifyHelper
}
`)])],-1),f={class:"card"},m=s("h3",null,"\u7528\u4F8B",-1),x=s("p",null,[s("code",null,"POST"),l(" , "),s("code",null,"PUT"),l(" , "),s("code",null,"PATCH"),l(" \u62E5\u6709\u76F8\u4F3C\u7684\u884C\u4E3A\uFF0C\u6211\u4EEC\u4EE5 "),s("code",null,"POST"),l(" \u4E3E\u4F8B\u3002")],-1),y=s("pre",{class:"hljs"},[s("code",null,[s("link",{class:"hljs-style",rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),l(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'@varlet/axle'"),l(`

`),s("span",{class:"hljs-keyword"},"const"),l(" axle = createAxle("),s("span",{class:"hljs-comment"},[l("/** "),s("span",{class:"hljs-doctag"},"@see "),l("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),l(`)
`),s("span",{class:"hljs-keyword"},"const"),l(` axleHelpers = axle.helpers

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title"},"postMultipart"),l("("),s("span",{class:"hljs-params"}),l(") ")]),l(`{
  `),s("span",{class:"hljs-keyword"},"return"),l(" axleHelpers.postMultipart("),s("span",{class:"hljs-string"},"'/user'"),l(", { "),s("span",{class:"hljs-attr"},"name"),l(": "),s("span",{class:"hljs-string"},"'axle'"),l(", "),s("span",{class:"hljs-attr"},"file"),l(": "),s("span",{class:"hljs-keyword"},"new"),l(` File() })
}
`)])],-1);function w(k,g,M,v,A,H){const e=c("var-site-code-example");return o(),r("div",h,[d,s("div",u,[_,a(e,null,{default:t(()=>[j]),_:1})]),s("div",f,[m,x,a(e,null,{default:t(()=>[y]),_:1})])])}var C=n(i,[["render",w]]);export{C as default};
