import{_ as n,s as e,f as t,h as c,l as s,t as o,P as r,M as a}from"./elevation.944bba77.js";const p={components:{}},h={class:"varlet-site-doc"},i=s("h1",null,"\u7528\u4F8B",-1),d={class:"card"},j=s("h3",null,"Modify",-1),u=s("p",null,[s("code",null,"POST"),a(" , "),s("code",null,"PUT"),a(" , "),s("code",null,"PATCH"),a(" \u62E5\u6709\u76F8\u4F3C\u7684\u884C\u4E3A\uFF0C\u6211\u4EEC\u4EE5 "),s("code",null,"POST"),a(" \u4E3E\u4F8B\u3002")],-1),_=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/axle'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" axle = createAxle("),s("span",{class:"hljs-comment"},[a("/** "),s("span",{class:"hljs-doctag"},"@see "),a("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),a(`)
`),s("span",{class:"hljs-keyword"},"const"),a(` axleHelpers = axle.helpers

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"post"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  `),s("span",{class:"hljs-keyword"},"return"),a(" axleHelpers.post("),s("span",{class:"hljs-string"},"'/url'"),a(", { "),s("span",{class:"hljs-attr"},"name"),a(": "),s("span",{class:"hljs-string"},"'axle'"),a(` })
}

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"postJSON"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  `),s("span",{class:"hljs-keyword"},"return"),a(" axleHelpers.postJSON("),s("span",{class:"hljs-string"},"'/url'"),a(", { "),s("span",{class:"hljs-attr"},"name"),a(": "),s("span",{class:"hljs-string"},"'axle'"),a(` })
}

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"postMultipart"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  `),s("span",{class:"hljs-keyword"},"return"),a(" axleHelpers.postMultipart("),s("span",{class:"hljs-string"},"'/url'"),a(`,{
    `),s("span",{class:"hljs-attr"},"file"),a(":"),s("span",{class:"hljs-keyword"},"new"),a(` File(),
    `),s("span",{class:"hljs-attr"},"name"),a(":"),s("span",{class:"hljs-string"},"'axle'"),a(`
  })
}
`)])],-1);function m(x,f,w,k,y,g){const l=e("var-site-code-example");return t(),c("div",h,[i,s("div",d,[j,u,o(l,null,{default:r(()=>[_]),_:1})])])}var N=n(p,[["render",m]]);export{N as default};
