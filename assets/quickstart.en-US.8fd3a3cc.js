import{_ as t}from"./elevation.a8512ead.js";import{e as c,o,c as r,a as s,i as n,j as l,m as a}from"./vendor.bb785d67.js";const p={components:{}},h={class:"varlet-site-doc"},d=s("h1",null,"Quickstart",-1),i={class:"card"},m=s("h3",null,"Install",-1),_=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," Install with npm, yarn or pnpm"),a(`
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

`),s("span",{class:"hljs-comment"},"// create axle instance , axle has the same abilities as axios"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(" axle = createAxle("),s("span",{class:"hljs-comment"},[a("/** "),s("span",{class:"hljs-doctag"},"@see "),a("http://www.axios-js.com/zh-cn/docs/#axios-create-config **/")]),a(`)

`),s("span",{class:"hljs-comment"},"// Some helper functions of axle"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(` axleHelpers = axle.helpers
`)])],-1);function j(u,f,v,w,k,y){const e=c("var-site-code-example");return o(),r("div",h,[d,s("div",i,[m,n(e,null,{default:l(()=>[_]),_:1}),n(e,null,{default:l(()=>[x]),_:1})])])}var g=t(p,[["render",j]]);export{g as default};
