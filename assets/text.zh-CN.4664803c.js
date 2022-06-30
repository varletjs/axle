import{_ as n,s as c,f as o,h as r,l as s,t as a,P as t,ah as d,M as e}from"./elevation.944bba77.js";const p={components:{}},h={class:"varlet-site-doc"},i=d('<h1>Axle API</h1><h2>\u8BF7\u6C42\u6570\u636E</h2><div class="card"><h3>\u8BF7\u6C42 Text</h3><p><code>Axle</code> \u63D0\u4F9B\u4E86\u4EE5\u4E0B\u51E0\u79CD\u8BF7\u6C42 <code>text</code> \u7684\u65B9\u6CD5\u3002</p><ul><li><code>getText</code></li><li><code>headText</code></li><li><code>optionsText</code></li><li><code>deleteText</code></li></ul></div>',3),_={class:"card"},x=s("h3",null,"\u51FD\u6570\u7B7E\u540D",-1),j=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"type"),e(" FetchHelper = < T = "),s("span",{class:"hljs-built_in"},"any"),e(", R = AxiosResponse<T>>"),s("span",{class:"hljs-function"},[e("("),s("span",{class:"hljs-params"},[e(`
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
`)])],-1),u={class:"card"},m=s("h3",null,"\u7528\u4F8B",-1),T=s("p",null,[s("code",null,"GET"),e(" , "),s("code",null,"HEAD"),e(" , "),s("code",null,"DELETE"),e(" , "),s("code",null,"OPTION"),e(" \u62E5\u6709\u76F8\u4F3C\u7684\u884C\u4E3A\uFF0C\u6211\u4EEC\u4EE5 "),s("code",null,"GET"),e(" \u4E3E\u4F8B\u3002")],-1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/axle'"),e(`

`),s("span",{class:"hljs-keyword"},"const"),e(" axle = createAxle("),s("span",{class:"hljs-comment"},[e("/** "),s("span",{class:"hljs-doctag"},"@see "),e("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),e(`)
`),s("span",{class:"hljs-keyword"},"const"),e(` axleHelpers = axle.helpers

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title"},"getText"),e("("),s("span",{class:"hljs-params"}),e(") ")]),e(`{
  `),s("span",{class:"hljs-keyword"},"return"),e(" axleHelpers.getText("),s("span",{class:"hljs-string"},"'/index.html'"),e(`)
}
`)])],-1);function w(y,k,g,v,A,H){const l=c("var-site-code-example");return o(),r("div",h,[i,s("div",_,[x,a(l,null,{default:t(()=>[j]),_:1})]),s("div",u,[m,T,a(l,null,{default:t(()=>[f]),_:1})])])}var N=n(p,[["render",w]]);export{N as default};
