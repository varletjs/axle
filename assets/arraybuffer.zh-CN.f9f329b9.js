import{_ as r,s as c,f as t,h as o,l as s,t as l,P as n,ah as d,M as e}from"./elevation.944bba77.js";const p={components:{}},h={class:"varlet-site-doc"},i=d('<h1>Axle API</h1><h2>\u8BF7\u6C42\u6570\u636E</h2><div class="card"><h3>\u8BF7\u6C42 ArrayBuffer</h3><p><code>Axle</code> \u63D0\u4F9B\u4E86\u4EE5\u4E0B\u51E0\u79CD\u8BF7\u6C42 <code>arraybuffer</code> \u7684\u65B9\u6CD5\u3002</p><ul><li><code>getArrayBuffer</code></li><li><code>headArrayBuffer</code></li><li><code>optionsArrayBuffer</code></li><li><code>deleteArrayBuffer</code></li></ul></div>',3),f={class:"card"},u=s("h3",null,"\u51FD\u6570\u7B7E\u540D",-1),_=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"type"),e(" FetchHelper = < T = "),s("span",{class:"hljs-built_in"},"any"),e(", R = AxiosResponse<T>>"),s("span",{class:"hljs-function"},[e("("),s("span",{class:"hljs-params"},[e(`
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
`)])],-1),j={class:"card"},y=s("h3",null,"\u7528\u4F8B",-1),x=s("p",null,[s("code",null,"GET"),e(" , "),s("code",null,"HEAD"),e(" , "),s("code",null,"DELETE"),e(" , "),s("code",null,"OPTION"),e(" \u62E5\u6709\u76F8\u4F3C\u7684\u884C\u4E3A\uFF0C\u6211\u4EEC\u4EE5 "),s("code",null,"GET"),e(" \u4E3E\u4F8B\u3002")],-1),A=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/axle'"),e(`

`),s("span",{class:"hljs-keyword"},"const"),e(" axle = createAxle("),s("span",{class:"hljs-comment"},[e("/** "),s("span",{class:"hljs-doctag"},"@see "),e("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),e(`)
`),s("span",{class:"hljs-keyword"},"const"),e(` axleHelpers = axle.helpers

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title"},"getArrayBuffer"),e("("),s("span",{class:"hljs-params"}),e(") ")]),e(`{
  `),s("span",{class:"hljs-keyword"},"return"),e(" axleHelpers.getArrayBuffer("),s("span",{class:"hljs-string"},"'/arraybufferurl'"),e(`)
}
`)])],-1);function m(w,B,k,g,v,H){const a=c("var-site-code-example");return t(),o("div",h,[i,s("div",f,[u,l(a,null,{default:n(()=>[_]),_:1})]),s("div",j,[y,x,l(a,null,{default:n(()=>[A]),_:1})])])}var E=r(p,[["render",m]]);export{E as default};
