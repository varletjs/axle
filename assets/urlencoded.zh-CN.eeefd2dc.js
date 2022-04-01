import{_ as o}from"./elevation.a8512ead.js";import{e as c,o as t,c as r,a as s,i as a,j as n,U as p,m as e}from"./vendor.bb785d67.js";const d={components:{}},i={class:"varlet-site-doc"},h=p('<h1>Axle API</h1><h2>\u63D0\u4EA4\u6570\u636E</h2><div class="card"><h3>\u63D0\u4EA4 Urlencoded</h3><p><code>Axle</code> \u63D0\u4F9B\u4E86\u4EE5\u4E0B\u65B9\u6CD5\u7528\u4E8E\u4EE5 <code>application/x-www-form-urlencoded</code> \u683C\u5F0F\u53D1\u9001\u6570\u636E\u3002</p><ul><li><code>post</code></li><li><code>put</code></li><li><code>patch</code></li></ul></div>',3),_={class:"card"},u=s("h3",null,"\u51FD\u6570\u7B7E\u540D",-1),j=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"type"),e(" ModifyHelper = < T = "),s("span",{class:"hljs-built_in"},"any"),e(", R = AxiosResponse<T>>"),s("span",{class:"hljs-function"},[e("("),s("span",{class:"hljs-params"},[e(`
  url: `),s("span",{class:"hljs-built_in"},"string"),e(`,
  data?: `),s("span",{class:"hljs-built_in"},"any"),e(`,
  config?: AxiosRequestConfig
`)]),e(") =>")]),e(),s("span",{class:"hljs-built_in"},"Promise"),e(`<R>

`),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"interface"),e(` AxleHelpers {
  `),s("span",{class:"hljs-attr"},"post"),e(`: ModifyHelper
  `),s("span",{class:"hljs-attr"},"put"),e(`: ModifyHelper
  `),s("span",{class:"hljs-attr"},"patch"),e(`: ModifyHelper
}
`)])],-1),x={class:"card"},f=s("h3",null,"\u7528\u4F8B",-1),m=s("p",null,[s("code",null,"POST"),e(" , "),s("code",null,"PUT"),e(" , "),s("code",null,"PATCH"),e(" \u62E5\u6709\u76F8\u4F3C\u7684\u884C\u4E3A\uFF0C\u6211\u4EEC\u4EE5 "),s("code",null,"POST"),e(" \u4E3E\u4F8B\u3002")],-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/axle'"),e(`

`),s("span",{class:"hljs-keyword"},"const"),e(" axle = createAxle("),s("span",{class:"hljs-comment"},[e("/** "),s("span",{class:"hljs-doctag"},"@see "),e("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),e(`)
`),s("span",{class:"hljs-keyword"},"const"),e(` axleHelpers = axle.helpers

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title"},"postData"),e("("),s("span",{class:"hljs-params"}),e(") ")]),e(`{
  `),s("span",{class:"hljs-keyword"},"return"),e(" axleHelpers.post("),s("span",{class:"hljs-string"},"'/user'"),e(", { "),s("span",{class:"hljs-attr"},"name"),e(": "),s("span",{class:"hljs-string"},"'axle'"),e(` })
}
`)])],-1);function y(k,v,A,g,H,T){const l=c("var-site-code-example");return t(),r("div",i,[h,s("div",_,[u,a(l,null,{default:n(()=>[j]),_:1})]),s("div",x,[f,m,a(l,null,{default:n(()=>[w]),_:1})])])}var N=o(d,[["render",y]]);export{N as default};
