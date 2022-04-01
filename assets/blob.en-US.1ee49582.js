import{_ as n}from"./elevation.a8512ead.js";import{e as c,o as t,c as r,a as s,i as a,j as o,U as p,m as e}from"./vendor.bb785d67.js";const d={components:{}},i={class:"varlet-site-doc"},h=p('<h1>Axle API</h1><h2>Fetch</h2><div class="card"><h3>Blob</h3><p><code>Axle</code> provides the following methods to fetch <code>blob</code>.</p><ul><li><code>getBlob</code></li><li><code>headBlob</code></li><li><code>optionsBlob</code></li><li><code>deleteBlob</code></li></ul></div>',3),_={class:"card"},u=s("h3",null,"Function Signature",-1),j=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"type"),e(" FetchHelper = < T = "),s("span",{class:"hljs-built_in"},"any"),e(", R = AxiosResponse<T>>"),s("span",{class:"hljs-function"},[e("("),s("span",{class:"hljs-params"},[e(`
  url: `),s("span",{class:"hljs-built_in"},"string"),e(`,
  params?: `),s("span",{class:"hljs-built_in"},"any"),e(`,
  config?: AxiosRequestConfig
`)]),e(") =>")]),e(),s("span",{class:"hljs-built_in"},"Promise"),e(`<R>

`),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"interface"),e(` AxleHelpers {
  `),s("span",{class:"hljs-attr"},"getBlob"),e(`: FetchHelper
  `),s("span",{class:"hljs-attr"},"headBlob"),e(`: FetchHelper
  `),s("span",{class:"hljs-attr"},"optionsBlob"),e(`: FetchHelper
  `),s("span",{class:"hljs-attr"},"deleteBlob"),e(`: FetchHelper
}
`)])],-1),m={class:"card"},x=s("h3",null,"Example",-1),b=s("p",null,[s("code",null,"GET"),e(" , "),s("code",null,"HEAD"),e(" , "),s("code",null,"DELETE"),e(" , "),s("code",null,"OPTION"),e(" have similar behaviors. Let\u2019s take "),s("code",null,"GET"),e(" as an example.")],-1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/axle'"),e(`

`),s("span",{class:"hljs-keyword"},"const"),e(" axle = createAxle("),s("span",{class:"hljs-comment"},[e("/** "),s("span",{class:"hljs-doctag"},"@see "),e("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),e(`)
`),s("span",{class:"hljs-keyword"},"const"),e(` axleHelpers = axle.helpers

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title"},"getBlob"),e("("),s("span",{class:"hljs-params"}),e(") ")]),e(`{
  `),s("span",{class:"hljs-keyword"},"return"),e(" axleHelpers.getBlob("),s("span",{class:"hljs-string"},"'/bloburl'"),e(`)
}
`)])],-1);function w(v,B,g,k,y,A){const l=c("var-site-code-example");return t(),r("div",i,[h,s("div",_,[u,a(l,null,{default:o(()=>[j]),_:1})]),s("div",m,[x,b,a(l,null,{default:o(()=>[f]),_:1})])])}var F=n(d,[["render",w]]);export{F as default};
