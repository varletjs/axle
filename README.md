<div>
  <a href="https://github.com/varletjs/axle">
    <img src="https://github.com/varletjs/axle/blob/main/public/logo.svg" width="400">
  </a>
  <h2>A tool library based on axios to simplify the development process</h2>
</div>

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

#### Request call

```js
import { createAxle } from '@varlet/axle'

// create axle instance
const axle = createAxle(/** @see https://axios-http.com **/)

// The built-in axios of the axle, the usage is exactly the same as that of axios, and shares the configuration with the axle.
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

### Repo Status

WIP and Trying

