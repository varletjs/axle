import{_ as o}from"./elevation.c0e00a8b.js";import{e as t,o as c,c as r,a as s,i as l,j as n,U as p,m as e}from"./vendor.bb785d67.js";const d={components:{}},i={class:"varlet-site-doc"},h=p('<h1>Axle API</h1><h2>Modify</h2><div class="card"><h3>Urlencoded</h3><p><code>Axle</code> provides the following methods to send <code>application/x-www-form-urlencoded</code> format data.</p><ul><li><code>post</code></li><li><code>put</code></li><li><code>patch</code></li></ul></div>',3),_={class:"card"},u=s("h3",null,"Function Signature",-1),j=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"type"),e(" ModifyHelper = < T = "),s("span",{class:"hljs-built_in"},"any"),e(", R = AxiosResponse<T>>"),s("span",{class:"hljs-function"},[e("("),s("span",{class:"hljs-params"},[e(`
  url: `),s("span",{class:"hljs-built_in"},"string"),e(`,
  data?: `),s("span",{class:"hljs-built_in"},"any"),e(`,
  config?: AxiosRequestConfig
`)]),e(") =>")]),e(),s("span",{class:"hljs-built_in"},"Promise"),e(`<R>

`),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"interface"),e(` AxleHelpers {
  `),s("span",{class:"hljs-attr"},"post"),e(`: ModifyHelper
  `),s("span",{class:"hljs-attr"},"put"),e(`: ModifyHelper
  `),s("span",{class:"hljs-attr"},"patch"),e(`: ModifyHelper
}
`)])],-1),m={class:"card"},x=s("h3",null,"Example",-1),f=s("p",null,[s("code",null,"POST"),e(" , "),s("code",null,"PUT"),e(" , "),s("code",null,"PATCH"),e(" have similar behaviors. Let\u2019s take "),s("code",null,"POST"),e(" as an example.")],-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/axle'"),e(`

`),s("span",{class:"hljs-keyword"},"const"),e(" axle = createAxle("),s("span",{class:"hljs-comment"},[e("/** "),s("span",{class:"hljs-doctag"},"@see "),e("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),e(`)
`),s("span",{class:"hljs-keyword"},"const"),e(` axleHelpers = axle.helpers

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title"},"postData"),e("("),s("span",{class:"hljs-params"}),e(") ")]),e(`{
  `),s("span",{class:"hljs-keyword"},"return"),e(" axleHelpers.post("),s("span",{class:"hljs-string"},"'/user'"),e(", { "),s("span",{class:"hljs-attr"},"name"),e(": "),s("span",{class:"hljs-string"},"'axle'"),e(` })
}
`)])],-1);function y(v,k,g,A,H,T){const a=t("var-site-code-example");return c(),r("div",i,[h,s("div",_,[u,l(a,null,{default:n(()=>[j]),_:1})]),s("div",m,[x,f,l(a,null,{default:n(()=>[w]),_:1})])])}var M=o(d,[["render",y]]);export{M as default};
