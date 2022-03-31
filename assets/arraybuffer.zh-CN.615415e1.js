import{_ as n}from"./elevation.c0e00a8b.js";import{e as c,o,c as t,a as s,i as l,j as r,U as p,m as e}from"./vendor.bb785d67.js";const d={components:{}},i={class:"varlet-site-doc"},h=p('<h1>Axle API</h1><h2>\u8BF7\u6C42\u6570\u636E</h2><div class="card"><h3>\u8BF7\u6C42 Arraybuffer</h3><p><code>Axle</code> \u63D0\u4F9B\u4E86\u4EE5\u4E0B\u51E0\u79CD\u8BF7\u6C42 <code>arraybuffer</code> \u7684\u65B9\u6CD5\u3002</p><ul><li><code>getArraybuffer</code></li><li><code>headArraybuffer</code></li><li><code>optionsArraybuffer</code></li><li><code>deleteArraybuffer</code></li></ul></div>',3),f={class:"card"},u=s("h3",null,"\u51FD\u6570\u7B7E\u540D",-1),_=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"type"),e(" FetchHelper = < T = "),s("span",{class:"hljs-built_in"},"any"),e(", R = AxiosResponse<T>>"),s("span",{class:"hljs-function"},[e("("),s("span",{class:"hljs-params"},[e(`
  url: `),s("span",{class:"hljs-built_in"},"string"),e(`,
  params?: `),s("span",{class:"hljs-built_in"},"any"),e(`,
  config?: AxiosRequestConfig
`)]),e(") =>")]),e(),s("span",{class:"hljs-built_in"},"Promise"),e(`<R>

`),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"interface"),e(` AxleHelpers {
  `),s("span",{class:"hljs-attr"},"getArraybuffer"),e(`: FetchHelper
  `),s("span",{class:"hljs-attr"},"headArraybuffer"),e(`: FetchHelper
  `),s("span",{class:"hljs-attr"},"optionsArraybuffer"),e(`: FetchHelper
  `),s("span",{class:"hljs-attr"},"deleteArraybuffer"),e(`: FetchHelper
}
`)])],-1),j={class:"card"},y=s("h3",null,"\u7528\u4F8B",-1),x=s("p",null,[s("code",null,"GET"),e(" , "),s("code",null,"HEAD"),e(" , "),s("code",null,"DELETE"),e(" , "),s("code",null,"OPTION"),e(" \u62E5\u6709\u76F8\u4F3C\u7684\u884C\u4E3A\uFF0C\u6211\u4EEC\u4EE5 "),s("code",null,"GET"),e(" \u4E3E\u4F8B\u3002")],-1),m=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/axle'"),e(`

`),s("span",{class:"hljs-keyword"},"const"),e(" axle = createAxle("),s("span",{class:"hljs-comment"},[e("/** "),s("span",{class:"hljs-doctag"},"@see "),e("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),e(`)
`),s("span",{class:"hljs-keyword"},"const"),e(` axleHelpers = axle.helpers

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title"},"getArraybuffer"),e("("),s("span",{class:"hljs-params"}),e(") ")]),e(`{
  `),s("span",{class:"hljs-keyword"},"return"),e(" axleHelpers.getArraybuffer("),s("span",{class:"hljs-string"},"'/arraybufferurl'"),e(`)
}
`)])],-1);function A(b,w,k,g,v,H){const a=c("var-site-code-example");return o(),t("div",i,[h,s("div",f,[u,l(a,null,{default:r(()=>[_]),_:1})]),s("div",j,[y,x,l(a,null,{default:r(()=>[m]),_:1})])])}var N=n(d,[["render",A]]);export{N as default};
