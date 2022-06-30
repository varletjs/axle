import{_ as e,s as n,f as t,h as c,l as s,t as o,P as r,M as a}from"./elevation.944bba77.js";const p={components:{}},h={class:"varlet-site-doc"},i=s("h1",null,"Example",-1),d={class:"card"},j=s("h3",null,"Modify",-1),u=s("p",null,[s("code",null,"POST"),a(" , "),s("code",null,"PUT"),a(" , "),s("code",null,"PATCH"),a(" have similar behaviors. Let\u2019s take "),s("code",null,"POST"),a(" as an example.")],-1),_=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/axle'"),a(`

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
`)])],-1);function m(x,f,w,k,y,v){const l=n("var-site-code-example");return t(),c("div",h,[i,s("div",d,[j,u,o(l,null,{default:r(()=>[_]),_:1})])])}var H=e(p,[["render",m]]);export{H as default};
