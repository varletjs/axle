import{_ as a}from"./elevation.29571e53.js";import{e as t,o,c as r,a as s,i as n,j as c,U as h,m as e}from"./vendor.bb785d67.js";const d={components:{}},i={class:"varlet-site-doc"},p=h('<h1>Axle API</h1><h2>\u8BF7\u6C42\u6570\u636E</h2><div class="card"><h3>\u8BF7\u6C42 Document</h3><p><code>Axle</code> \u63D0\u4F9B\u4E86\u4EE5\u4E0B\u51E0\u79CD\u8BF7\u6C42 <code>document</code> \u7684\u65B9\u6CD5\u3002</p><ul><li><code>getDocument</code></li><li><code>headDocument</code></li><li><code>optionsDocument</code></li><li><code>deleteDocument</code></li></ul></div>',3),u={class:"card"},_=s("h3",null,"\u51FD\u6570\u7B7E\u540D",-1),m=s("pre",{class:"hljs"},[s("code",null,[s("link",{class:"hljs-style",rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"type"),e(" FetchHelper = < T = "),s("span",{class:"hljs-built_in"},"any"),e(", R = AxiosResponse<T>>"),s("span",{class:"hljs-function"},[e("("),s("span",{class:"hljs-params"},[e(`
  url: `),s("span",{class:"hljs-built_in"},"string"),e(`,
  params?: `),s("span",{class:"hljs-built_in"},"any"),e(`,
  config?: AxiosRequestConfig
`)]),e(") =>")]),e(),s("span",{class:"hljs-built_in"},"Promise"),e(`<R>

`),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"interface"),e(` AxleHelpers {
  `),s("span",{class:"hljs-attr"},"getDocument"),e(`: FetchHelper
  `),s("span",{class:"hljs-attr"},"headDocument"),e(`: FetchHelper
  `),s("span",{class:"hljs-attr"},"optionsDocument"),e(`: FetchHelper
  `),s("span",{class:"hljs-attr"},"deleteDocument"),e(`: FetchHelper
}
`)])],-1),j={class:"card"},x=s("h3",null,"\u7528\u4F8B",-1),f=s("p",null,[s("code",null,"GET"),e(" , "),s("code",null,"HEAD"),e(" , "),s("code",null,"DELETE"),e(" , "),s("code",null,"OPTION"),e(" \u62E5\u6709\u76F8\u4F3C\u7684\u884C\u4E3A\uFF0C\u6211\u4EEC\u4EE5 "),s("code",null,"GET"),e(" \u4E3E\u4F8B\u3002")],-1),y=s("pre",{class:"hljs"},[s("code",null,[s("link",{class:"hljs-style",rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),e(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/axle'"),e(`

`),s("span",{class:"hljs-keyword"},"const"),e(" axle = createAxle("),s("span",{class:"hljs-comment"},[e("/** "),s("span",{class:"hljs-doctag"},"@see "),e("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),e(`)
`),s("span",{class:"hljs-keyword"},"const"),e(` axleHelpers = axle.helpers

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title"},"getDocument"),e("("),s("span",{class:"hljs-params"}),e(") ")]),e(`{
  `),s("span",{class:"hljs-keyword"},"return"),e(" axleHelpers.getDocument("),s("span",{class:"hljs-string"},"'/index.html'"),e(`)
}
`)])],-1);function g(k,w,D,v,A,H){const l=t("var-site-code-example");return o(),r("div",i,[p,s("div",u,[_,n(l,null,{default:c(()=>[m]),_:1})]),s("div",j,[x,f,n(l,null,{default:c(()=>[y]),_:1})])])}var N=a(d,[["render",g]]);export{N as default};
