import{_ as e}from"./elevation.22442860.js";import{e as n,o as t,c,a as s,i as o,j as r,m as l}from"./vendor.16f6342a.js";const p={components:{}},h={class:"varlet-site-doc"},i=s("h1",null,"\u7528\u4F8B",-1),d={class:"card"},j=s("h3",null,"Modify",-1),u=s("p",null,[s("code",null,"POST"),l(" , "),s("code",null,"PUT"),l(" , "),s("code",null,"PATCH"),l(" \u62E5\u6709\u76F8\u4F3C\u7684\u884C\u4E3A\uFF0C\u6211\u4EEC\u4EE5 "),s("code",null,"POST"),l(" \u4E3E\u4F8B\u3002")],-1),_=s("pre",{class:"hljs"},[s("code",null,[s("link",{class:"hljs-style",rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),l(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'@varlet/axle'"),l(`

`),s("span",{class:"hljs-keyword"},"const"),l(" axle = createAxle("),s("span",{class:"hljs-comment"},[l("/** "),s("span",{class:"hljs-doctag"},"@see "),l("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),l(`)
`),s("span",{class:"hljs-keyword"},"const"),l(` axleHelpers = axle.helpers

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title"},"post"),l("("),s("span",{class:"hljs-params"}),l(")")]),l(`{
  `),s("span",{class:"hljs-keyword"},"return"),l(" axleHelpers.post("),s("span",{class:"hljs-string"},"'/url'"),l(", { "),s("span",{class:"hljs-attr"},"name"),l(": "),s("span",{class:"hljs-string"},"'axle'"),l(` })
}

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title"},"postJSON"),l("("),s("span",{class:"hljs-params"}),l(") ")]),l(`{
  `),s("span",{class:"hljs-keyword"},"return"),l(" axleHelpers.postJSON("),s("span",{class:"hljs-string"},"'/url'"),l(", { "),s("span",{class:"hljs-attr"},"name"),l(": "),s("span",{class:"hljs-string"},"'axle'"),l(` })
}

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title"},"postMultipart"),l("("),s("span",{class:"hljs-params"}),l(") ")]),l(`{
  `),s("span",{class:"hljs-keyword"},"return"),l(" axleHelpers.postMultipart("),s("span",{class:"hljs-string"},"'/url'"),l(`,{
    `),s("span",{class:"hljs-attr"},"file"),l(":"),s("span",{class:"hljs-keyword"},"new"),l(` File(),
    `),s("span",{class:"hljs-attr"},"name"),l(":"),s("span",{class:"hljs-string"},"'axle'"),l(`
  })
}
`)])],-1);function m(x,f,w,y,k,g){const a=n("var-site-code-example");return t(),c("div",h,[i,s("div",d,[j,u,o(a,null,{default:r(()=>[_]),_:1})])])}var H=e(p,[["render",m]]);export{H as default};
