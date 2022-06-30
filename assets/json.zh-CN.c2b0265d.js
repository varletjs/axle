import{_ as c,s as o,f as t,h as r,l as s,t as a,P as n,ah as d,M as e}from"./elevation.944bba77.js";const p={components:{}},h={class:"varlet-site-doc"},i=d('<h1>Axle API</h1><h2>\u8BF7\u6C42\u6570\u636E</h2><div class="card"><h3>\u8BF7\u6C42 Json</h3><p><code>Axle</code> \u63D0\u4F9B\u4E86\u4EE5\u4E0B\u51E0\u79CD\u8BF7\u6C42 <code>json</code> \u7684\u65B9\u6CD5\u3002</p><ul><li><code>get</code></li><li><code>head</code></li><li><code>options</code></li><li><code>delete</code></li></ul></div>',3),_={class:"card"},j=s("h3",null,"\u51FD\u6570\u7B7E\u540D",-1),u=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"type"),e(" FetchHelper = < T = "),s("span",{class:"hljs-built_in"},"any"),e(", R = AxiosResponse<T>>"),s("span",{class:"hljs-function"},[e("("),s("span",{class:"hljs-params"},[e(`
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
`)])],-1),x={class:"card"},m=s("h3",null,"\u7528\u4F8B",-1),f=s("p",null,[s("code",null,"GET"),e(" , "),s("code",null,"HEAD"),e(" , "),s("code",null,"DELETE"),e(" , "),s("code",null,"OPTION"),e(" \u62E5\u6709\u76F8\u4F3C\u7684\u884C\u4E3A\uFF0C\u6211\u4EEC\u4EE5 "),s("code",null,"GET"),e(" \u4E3E\u4F8B\u3002")],-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/axle'"),e(`

`),s("span",{class:"hljs-keyword"},"const"),e(" axle = createAxle("),s("span",{class:"hljs-comment"},[e("/** "),s("span",{class:"hljs-doctag"},"@see "),e("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),e(`)
`),s("span",{class:"hljs-keyword"},"const"),e(` axleHelpers = axle.helpers

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title"},"getJson"),e("("),s("span",{class:"hljs-params"}),e(") ")]),e(`{
  `),s("span",{class:"hljs-keyword"},"return"),e(" axleHelpers.get("),s("span",{class:"hljs-string"},"'/user/1'"),e(`)
}
`)])],-1);function y(k,g,v,A,H,E){const l=o("var-site-code-example");return t(),r("div",h,[i,s("div",_,[j,a(l,null,{default:n(()=>[u]),_:1})]),s("div",x,[m,f,a(l,null,{default:n(()=>[w]),_:1})])])}var N=c(p,[["render",y]]);export{N as default};
