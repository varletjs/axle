import{_ as o,s as c,f as t,h as p,l as s,t as a,P as n,ah as r,M as e}from"./elevation.944bba77.js";const d={components:{}},i={class:"varlet-site-doc"},h=r('<h1>Axle API</h1><h2>\u63D0\u4EA4\u6570\u636E</h2><div class="card"><h3>\u63D0\u4EA4 Json</h3><p><code>Axle</code> \u63D0\u4F9B\u4E86\u4EE5\u4E0B\u65B9\u6CD5\u7528\u4E8E\u4EE5 <code>application/json</code> \u683C\u5F0F\u53D1\u9001\u6570\u636E\u3002</p><ul><li><code>postJson</code></li><li><code>putJson</code></li><li><code>patchJson</code></li></ul></div>',3),_={class:"card"},j=s("h3",null,"\u51FD\u6570\u7B7E\u540D",-1),u=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"type"),e(" ModifyHelper = < T = "),s("span",{class:"hljs-built_in"},"any"),e(", R = AxiosResponse<T>>"),s("span",{class:"hljs-function"},[e("("),s("span",{class:"hljs-params"},[e(`
  url: `),s("span",{class:"hljs-built_in"},"string"),e(`,
  data?: `),s("span",{class:"hljs-built_in"},"any"),e(`,
  config?: AxiosRequestConfig
`)]),e(") =>")]),e(),s("span",{class:"hljs-built_in"},"Promise"),e(`<R>

`),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"interface"),e(` AxleHelpers {
  `),s("span",{class:"hljs-attr"},"postJson"),e(`: ModifyHelper
  `),s("span",{class:"hljs-attr"},"putJson"),e(`: ModifyHelper
  `),s("span",{class:"hljs-attr"},"patchJson"),e(`: ModifyHelper
}
`)])],-1),x={class:"card"},f=s("h3",null,"\u7528\u4F8B",-1),m=s("p",null,[s("code",null,"POST"),e(" , "),s("code",null,"PUT"),e(" , "),s("code",null,"PATCH"),e(" \u62E5\u6709\u76F8\u4F3C\u7684\u884C\u4E3A\uFF0C\u6211\u4EEC\u4EE5 "),s("code",null,"POST"),e(" \u4E3E\u4F8B\u3002")],-1),y=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/axle'"),e(`

`),s("span",{class:"hljs-keyword"},"const"),e(" axle = createAxle("),s("span",{class:"hljs-comment"},[e("/** "),s("span",{class:"hljs-doctag"},"@see "),e("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),e(`)
`),s("span",{class:"hljs-keyword"},"const"),e(` axleHelpers = axle.helpers

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title"},"postJson"),e("("),s("span",{class:"hljs-params"}),e(") ")]),e(`{
  `),s("span",{class:"hljs-keyword"},"return"),e(" axleHelpers.postJson("),s("span",{class:"hljs-string"},"'/user'"),e(", { "),s("span",{class:"hljs-attr"},"name"),e(": "),s("span",{class:"hljs-string"},"'axle'"),e(` })
}
`)])],-1);function w(k,v,J,A,g,H){const l=c("var-site-code-example");return t(),p("div",i,[h,s("div",_,[j,a(l,null,{default:n(()=>[u]),_:1})]),s("div",x,[f,m,a(l,null,{default:n(()=>[y]),_:1})])])}var T=o(d,[["render",w]]);export{T as default};
