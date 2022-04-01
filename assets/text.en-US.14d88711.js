import{_ as n}from"./elevation.a8512ead.js";import{e as c,o,c as r,a as s,i as a,j as t,U as p,m as e}from"./vendor.bb785d67.js";const d={components:{}},i={class:"varlet-site-doc"},h=p('<h1>Axle API</h1><h2>Fetch</h2><div class="card"><h3>Text</h3><p><code>Axle</code> provides the following methods to fetch <code>text</code>.</p><ul><li><code>getText</code></li><li><code>headText</code></li><li><code>optionsText</code></li><li><code>deleteText</code></li></ul></div>',3),x={class:"card"},_=s("h3",null,"Function Signature",-1),u=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"type"),e(" FetchHelper = < T = "),s("span",{class:"hljs-built_in"},"any"),e(", R = AxiosResponse<T>>"),s("span",{class:"hljs-function"},[e("("),s("span",{class:"hljs-params"},[e(`
  url: `),s("span",{class:"hljs-built_in"},"string"),e(`,
  params?: `),s("span",{class:"hljs-built_in"},"any"),e(`,
  config?: AxiosRequestConfig
`)]),e(") =>")]),e(),s("span",{class:"hljs-built_in"},"Promise"),e(`<R>

`),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"interface"),e(` AxleHelpers {
  `),s("span",{class:"hljs-attr"},"getText"),e(`: FetchHelper
  `),s("span",{class:"hljs-attr"},"headText"),e(`: FetchHelper
  `),s("span",{class:"hljs-attr"},"optionsText"),e(`: FetchHelper
  `),s("span",{class:"hljs-attr"},"deleteText"),e(`: FetchHelper
}
`)])],-1),j={class:"card"},m=s("h3",null,"Example",-1),f=s("p",null,[s("code",null,"GET"),e(" , "),s("code",null,"HEAD"),e(" , "),s("code",null,"DELETE"),e(" , "),s("code",null,"OPTION"),e(" have similar behaviors. Let\u2019s take "),s("code",null,"GET"),e(" as an example.")],-1),T=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/axle'"),e(`

`),s("span",{class:"hljs-keyword"},"const"),e(" axle = createAxle("),s("span",{class:"hljs-comment"},[e("/** "),s("span",{class:"hljs-doctag"},"@see "),e("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),e(`)
`),s("span",{class:"hljs-keyword"},"const"),e(` axleHelpers = axle.helpers

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title"},"getText"),e("("),s("span",{class:"hljs-params"}),e(") ")]),e(`{
  `),s("span",{class:"hljs-keyword"},"return"),e(" axleHelpers.getText("),s("span",{class:"hljs-string"},"'/index.html'"),e(`)
}
`)])],-1);function w(v,g,k,y,A,H){const l=c("var-site-code-example");return o(),r("div",i,[h,s("div",x,[_,a(l,null,{default:t(()=>[u]),_:1})]),s("div",j,[m,f,a(l,null,{default:t(()=>[T]),_:1})])])}var b=n(d,[["render",w]]);export{b as default};
