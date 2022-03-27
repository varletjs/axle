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

```js
import { createAxle } from '@varlet/axle'

// 创建axle实例，axle拥有与axios相同的能力
const axle = createAxle(/** @see http://www.axios-js.com/zh-cn/docs/#axios-create-config **/)

// axle的一些辅助函数
const axleHelpers = axle.helpers
```