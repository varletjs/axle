# Vue Composition API

Axle provides the usage of Vue Composition API style, which encapsulates the `loading status`, `error status`, `upload and download progress` of the request, `return data`, `lifecycle`, etc., and inherits all the configuration of `axios`.

```html
<script setup>
  import { createAxle } from '@varlet/axle'
  import { createUseAxle } from '@varlet/axle/use'

  const axle = createAxle(/** @see https://axios-http.com **/)

  const useAxle = createUseAxle({
    axle,
    // Optional value: Default immediate of the useAxle, defaults true
    immediate: false,
    // Optional value: Default onTransform of the useAxle
    onTransform: (response) => response,
  })

  const id = ref('1')

  const [
    users,
    // request runner/invoker
    getUsers,
    // extra properties
    { loading, error, uploadProgress, downloadProgress, abort, resetValue },
  ] = useAxle({
    // Request initial value
    value: [],
    // Request method
    method: 'get',
    // Request url can be a getter function
    url: '/user',
    // Whether to send the request immediately, defaults true
    immediate: false,
    // Automatically reload when reactive parameters change
    // When set to true, watch all parameters (params, config, pathParams)
    // When set to an object, watch specific parameters:
    // - params: true - watch params changes
    // - pathParams: true - watch pathParams changes (for API definitions)
    // - config: true - watch config changes
    watch: true,
    // Whether the value needs to be reset before requesting, defaults false
    resetValue: true,
    // Whether to clone when resetting value, defaults false
    // When set to true, use JSON.parse(JSON.stringify(value)) cloned
    // When set to a function, the set function will be used as the clone function,
    // such as v => _.cloneDeep(v)
    cloneResetValue: true,
    // Request params, defaults {}, can be a getter function
    params: { current: 1, pageSize: 10 },
    // Axios config, see https://axios-http.com can be a getter function
    config: { headers: {} },
    // lifecycle
    onBefore(refs) {
      const { data, loading, error, uploadProgress, downloadProgress } = refs
      console.log(data.value, loading.value, error.value, uploadProgress.value, downloadProgress.value)
      // Do request before
    },
    onTransform(response, refs) {
      // Handle data transform, The transformed data will be the value of users.
      return response.data
    },
    onSuccess(response, refs) {
      // Do request success
    },
    onError(error, refs) {
      // Do request error
    },
    onAfter(refs) {
      // Do request after
    },
  })
</script>

<template>
  <span>{{ users }}</span>
  <span>{{ loading }}</span>
  <span>{{ error }}</span>
  <span>{{ uploadProgress }}</span>
  <span>{{ downloadProgress }}</span>
  <button @click="getUsers">Send Request</button>
  <button @click="abort">Abort Request</button>
</template>
```

## Runner Enhancement

The `runner` includes all the extra properties, so we can further simplify the work.

Before:

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

After:

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
