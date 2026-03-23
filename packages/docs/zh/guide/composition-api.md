# Vue 组合式 API

Axle 提供了 Vue Composition API 风格的用法，封装了请求的 `加载状态`、`错误状态`、`请求的上下行进度`、`返回数据`、`生命周期` 等等，并继承了 `axios` 的所有配置。

```html
<script setup>
  import { createAxle } from '@varlet/axle'
  import { createUseAxle } from '@varlet/axle/use'

  const axle = createAxle(/** @see https://axios-http.com **/)

  const useAxle = createUseAxle({
    axle,
    // 可选项: useAxle 的默认 immediate, 默认值: true
    immediate: false,
    // 可选项: useAxle 的默认 onTransform
    onTransform: (response) => response,
  })

  const id = ref('1')

  const [
    users,
    // 请求触发器
    getUsers,
    // 附加属性
    { loading, error, uploadProgress, downloadProgress, abort, resetValue },
  ] = useAxle({
    // 请求初始化数据
    value: [],
    // 请求方法
    method: 'get',
    // 请求地址, 可以是 getter 函数
    url: '/user',
    // 是否立即发送请求, 默认值: true
    immediate: false,
    // 监听响应式参数变化时自动重新加载
    // 设置为 true 时，监听所有参数变化 (params, config, pathParams)
    // 设置为对象时，监听指定参数变化：
    // - params: true - 监听 params 参数变化
    // - pathParams: true - 监听 pathParams 变化（用于 API 定义）
    // - config: true - 监听 config 配置变化
    watch: true,
    // 请求前是否需要重置 value, 默认值: false
    resetValue: true,
    // 重置 value 是否对 value 进行拷贝
    // 设置为 true 时, 使用 JSON.parse(JSON.stringify(value)) 进行拷贝
    // 设置为一个函数时, 该函数将作为拷贝函数对 value 进行拷贝，如 v => _.cloneDeep(v)
    cloneResetValue: true,
    // 请求参数, 默认值: {}, 可以是 getter 函数
    params: { current: 1, pageSize: 10 },
    // Axios 配置, see https://axios-http.com, 可以是 getter 函数
    config: { headers: {} },
    // 生命周期
    onBefore(refs) {
      const { data, loading, error, uploadProgress, downloadProgress } = refs
      console.log(data.value, loading.value, error.value, uploadProgress.value, downloadProgress.value)
      // 处理请求前逻辑
    },
    onTransform(response, refs) {
      // 处理数据转换，转换后的数据将成为 users 的值。
      return response.data
    },
    onSuccess(response, refs) {
      // 处理请求成功逻辑
    },
    onError(error, refs) {
      // 处理请求错误逻辑
    },
    onAfter(refs) {
      // 处理请求结束逻辑，无论成功失败都会触发。
    },
  })
</script>

<template>
  <span>{{ users }}</span>
  <span>{{ loading }}</span>
  <span>{{ error }}</span>
  <span>{{ uploadProgress }}</span>
  <span>{{ downloadProgress }}</span>
  <button @click="getUsers">发送请求</button>
  <button @click="abort">中断请求</button>
</template>
```

## 请求触发器增强

请求触发器包含附加属性中的全部属性。

增强前：

```html
<script setup>
  const [users, getUsers, { loading: isUsersLoading }] = useAxle({
    method: 'get',
    url: '/user',
  })

  const [posts, getPosts, { loading: isPostsLoading }] = useAxle({
    method: 'get',
    url: '/post',
  })
</script>

<template>
  <span>{{ isUsersLoading ? 'loading...' : users }}</span>
  <span>{{ isPostsLoading ? 'loading...' : posts }}</span>
  <button @click="getUsers">Send Request</button>
  <button @click="getPosts">Send Request</button>
</template>
```

增强后：

```html
<script setup>
  const [users, getUsers] = useAxle({
    method: 'get',
    url: '/user',
  })

  const [posts, getPosts] = useAxle({
    method: 'get',
    url: '/post',
  })
</script>

<template>
  <span>{{ getUsers.loading.value ? 'loading...' : users }}</span>
  <span>{{ getPosts.loading.value ? 'loading...' : posts }}</span>
  <button @click="getUsers">Send Request</button>
  <button @click="getPosts">Send Request</button>
</template>
```
