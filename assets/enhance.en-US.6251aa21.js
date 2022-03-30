import{_ as t}from"./elevation.29571e53.js";import{e as o,o as c,c as r,a as s,i as l,j as e,m as a}from"./vendor.bb785d67.js";const p={components:{}},h={class:"varlet-site-doc"},i=s("h1",null,"Enhance",-1),j={class:"card"},d=s("h3",null,"Normalize Api Arguments",-1),m=s("p",null,[s("code",null,"Axle"),a(" unifies the input parameter format of the interface, so that developers can focus more on business development. The following are some examples compared with "),s("code",null,"axios"),a(".")],-1),u=s("pre",{class:"hljs"},[s("code",null,[s("link",{class:"hljs-style",rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-comment"},"// axios"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { createAxios } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'axios'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(` axios = createAxios({})

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"getUser"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  `),s("span",{class:"hljs-keyword"},"return"),a(" axios.get("),s("span",{class:"hljs-string"},"'/user'"),a(`, {
    `),s("span",{class:"hljs-attr"},"params"),a(`: {
      `),s("span",{class:"hljs-attr"},"id"),a(": "),s("span",{class:"hljs-number"},"1"),a(`,
    },
  })
}

`),s("span",{class:"hljs-comment"},"// By default, axios serializes JavaScript objects to JSON. To send data in the application/x-www-form-urlencoded format instead, you can use one of the following options."),a(`
`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"postURLSearchParams"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
    `),s("span",{class:"hljs-keyword"},"const"),a(" params = "),s("span",{class:"hljs-keyword"},"new"),a(` URLSearchParams();
    params.append(`),s("span",{class:"hljs-string"},"'name'"),a(", "),s("span",{class:"hljs-string"},"'axios'"),a(`);
    `),s("span",{class:"hljs-keyword"},"return"),a("  axios.post("),s("span",{class:"hljs-string"},"'/foo'"),a(`, params);

    `),s("span",{class:"hljs-comment"},"// or "),a(`
    `),s("span",{class:"hljs-keyword"},"return"),a(" axios.post("),s("span",{class:"hljs-string"},"'/foo'"),a(", qs.stringify({ "),s("span",{class:"hljs-string"},"'name'"),a(": "),s("span",{class:"hljs-string"},"'axios'"),a(` }));
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

axios.defaults.headers.common[`),s("span",{class:"hljs-string"},"'Authorization'"),a("] = "),s("span",{class:"hljs-string"},"'your token'"),a(`;
`)])],-1),f=s("pre",{class:"hljs"},[s("code",null,[s("link",{class:"hljs-style",rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-comment"},"// axle"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/axle'"),a(`

`),s("span",{class:"hljs-comment"},"// create axle instance , axle has the same abilities as axios"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(" axle = createAxle("),s("span",{class:"hljs-comment"},[a("/** "),s("span",{class:"hljs-doctag"},"@see "),a("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),a(`)

`),s("span",{class:"hljs-comment"},"// Some helper functions of axle"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(` axleHelpers = axle.helpers

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"getUser"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  `),s("span",{class:"hljs-keyword"},"return"),a(" axleHelpers.get("),s("span",{class:"hljs-string"},"'/user'"),a(", { "),s("span",{class:"hljs-attr"},"id"),a(": "),s("span",{class:"hljs-number"},"1"),a(` })
}

`),s("span",{class:"hljs-comment"},"// axle enhances the way to send data in application/x-www-form-urlencoded format"),a(`
`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"postURLSearchParams"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
    `),s("span",{class:"hljs-keyword"},"return"),a(" axleHelpers.post("),s("span",{class:"hljs-string"},"'/foo'"),a(", { "),s("span",{class:"hljs-attr"},"name"),a(": "),s("span",{class:"hljs-string"},"'axle'"),a(`});
}

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"uploadFile"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  `),s("span",{class:"hljs-keyword"},"return"),a(" axleHelpers.postMultipart("),s("span",{class:"hljs-string"},"'/user'"),a(", { "),s("span",{class:"hljs-attr"},"name"),a(": "),s("span",{class:"hljs-string"},"'axle'"),a(", "),s("span",{class:"hljs-attr"},"file"),a(": "),s("span",{class:"hljs-keyword"},"new"),a(` File() })
}

axleHelpers.setHeader(`),s("span",{class:"hljs-string"},"'Authorization'"),a(", "),s("span",{class:"hljs-string"},"'your token'"),a(`)
`)])],-1);function x(w,g,y,k,_,v){const n=o("var-site-code-example");return c(),r("div",h,[i,s("div",j,[d,m,l(n,null,{default:e(()=>[u]),_:1}),l(n,null,{default:e(()=>[f]),_:1})])])}var H=t(p,[["render",x]]);export{H as default};
