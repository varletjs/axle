import{_ as t}from"./elevation.29571e53.js";import{e as c,o,c as r,a as s,i as a,j as n,U as h,m as e}from"./vendor.bb785d67.js";const i={components:{}},p={class:"varlet-site-doc"},d=h('<h1>Axle API</h1><h2>Fetch</h2><div class="card"><h3>Json</h3><p><code>Axle</code> provides the following methods to fetch <code>json</code>.</p><ul><li><code>get</code></li><li><code>head</code></li><li><code>options</code></li><li><code>delete</code></li></ul></div>',3),_={class:"card"},j=s("h3",null,"Function Signature",-1),u=s("pre",{class:"hljs"},[s("code",null,[s("link",{class:"hljs-style",rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"type"),e(" FetchHelper = < T = "),s("span",{class:"hljs-built_in"},"any"),e(", R = AxiosResponse<T>>"),s("span",{class:"hljs-function"},[e("("),s("span",{class:"hljs-params"},[e(`
  url: `),s("span",{class:"hljs-built_in"},"string"),e(`,
  params?: `),s("span",{class:"hljs-built_in"},"any"),e(`,
  config?: AxiosRequestConfig
`)]),e(") =>")]),e(),s("span",{class:"hljs-built_in"},"Promise"),e(`<R>

`),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"interface"),e(` AxleHelpers {
  `),s("span",{class:"hljs-attr"},"get"),e(`: FetchHelper
  `),s("span",{class:"hljs-attr"},"head"),e(`: FetchHelper
  `),s("span",{class:"hljs-attr"},"options"),e(`: FetchHelper
  `),s("span",{class:"hljs-attr"},"delete"),e(`: FetchHelper
}
`)])],-1),m={class:"card"},x=s("h3",null,"Example",-1),f=s("p",null,[s("code",null,"GET"),e(" , "),s("code",null,"HEAD"),e(" , "),s("code",null,"DELETE"),e(" , "),s("code",null,"OPTION"),e(" have similar behaviors. Let\u2019s take "),s("code",null,"GET"),e(" as an example.")],-1),g=s("pre",{class:"hljs"},[s("code",null,[s("link",{class:"hljs-style",rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),e(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/axle'"),e(`

`),s("span",{class:"hljs-keyword"},"const"),e(" axle = createAxle("),s("span",{class:"hljs-comment"},[e("/** "),s("span",{class:"hljs-doctag"},"@see "),e("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),e(`)
`),s("span",{class:"hljs-keyword"},"const"),e(` axleHelpers = axle.helpers

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title"},"getJson"),e("("),s("span",{class:"hljs-params"}),e(") ")]),e(`{
  `),s("span",{class:"hljs-keyword"},"return"),e(" axleHelpers.get("),s("span",{class:"hljs-string"},"'/user/1'"),e(`)
}
`)])],-1);function y(k,w,v,A,H,E){const l=c("var-site-code-example");return o(),r("div",p,[d,s("div",_,[j,a(l,null,{default:n(()=>[u]),_:1})]),s("div",m,[x,f,a(l,null,{default:n(()=>[g]),_:1})])])}var b=t(i,[["render",y]]);export{b as default};
