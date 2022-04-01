import{_ as c}from"./elevation.a8512ead.js";import{e as t,o,c as r,a as s,i as n,j as a,U as d,m as e}from"./vendor.bb785d67.js";const p={components:{}},i={class:"varlet-site-doc"},h=d('<h1>Axle API</h1><h2>Fetch</h2><div class="card"><h3>Document</h3><p><code>Axle</code> provides the following methods to fetch <code>document</code>.</p><ul><li><code>getDocument</code></li><li><code>headDocument</code></li><li><code>optionsDocument</code></li><li><code>deleteDocument</code></li></ul></div>',3),u={class:"card"},m=s("h3",null,"Function Signature",-1),_=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"type"),e(" FetchHelper = < T = "),s("span",{class:"hljs-built_in"},"any"),e(", R = AxiosResponse<T>>"),s("span",{class:"hljs-function"},[e("("),s("span",{class:"hljs-params"},[e(`
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
`)])],-1),j={class:"card"},x=s("h3",null,"Example",-1),f=s("p",null,[s("code",null,"GET"),e(" , "),s("code",null,"HEAD"),e(" , "),s("code",null,"DELETE"),e(" , "),s("code",null,"OPTION"),e(" have similar behaviors. Let\u2019s take "),s("code",null,"GET"),e(" as an example.")],-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/axle'"),e(`

`),s("span",{class:"hljs-keyword"},"const"),e(" axle = createAxle("),s("span",{class:"hljs-comment"},[e("/** "),s("span",{class:"hljs-doctag"},"@see "),e("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),e(`)
`),s("span",{class:"hljs-keyword"},"const"),e(` axleHelpers = axle.helpers

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title"},"getDocument"),e("("),s("span",{class:"hljs-params"}),e(") ")]),e(`{
  `),s("span",{class:"hljs-keyword"},"return"),e(" axleHelpers.getDocument("),s("span",{class:"hljs-string"},"'/index.html'"),e(`)
}
`)])],-1);function v(g,k,y,D,A,H){const l=t("var-site-code-example");return o(),r("div",i,[h,s("div",u,[m,n(l,null,{default:a(()=>[_]),_:1})]),s("div",j,[x,f,n(l,null,{default:a(()=>[w]),_:1})])])}var T=c(p,[["render",v]]);export{T as default};
