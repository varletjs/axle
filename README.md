<div align="center">
  <a href="https://github.com/varletjs/axle">
    <img src="https://raw.githubusercontent.com/varletjs/axle/main/packages/docs/public/logo.svg" width="150">
  </a>
  <h1>AXLE</h1>
  <p>Progressive request tool based on axios.</p>
  <p>
    <a href="https://github.com/varletjs/axle">Documentation</a> |
    <a href="https://github.com/varletjs/axle/blob/main/README.zh-CN.md">中文介绍</a>
  </p>
  <p>
    <img src="https://img.shields.io/npm/v/@varlet/axle?style=flat-square" alt="version">
    <img src="https://img.shields.io/github/stars/varletjs/axle" alt="stars">
    <img src="https://img.shields.io/badge/vue-v3.2.0%2B-%23407fbc" alt="vue">
    <img src="https://img.shields.io/npm/l/@varlet/axle.svg" alt="license">
  </p>
</div>

---

### Intro

Progressive request tool based on [axios](https://axios-http.com/). It does not destroy the original abilities of axios, and helps you process requests more easily.

### Features

- 🚀 &nbsp; Normalized request functions with expanded methods for different response types
- 💪 &nbsp; Vue Composition API support with loading status, error status, upload/download progress, lifecycle, and more
- 🛠️ &nbsp; Built-in practical request/response interceptors
- 💡 &nbsp; Enhanced API definition with `createApi`
- 🌍 &nbsp; Full compatibility with axios configuration

### Install

```shell
# npm
npm i @varlet/axle -S

# yarn
yarn add @varlet/axle

# pnpm
pnpm add @varlet/axle
```

### Basic Usage

```js
import { createAxle } from '@varlet/axle'

const axle = createAxle(/** @see https://axios-http.com **/)

axle.get('/url', { current: 1, pageSize: 10 }, { headers: {} })
axle.post('/url', { name: 'Axle' }, { headers: {} })
```

### Documentation

For full documentation, please visit the [documentation site](https://github.com/varletjs/axle).
