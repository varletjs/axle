import{_ as n,s as e,f as t,h as c,l as s,t as o,P as r,M as l}from"./elevation.944bba77.js";const p={components:{}},h={class:"varlet-site-doc"},i=s("h1",null,"\u7528\u4F8B",-1),j={class:"card"},d=s("h3",null,"Fetch",-1),u=s("p",null,[s("code",null,"GET"),l(" , "),s("code",null,"HEAD"),l(" , "),s("code",null,"DELETE"),l(" , "),s("code",null,"OPTION"),l(" \u62E5\u6709\u76F8\u4F3C\u7684\u884C\u4E3A\uFF0C\u6211\u4EEC\u4EE5 "),s("code",null,"GET"),l(" \u4E3E\u4F8B\u3002")],-1),m=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),l(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'@varlet/axle'"),l(`

`),s("span",{class:"hljs-keyword"},"const"),l(" axle = createAxle("),s("span",{class:"hljs-comment"},[l("/** "),s("span",{class:"hljs-doctag"},"@see "),l("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),l(`)
`),s("span",{class:"hljs-keyword"},"const"),l(` axleHelpers = axle.helpers

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title"},"getById"),l("("),s("span",{class:"hljs-params"}),l(") ")]),l(`{
  `),s("span",{class:"hljs-keyword"},"return"),l(" axleHelpers.get("),s("span",{class:"hljs-string"},"'url/1'"),l(`)
}

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title"},"getBlob"),l("("),s("span",{class:"hljs-params"}),l(") ")]),l(`{
  axleHelpers.getBlob(`),s("span",{class:"hljs-string"},"'/url'"),l(", { "),s("span",{class:"hljs-attr"},"name"),l(": "),s("span",{class:"hljs-string"},"'axle'"),l("}, { "),s("span",{class:"hljs-attr"},"onDownloadProgress"),l(": "),s("span",{class:"hljs-function"},[l("("),s("span",{class:"hljs-params"},"e"),l(") =>")]),l(" {"),s("span",{class:"hljs-built_in"},"console"),l(".log(e)}}).then("),s("span",{class:"hljs-function"},[l("("),s("span",{class:"hljs-params"},"res"),l(") =>")]),l(` {
    axleHelpers.download(res.data, `),s("span",{class:"hljs-string"},"'getBlob.png'"),l(`)
  })  
}

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title"},"getDocument"),l("("),s("span",{class:"hljs-params"}),l(") ")]),l(`{
  `),s("span",{class:"hljs-keyword"},"return"),l(" axleHelpers.getDocument("),s("span",{class:"hljs-string"},"'/index.html'"),l(`)
}

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title"},"getArrayBuffer"),l("("),s("span",{class:"hljs-params"}),l(") ")]),l(`{
    `),s("span",{class:"hljs-keyword"},"return"),l(" axleHelpers.getArrayBuffer("),s("span",{class:"hljs-string"},"'/url'"),l(`)
}

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title"},"getText"),l("("),s("span",{class:"hljs-params"}),l(") ")]),l(`{
  `),s("span",{class:"hljs-keyword"},"return"),l(" axleHelpers.getText("),s("span",{class:"hljs-string"},"'/index.html'"),l(`)
}

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title"},"getStream"),l("("),s("span",{class:"hljs-params"}),l(") ")]),l(`{
  `),s("span",{class:"hljs-keyword"},"return"),l(" axleHelpers.getStream("),s("span",{class:"hljs-string"},"'/url'"),l(`)
}
`)])],-1);function f(_,x,g,w,y,k){const a=e("var-site-code-example");return t(),c("div",h,[i,s("div",j,[d,u,o(a,null,{default:r(()=>[m]),_:1})])])}var H=n(p,[["render",f]]);export{H as default};
