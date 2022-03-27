import{_ as t}from"./elevation.a0cf3236.js";import{e as c,o as r,c as o,a as s,i as n,j as e,m as a}from"./vendor.16f6342a.js";const p={components:{}},h={class:"varlet-site-doc"},i=s("h1",null,"\u7528\u4F8B",-1),j={class:"card"},d=s("h3",null,"\u683C\u5F0F\u5316\u63A5\u53E3\u53C2\u6570",-1),m=s("pre",{class:"hljs"},[s("code",null,[s("link",{class:"hljs-style",rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-comment"},"// axios"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { createAxios } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'axios'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(` axios = createAxios({})

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"getUser"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  `),s("span",{class:"hljs-keyword"},"return"),a(" axios.get("),s("span",{class:"hljs-string"},"'/user'"),a(`, {
    `),s("span",{class:"hljs-attr"},"params"),a(`: {
      `),s("span",{class:"hljs-attr"},"id"),a(": "),s("span",{class:"hljs-number"},"1"),a(`,
    },
  })
}

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"uploadFile"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  `),s("span",{class:"hljs-keyword"},"const"),a(" formData = "),s("span",{class:"hljs-keyword"},"new"),a(` FormData()
  formData.append(`),s("span",{class:"hljs-string"},"'name'"),a(", "),s("span",{class:"hljs-string"},"'axios'"),a(`)
  formData.append(`),s("span",{class:"hljs-string"},"'file'"),a(", "),s("span",{class:"hljs-keyword"},"new"),a(` File())
    
  `),s("span",{class:"hljs-keyword"},"return"),a(" axios.post("),s("span",{class:"hljs-string"},"'/user'"),a(`, formData, {
    `),s("span",{class:"hljs-attr"},"headers"),a(`: {
      `),s("span",{class:"hljs-string"},"'Ccontent-Type'"),a(": "),s("span",{class:"hljs-string"},"'multipart/form-data'"),a(`,
    },
  })
}
`)])],-1),u=s("pre",{class:"hljs"},[s("code",null,[s("link",{class:"hljs-style",rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-comment"},"// axle"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/axle'"),a(`

`),s("span",{class:"hljs-comment"},"// \u521B\u5EFAaxle\u5B9E\u4F8B\uFF0Caxle\u62E5\u6709\u4E0Eaxios\u76F8\u540C\u7684\u80FD\u529B"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(" axle = createAxle("),s("span",{class:"hljs-comment"},[a("/** "),s("span",{class:"hljs-doctag"},"@see "),a("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),a(`)

`),s("span",{class:"hljs-comment"},"// axle\u7684\u4E00\u4E9B\u8F85\u52A9\u51FD\u6570"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(` axleHelpers = axle.helpers

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"getUser"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  `),s("span",{class:"hljs-keyword"},"return"),a(" axleHelpers.get("),s("span",{class:"hljs-string"},"'/user'"),a(", { "),s("span",{class:"hljs-attr"},"id"),a(": "),s("span",{class:"hljs-number"},"1"),a(` })
}

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"addUser"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  `),s("span",{class:"hljs-keyword"},"return"),a(" axleHelpers.postMultipart("),s("span",{class:"hljs-string"},"'/user'"),a(", { "),s("span",{class:"hljs-attr"},"name"),a(": "),s("span",{class:"hljs-string"},"'axle'"),a(", "),s("span",{class:"hljs-attr"},"file"),a(": "),s("span",{class:"hljs-keyword"},"new"),a(` File() })
}
`)])],-1);function x(f,_,w,y,k,g){const l=c("var-site-code-example");return r(),o("div",h,[i,s("div",j,[d,n(l,null,{default:e(()=>[m]),_:1}),n(l,null,{default:e(()=>[u]),_:1})])])}var A=t(p,[["render",x]]);export{A as default};
