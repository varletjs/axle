<div align="center">
  <a href="https://axle.varletjs.org">
    <img src="https://raw.githubusercontent.com/varletjs/axle/main/packages/docs/public/logo.svg" width="150">
  </a>
  <h1>AXLE</h1>
  <p>基于 axios 的渐进式请求工具。</p>
  <p>
    <a href="https://axle.varletjs.org">文档</a> |
    <a href="https://github.com/varletjs/axle/blob/main/README.md">ENGLISH README</a>
  </p>
  <p>
    <img src="https://img.shields.io/npm/v/@varlet/axle?style=flat-square" alt="version">
    <img src="https://img.shields.io/github/stars/varletjs/axle" alt="stars">
    <img src="https://img.shields.io/badge/vue-v3.2.0%2B-%23407fbc" alt="vue">
    <img src="https://img.shields.io/npm/l/@varlet/axle.svg" alt="license">
  </p>
</div>

---

### 介绍

基于 [axios](https://axios-http.com/) 的渐进式请求工具。它不会破坏 `axios` 原有的能力，帮助您更轻松地处理请求。

### 特性

- 🚀 &nbsp; 归一化请求函数参数，并扩展了不同响应类型的请求方法
- 💪 &nbsp; 支持 Vue 组合式 API，封装了加载状态、错误状态、上传下载进度、生命周期等
- 🛠️ &nbsp; 内置实用的请求/响应拦截器
- 💡 &nbsp; 通过 `createApi` 增强 API 定义能力
- 🌍 &nbsp; 完全兼容 axios 配置

### 安装

```shell
# npm
npm i @varlet/axle -S

# yarn
yarn add @varlet/axle

# pnpm
pnpm add @varlet/axle
```

### 基本用法

```js
import { createAxle } from '@varlet/axle'

const axle = createAxle(/** @see https://axios-http.com **/)

axle.get('/url', { current: 1, pageSize: 10 }, { headers: {} })
axle.post('/url', { name: 'Axle' }, { headers: {} })
```

### 文档

完整文档请访问[文档站](https://axle.varletjs.org)。
