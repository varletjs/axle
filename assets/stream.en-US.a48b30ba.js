import{_ as n,s as c,f as o,h as r,l as s,t as l,P as t,ah as p,M as e}from"./elevation.944bba77.js";const d={components:{}},h={class:"varlet-site-doc"},i=p('<h1>Axle API</h1><h2>Fetch</h2><div class="card"><h3>Stream</h3><p><code>Axle</code> provides the following methods to fetch <code>stream</code>.</p><ul><li><code>getStream</code></li><li><code>headStream</code></li><li><code>optionsStream</code></li><li><code>deleteStream</code></li></ul></div>',3),_={class:"card"},m=s("h3",null,"Function Signature",-1),u=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"type"),e(" FetchHelper = < T = "),s("span",{class:"hljs-built_in"},"any"),e(", R = AxiosResponse<T>>"),s("span",{class:"hljs-function"},[e("("),s("span",{class:"hljs-params"},[e(`
  url: `),s("span",{class:"hljs-built_in"},"string"),e(`,
  params?: `),s("span",{class:"hljs-built_in"},"any"),e(`,
  config?: AxiosRequestConfig
`)]),e(") =>")]),e(),s("span",{class:"hljs-built_in"},"Promise"),e(`<R>

`),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"interface"),e(` AxleHelpers {
  `),s("span",{class:"hljs-attr"},"getStream"),e(`: FetchHelper
  `),s("span",{class:"hljs-attr"},"headStream"),e(`: FetchHelper
  `),s("span",{class:"hljs-attr"},"optionsStream"),e(`: FetchHelper
  `),s("span",{class:"hljs-attr"},"deleteStream"),e(`: FetchHelper
}
`)])],-1),j={class:"card"},x=s("h3",null,"Example",-1),f=s("p",null,[s("code",null,"GET"),e(" , "),s("code",null,"HEAD"),e(" , "),s("code",null,"DELETE"),e(" , "),s("code",null,"OPTION"),e(" have similar behaviors. Let\u2019s take "),s("code",null,"GET"),e(" as an example.")],-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/axle'"),e(`

`),s("span",{class:"hljs-keyword"},"const"),e(" axle = createAxle("),s("span",{class:"hljs-comment"},[e("/** "),s("span",{class:"hljs-doctag"},"@see "),e("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),e(`)
`),s("span",{class:"hljs-keyword"},"const"),e(` axleHelpers = axle.helpers

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),e(),s("span",{class:"hljs-title"},"getStream"),e("("),s("span",{class:"hljs-params"}),e(") ")]),e(`{
  `),s("span",{class:"hljs-keyword"},"return"),e(" axleHelpers.getStream("),s("span",{class:"hljs-string"},"'/streamurl'"),e(`)
}
`)])],-1);function v(S,g,k,y,A,H){const a=c("var-site-code-example");return o(),r("div",h,[i,s("div",_,[m,l(a,null,{default:t(()=>[u]),_:1})]),s("div",j,[x,f,l(a,null,{default:t(()=>[w]),_:1})])])}var F=n(d,[["render",v]]);export{F as default};
