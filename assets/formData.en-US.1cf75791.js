import{_ as n}from"./elevation.a8512ead.js";import{e as o,o as c,c as r,a as s,i as l,j as t,U as p,m as a}from"./vendor.bb785d67.js";const i={components:{}},d={class:"varlet-site-doc"},h=p('<h1>Axle API</h1><h2>Modify</h2><div class="card"><h3>FormData</h3><p><code>Axle</code> provides the following methods to send <code>multipart/form-data</code> format data.</p><ul><li><code>postMultipart</code></li><li><code>putMultipart</code></li><li><code>patchMultipart</code></li></ul></div>',3),u={class:"card"},_=s("h3",null,"Function Signature",-1),j=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"type"),a(" ModifyHelper = < T = "),s("span",{class:"hljs-built_in"},"any"),a(", R = AxiosResponse<T>>"),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},[a(`
  url: `),s("span",{class:"hljs-built_in"},"string"),a(`,
  data?: `),s("span",{class:"hljs-built_in"},"any"),a(`,
  config?: AxiosRequestConfig
`)]),a(") =>")]),a(),s("span",{class:"hljs-built_in"},"Promise"),a(`<R>

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"interface"),a(` AxleHelpers {
  `),s("span",{class:"hljs-attr"},"postMultipart"),a(`: ModifyHelper
  `),s("span",{class:"hljs-attr"},"putMultipart"),a(`: ModifyHelper
  `),s("span",{class:"hljs-attr"},"patchMultipart"),a(`: ModifyHelper
}
`)])],-1),m={class:"card"},f=s("h3",null,"Example",-1),x=s("p",null,[s("code",null,"POST"),a(" , "),s("code",null,"PUT"),a(" , "),s("code",null,"PATCH"),a(" have similar behaviors. Let\u2019s take "),s("code",null,"POST"),a(" as an example.")],-1),y=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/axle'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" axle = createAxle("),s("span",{class:"hljs-comment"},[a("/** "),s("span",{class:"hljs-doctag"},"@see "),a("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),a(`)
`),s("span",{class:"hljs-keyword"},"const"),a(` axleHelpers = axle.helpers

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"postMultipart"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  `),s("span",{class:"hljs-keyword"},"return"),a(" axleHelpers.postMultipart("),s("span",{class:"hljs-string"},"'/user'"),a(", { "),s("span",{class:"hljs-attr"},"name"),a(": "),s("span",{class:"hljs-string"},"'axle'"),a(", "),s("span",{class:"hljs-attr"},"file"),a(": "),s("span",{class:"hljs-keyword"},"new"),a(` File() })
}
`)])],-1);function w(k,v,M,g,A,H){const e=o("var-site-code-example");return c(),r("div",d,[h,s("div",u,[_,l(e,null,{default:t(()=>[j]),_:1})]),s("div",m,[f,x,l(e,null,{default:t(()=>[y]),_:1})])])}var b=n(i,[["render",w]]);export{b as default};
