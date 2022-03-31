import{_ as n}from"./elevation.c0e00a8b.js";import{e,o as t,c,a as s,i as o,j as r,m as a}from"./vendor.bb785d67.js";const p={components:{}},h={class:"varlet-site-doc"},i=s("h1",null,"Example",-1),j={class:"card"},d=s("h3",null,"Fetch",-1),u=s("p",null,[s("code",null,"GET"),a(" , "),s("code",null,"HEAD"),a(" , "),s("code",null,"DELETE"),a(" , "),s("code",null,"OPTION"),a(" have similar behaviors. Let\u2019s take "),s("code",null,"GET"),a(" as an example.")],-1),m=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/axle'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" axle = createAxle("),s("span",{class:"hljs-comment"},[a("/** "),s("span",{class:"hljs-doctag"},"@see "),a("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),a(`)
`),s("span",{class:"hljs-keyword"},"const"),a(` axleHelpers = axle.helpers

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"getById"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  `),s("span",{class:"hljs-keyword"},"return"),a(" axleHelpers.get("),s("span",{class:"hljs-string"},"'url/1'"),a(`)
}

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"getBlob"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  axleHelpers.getBlob(`),s("span",{class:"hljs-string"},"'/url'"),a(", { "),s("span",{class:"hljs-attr"},"name"),a(": "),s("span",{class:"hljs-string"},"'axle'"),a("}, { "),s("span",{class:"hljs-attr"},"onDownloadProgress"),a(": "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"e"),a(") =>")]),a(" {"),s("span",{class:"hljs-built_in"},"console"),a(".log(e)}}).then("),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"res"),a(") =>")]),a(` {
    axleHelpers.download(res.data, `),s("span",{class:"hljs-string"},"'getBlob.png'"),a(`)
  })  
}

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"getDocument"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  `),s("span",{class:"hljs-keyword"},"return"),a(" axleHelpers.getDocument("),s("span",{class:"hljs-string"},"'/index.html'"),a(`)
}

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"getArraybuffer"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
    `),s("span",{class:"hljs-keyword"},"return"),a(" axleHelpers.getArraybuffer("),s("span",{class:"hljs-string"},"'/url'"),a(`)
}

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"getText"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  `),s("span",{class:"hljs-keyword"},"return"),a(" axleHelpers.getText("),s("span",{class:"hljs-string"},"'/index.html'"),a(`)
}

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"getStream"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  `),s("span",{class:"hljs-keyword"},"return"),a(" axleHelpers.getStream("),s("span",{class:"hljs-string"},"'/url'"),a(`)
}
`)])],-1);function x(f,_,g,w,k,y){const l=e("var-site-code-example");return t(),c("div",h,[i,s("div",j,[d,u,o(l,null,{default:r(()=>[m]),_:1})])])}var H=n(p,[["render",x]]);export{H as default};
