### Intro

Progressive request tool based on axios.

### Quickstart

#### Install

```shell
# Install with npm, yarn or pnpm

# npm
npm i @varlet/axle -S

#yarn
yarn add @varlet/axle

#pnpm
pnpm add @varlet/axle
```

#### Request Call

```js
import { createAxle } from '@varlet/axle'

// create axle instance
const axle = createAxle(/** @see https://axios-http.com **/)

// The built-in axios of the axle, the usage is exactly the same as that of axios, and shares the configuration with the axle.
const { axios } = axle

axios.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

const response = await axle.get('/url', { current: 1, pageSize: 10 }, { headers: {} })
const response = await axle.post('/url', { name: 'Axle' }, { headers: {} })
const response = await axle.getBlob('/url')
const response = await axle.postJSON('/url', { name: 'Axle' }, { headers: {} })
const response = await axle.postMultipart('/url', { name: 'Axle', file: new File() })
```

### Vue Composition Api

```html
<script setup>
import { createAxle } from '@varlet/axle'
import { createUseAxle } from '@varlet/axle/use'

const axle = createAxle(/** @see https://axios-http.com **/)
const useAxle = createUseAxle(/** Unstable **/)

const [users, getUsers, { loading, error }] = useAxle({
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

### Repo Status

WIP and Trying

