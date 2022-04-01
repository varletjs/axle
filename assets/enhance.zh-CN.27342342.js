import{_ as t}from"./elevation.a8512ead.js";import{e as c,o,c as r,a as s,i as l,j as e,m as a}from"./vendor.bb785d67.js";const p={components:{}},h={class:"varlet-site-doc"},i=s("h1",null,"\u52A0\u5F3A",-1),j={class:"card"},d=s("h3",null,"\u683C\u5F0F\u5316\u63A5\u53E3\u53C2\u6570",-1),m=s("p",null,[s("code",null,"axle"),a(" \u7EDF\u4E00\u4E86\u63A5\u53E3\u7684\u5165\u53C2\u683C\u5F0F\uFF0C\u4F7F\u5F97\u5F00\u53D1\u8005\u53EF\u4EE5\u66F4\u4E13\u6CE8\u4E8E\u4E1A\u52A1\u7684\u5F00\u53D1\uFF0C\u4EE5\u4E0B\u662F\u4E00\u4E9B\u4E0E "),s("code",null,"axios"),a(" \u5BF9\u6BD4\u7684\u4F8B\u5B50\u3002")],-1),u=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// axios"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { createAxios } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'axios'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(` axios = createAxios({})

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"getUser"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  `),s("span",{class:"hljs-keyword"},"return"),a(" axios.get("),s("span",{class:"hljs-string"},"'/user'"),a(`, {
    `),s("span",{class:"hljs-attr"},"params"),a(`: {
      `),s("span",{class:"hljs-attr"},"id"),a(": "),s("span",{class:"hljs-number"},"1"),a(`,
    },
  })
}

`),s("span",{class:"hljs-comment"},"// \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Caxios\u5C06 JavaScript \u5BF9\u8C61\u5E8F\u5217\u5316\u4E3A JSON \u3002 \u8981\u4EE5 application/x-www-form-urlencoded \u683C\u5F0F\u53D1\u9001\u6570\u636E\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u9009\u9879\u4E4B\u4E00\u3002"),a(`
`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"postURLSearchParams"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
    `),s("span",{class:"hljs-keyword"},"const"),a(" params = "),s("span",{class:"hljs-keyword"},"new"),a(` URLSearchParams();
    params.append(`),s("span",{class:"hljs-string"},"'name'"),a(", "),s("span",{class:"hljs-string"},"'axios'"),a(`);
    `),s("span",{class:"hljs-keyword"},"return"),a("  axios.post("),s("span",{class:"hljs-string"},"'/foo'"),a(`, params);
    
    `),s("span",{class:"hljs-comment"},"// \u6216\u8005"),a(`
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

`)])],-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// axle"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/axle'"),a(`

`),s("span",{class:"hljs-comment"},"// \u521B\u5EFAaxle\u5B9E\u4F8B\uFF0Caxle\u62E5\u6709\u4E0Eaxios\u76F8\u540C\u7684\u80FD\u529B"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(" axle = createAxle("),s("span",{class:"hljs-comment"},[a("/** "),s("span",{class:"hljs-doctag"},"@see "),a("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),a(`)

`),s("span",{class:"hljs-comment"},"// axle\u7684\u4E00\u4E9B\u8F85\u52A9\u51FD\u6570"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(` axleHelpers = axle.helpers

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"getUser"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  `),s("span",{class:"hljs-keyword"},"return"),a(" axleHelpers.get("),s("span",{class:"hljs-string"},"'/user'"),a(", { "),s("span",{class:"hljs-attr"},"id"),a(": "),s("span",{class:"hljs-number"},"1"),a(` })
}

`),s("span",{class:"hljs-comment"},"// axle\u52A0\u5F3A\u4E86\u4EE5 application/x-www-form-urlencoded \u683C\u5F0F\u53D1\u9001\u6570\u636E\u7684\u65B9\u6CD5"),a(`
`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"postURLSearchParams"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
    `),s("span",{class:"hljs-keyword"},"return"),a(" axleHelpers.post("),s("span",{class:"hljs-string"},"'/foo'"),a(", { "),s("span",{class:"hljs-attr"},"name"),a(": "),s("span",{class:"hljs-string"},"'axle'"),a(`});
}

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"uploadFile"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  `),s("span",{class:"hljs-keyword"},"return"),a(" axleHelpers.postMultipart("),s("span",{class:"hljs-string"},"'/user'"),a(", { "),s("span",{class:"hljs-attr"},"name"),a(": "),s("span",{class:"hljs-string"},"'axle'"),a(", "),s("span",{class:"hljs-attr"},"file"),a(": "),s("span",{class:"hljs-keyword"},"new"),a(` File() })
}

axleHelpers.setHeader(`),s("span",{class:"hljs-string"},"'Authorization'"),a(", "),s("span",{class:"hljs-string"},"'your token'"),a(`)
`)])],-1);function w(f,g,_,k,y,v){const n=c("var-site-code-example");return o(),r("div",h,[i,s("div",j,[d,m,l(n,null,{default:e(()=>[u]),_:1}),l(n,null,{default:e(()=>[x]),_:1})])])}var D=t(p,[["render",w]]);export{D as default};
