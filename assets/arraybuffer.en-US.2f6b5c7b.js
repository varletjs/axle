import{_ as r}from"./elevation.c0e00a8b.js";import{e as c,o,c as t,a as s,i as l,j as n,U as p,m as e}from"./vendor.bb785d67.js";const d={components:{}},i={class:"varlet-site-doc"},h=p('<h1>Axle API</h1><h2>Fetch</h2><div class="card"><h3>Arraybuffer</h3><p><code>Axle</code> provides the following methods to fetch <code>arraybuffer</code>.</p><ul><li><code>getArraybuffer</code></li><li><code>headArraybuffer</code></li><li><code>optionsArraybuffer</code></li><li><code>deleteArraybuffer</code></li></ul></div>',3),f={class:"card"},u=s("h3",null,"Function Signature",-1),_=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"type"),e(" FetchHelper = < T = "),s("span",{class:"hljs-built_in"},"any"),e(", R = AxiosResponse<T>>"),s("span",{class:"hljs-function"},[e("("),s("span",{class:"hljs-params"},[e(`
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
`)])],-1),j={class:"card"},y=s("h3",null,"Example",-1),m=s("p",null,[s("code",null,"GET"),e(" , "),s("code",null,"HEAD"),e(" , "),s("code",null,"DELETE"),e(" , "),s("code",null,"OPTION"),e(" have similar behaviors. Let\u2019s take "),s("code",null,"GET"),e(" as an example.")],-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/axle'"),e(`

`),s("span",{class:"hljs-keyword"},"const"),e(" axle = createAxle("),s("span",{class:"hljs-comment"},[e("/** "),s("span",{class:"hljs-doctag"},"@see "),e("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),e(`)
`),s("span",{class:"hljs-keyword"},"const"),e(` axleHelpers = axle.helpers

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title"},"getArraybuffer"),e("("),s("span",{class:"hljs-params"}),e(") ")]),e(`{
  `),s("span",{class:"hljs-keyword"},"return"),e(" axleHelpers.getArraybuffer("),s("span",{class:"hljs-string"},"'/arraybufferurl'"),e(`)
}
`)])],-1);function A(b,w,v,g,k,H){const a=c("var-site-code-example");return o(),t("div",i,[h,s("div",f,[u,l(a,null,{default:n(()=>[_]),_:1})]),s("div",j,[y,m,l(a,null,{default:n(()=>[x]),_:1})])])}var T=r(d,[["render",A]]);export{T as default};
