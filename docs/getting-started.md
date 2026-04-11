# Getting Started

## Overview

`Axle` is a progressive request tool based on [axios](https://axios-http.com/). It does not destroy the original abilities of axios, and helps you process requests more easily.

### Installation

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

### Basic Usage

Axle normalizes the parameters of the request function, and expands more request functions for different interface requirements.

```js
import { createAxle } from '@varlet/axle'

const axle = createAxle(/** @see https://axios-http.com **/)

axle.get('/url', { current: 1, pageSize: 10 }, { headers: {} })
axle.post('/url', { name: 'Axle' }, { headers: {} })
```
