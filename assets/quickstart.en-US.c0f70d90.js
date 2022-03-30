import{_ as t}from"./elevation.29571e53.js";import{e as c,o,c as r,a as s,i as l,j as n,m as e}from"./vendor.bb785d67.js";const h={components:{}},p={class:"varlet-site-doc"},i=s("h1",null,"Quickstart",-1),d={class:"card"},m=s("h3",null,"Install",-1),_=s("pre",{class:"hljs"},[s("code",null,[s("link",{class:"hljs-style",rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," Install with npm, yarn or pnpm"),e(`
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," npm"),e(`
npm i @varlet/axle -S
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),e(`
yarn add @varlet/axle
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),e(`
pnpm add @varlet/axle
`)])],-1),x=s("pre",{class:"hljs"},[s("code",null,[s("link",{class:"hljs-style",rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),e(" { createAxle } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/axle'"),e(`

`),s("span",{class:"hljs-comment"},"// create axle instance , axle has the same abilities as axios"),e(`
`),s("span",{class:"hljs-keyword"},"const"),e(" axle = createAxle("),s("span",{class:"hljs-comment"},[e("/** "),s("span",{class:"hljs-doctag"},"@see "),e("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),e(`)

`),s("span",{class:"hljs-comment"},"// Some helper functions of axle"),e(`
`),s("span",{class:"hljs-keyword"},"const"),e(` axleHelpers = axle.helpers
`)])],-1);function j(f,u,v,y,k,w){const a=c("var-site-code-example");return o(),r("div",p,[i,s("div",d,[m,l(a,null,{default:n(()=>[_]),_:1}),l(a,null,{default:n(()=>[x]),_:1})])])}var $=t(h,[["render",j]]);export{$ as default};
