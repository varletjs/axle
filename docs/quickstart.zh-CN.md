# 快速开始

### 安装

```shell
# Install with npm, yarn or pnpm

# npm
npm i @varlet/axle -S

# yarn
yarn add @varlet/axle

# pnpm
pnpm add @varlet/axle
```

### 请求调用

```js
import { createAxle } from '@varlet/axle'

// 创建 axle 实例
const axle = createAxle(/** @see https://axios-http.com **/)

// axle 内置的 axios, 用法与 axios 完全一致，并与 axle 共享配置。
const { axios } = axle

const response = await axle.get('/user', { current: 1, pageSize: 10 }, { headers: {} })
const response = await axle.post('/user', { name: 'Axle' }, { headers: {} })
```

### Vue Composition Api

```html
<script setup>
import { createAxle, createUseAxle } from '@varlet/axle'

const axle = createAxle()
const useAxle = createUseAxle()

// default immediate request
const [users, getUsers, loading, { error }] = useAxle({
  runner: axle.get,
  url: '/user',
  params: { current: 1, pageSize: 10 },
  config: { headers: {} }
})
</script>

<template>
  <span>{{ users }}</span>
  <span>{{ loading }}</span>
  <span>{{ error }}</span>
</template>
```