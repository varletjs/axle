# 快速开始

## 总览

`Axle` 是一个基于 [axios](https://axios-http.com/) 的渐进式请求工具。它不会破坏 `axios` 原有的能力，帮助您更轻松地处理请求。

### 安装

::: code-group

```shell [npm]
npm i @varlet/axle -S
```

```shell [yarn]
yarn add @varlet/axle
```

```shell [pnpm]
pnpm add @varlet/axle
```

:::

### 基本用法

`Axle` 归一化了请求函数的参数，并针对不同的业务需求，扩展了更多请求函数。

```js
import { createAxle } from '@varlet/axle'

const axle = createAxle(/** @see https://axios-http.com **/)

axle.get('/url', { current: 1, pageSize: 10 }, { headers: {} })
axle.post('/url', { name: 'Axle' }, { headers: {} })
```
