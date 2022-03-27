# Quickstart

### Install

```shell
# Install with npm, yarn or pnpm

# npm
npm i @varlet/axle -S

# yarn
yarn add @varlet/axle

# pnpm
pnpm add @varlet/axle
```

```js
import { createAxle } from '@varlet/axle'

// create axle instance , axle has the same abilities as axios
const axle = createAxle(/** @see http://www.axios-js.com/zh-cn/docs/#axios-create-config **/)

// Some helper functions of axle
const axleHelpers = axle.helpers
```