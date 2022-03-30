import{_ as n}from"./elevation.29571e53.js";import{e as o,o as c,c as r,a as s,i as a,j as t,U as i,m as e}from"./vendor.bb785d67.js";const p={components:{}},h={class:"varlet-site-doc"},d=i('<h1>Axle API</h1><h2>Modify</h2><div class="card"><h3>FormData</h3><p><code>Axle</code> provides the following methods to send <code>multipart/form-data</code> format data.</p><ul><li><code>postMultipart</code></li><li><code>putMultipart</code></li><li><code>patchMultipart</code></li></ul></div>',3),u={class:"card"},_=s("h3",null,"Function Signature",-1),j=s("pre",{class:"hljs"},[s("code",null,[s("link",{class:"hljs-style",rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"type"),e(" ModifyHelper = < T = "),s("span",{class:"hljs-built_in"},"any"),e(", R = AxiosResponse<T>>"),s("span",{class:"hljs-function"},[e("("),s("span",{class:"hljs-params"},[e(`
  url: `),s("span",{class:"hljs-built_in"},"string"),e(`,
  data?: `),s("span",{class:"hljs-built_in"},"any"),e(`,
  config?: AxiosRequestConfig
`)]),e(") =>")]),e(),s("span",{class:"hljs-built_in"},"Promise"),e(`<R>

`),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"interface"),e(` AxleHelpers {
  `),s("span",{class:"hljs-attr"},"postMultipart"),e(`: ModifyHelper
  `),s("span",{class:"hljs-attr"},"putMultipart"),e(`: ModifyHelper
  `),s("span",{class:"hljs-attr"},"patchMultipart"),e(`: ModifyHelper
}
`)])],-1),m={class:"card"},f=s("h3",null,"Example",-1),x=s("p",null,[s("code",null,"POST"),e(" , "),s("code",null,"PUT"),e(" , "),s("code",null,"PATCH"),e(" have similar behaviors. Let\u2019s take "),s("code",null,"POST"),e(" as an example.")],-1),y=s("pre",{class:"hljs"},[s("code",null,[s("link",{class:"hljs-style",rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),e(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/axle'"),e(`

`),s("span",{class:"hljs-keyword"},"const"),e(" axle = createAxle("),s("span",{class:"hljs-comment"},[e("/** "),s("span",{class:"hljs-doctag"},"@see "),e("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),e(`)
`),s("span",{class:"hljs-keyword"},"const"),e(` axleHelpers = axle.helpers

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title"},"postMultipart"),e("("),s("span",{class:"hljs-params"}),e(") ")]),e(`{
  `),s("span",{class:"hljs-keyword"},"return"),e(" axleHelpers.postMultipart("),s("span",{class:"hljs-string"},"'/user'"),e(", { "),s("span",{class:"hljs-attr"},"name"),e(": "),s("span",{class:"hljs-string"},"'axle'"),e(", "),s("span",{class:"hljs-attr"},"file"),e(": "),s("span",{class:"hljs-keyword"},"new"),e(` File() })
}
`)])],-1);function w(k,g,v,M,A,H){const l=o("var-site-code-example");return c(),r("div",h,[d,s("div",u,[_,a(l,null,{default:t(()=>[j]),_:1})]),s("div",m,[f,x,a(l,null,{default:t(()=>[y]),_:1})])])}var b=n(p,[["render",w]]);export{b as default};
