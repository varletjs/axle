import{_ as r,s as c,f as t,h as o,l as s,t as l,P as n,ah as p,M as e}from"./elevation.944bba77.js";const d={components:{}},h={class:"varlet-site-doc"},i=p('<h1>Axle API</h1><h2>Fetch</h2><div class="card"><h3>ArrayBuffer</h3><p><code>Axle</code> provides the following methods to fetch <code>arraybuffer</code>.</p><ul><li><code>getArrayBuffer</code></li><li><code>headArrayBuffer</code></li><li><code>optionsArrayBuffer</code></li><li><code>deleteArrayBuffer</code></li></ul></div>',3),f={class:"card"},u=s("h3",null,"Function Signature",-1),_=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"type"),e(" FetchHelper = < T = "),s("span",{class:"hljs-built_in"},"any"),e(", R = AxiosResponse<T>>"),s("span",{class:"hljs-function"},[e("("),s("span",{class:"hljs-params"},[e(`
  url: `),s("span",{class:"hljs-built_in"},"string"),e(`,
  params?: `),s("span",{class:"hljs-built_in"},"any"),e(`,
  config?: AxiosRequestConfig
`)]),e(") =>")]),e(),s("span",{class:"hljs-built_in"},"Promise"),e(`<R>

`),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"interface"),e(` AxleHelpers {
  `),s("span",{class:"hljs-attr"},"getArrayBuffer"),e(`: FetchHelper
  `),s("span",{class:"hljs-attr"},"headArrayBuffer"),e(`: FetchHelper
  `),s("span",{class:"hljs-attr"},"optionsArrayBuffer"),e(`: FetchHelper
  `),s("span",{class:"hljs-attr"},"deleteArrayBuffer"),e(`: FetchHelper
}
`)])],-1),j={class:"card"},y=s("h3",null,"Example",-1),x=s("p",null,[s("code",null,"GET"),e(" , "),s("code",null,"HEAD"),e(" , "),s("code",null,"DELETE"),e(" , "),s("code",null,"OPTION"),e(" have similar behaviors. Let\u2019s take "),s("code",null,"GET"),e(" as an example.")],-1),m=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/axle'"),e(`

`),s("span",{class:"hljs-keyword"},"const"),e(" axle = createAxle("),s("span",{class:"hljs-comment"},[e("/** "),s("span",{class:"hljs-doctag"},"@see "),e("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),e(`)
`),s("span",{class:"hljs-keyword"},"const"),e(` axleHelpers = axle.helpers

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title"},"getArrayBuffer"),e("("),s("span",{class:"hljs-params"}),e(") ")]),e(`{
  `),s("span",{class:"hljs-keyword"},"return"),e(" axleHelpers.getArrayBuffer("),s("span",{class:"hljs-string"},"'/arraybufferurl'"),e(`)
}
`)])],-1);function A(w,v,B,g,k,H){const a=c("var-site-code-example");return t(),o("div",h,[i,s("div",f,[u,l(a,null,{default:n(()=>[_]),_:1})]),s("div",j,[y,x,l(a,null,{default:n(()=>[m]),_:1})])])}var E=r(d,[["render",A]]);export{E as default};
