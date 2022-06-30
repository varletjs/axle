import{_ as t,s as c,f as o,h as p,l as s,t as n,P as l,M as a}from"./elevation.944bba77.js";const r={components:{}},h={class:"varlet-site-doc"},d=s("h1",null,"\u5FEB\u901F\u5F00\u59CB",-1),_={class:"card"},m=s("h3",null,"\u5B89\u88C5",-1),i=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," Install with npm, yarn or pnpm"),a(`
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," npm"),a(`
npm i @varlet/axle -S
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),a(`
yarn add @varlet/axle
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),a(`
pnpm add @varlet/axle
`)])],-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/axle'"),a(`

`),s("span",{class:"hljs-comment"},"// \u521B\u5EFAaxle\u5B9E\u4F8B\uFF0Caxle\u62E5\u6709\u4E0Eaxios\u76F8\u540C\u7684\u80FD\u529B"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(" axle = createAxle("),s("span",{class:"hljs-comment"},[a("/** "),s("span",{class:"hljs-doctag"},"@see "),a("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),a(`)

`),s("span",{class:"hljs-comment"},"// axle\u7684\u4E00\u4E9B\u8F85\u52A9\u51FD\u6570"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(` axleHelpers = axle.helpers
`)])],-1);function j(u,f,v,w,k,y){const e=c("var-site-code-example");return o(),p("div",h,[d,s("div",_,[m,n(e,null,{default:l(()=>[i]),_:1}),n(e,null,{default:l(()=>[x]),_:1})])])}var N=t(r,[["render",j]]);export{N as default};
