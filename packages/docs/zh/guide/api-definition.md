# API 定义增强

从 `0.9.0` 开始支持 `createApi`，以增强 API 定义能力。

## 定义 API

```ts
import { createAxle } from '@varlet/axle'
import { createApi } from '@varlet/axle/api'
import { createUseAxle } from '@varlet/axle/use'

const axle = createAxle({
  baseURL: '/api',
})

const useAxle = createUseAxle({
  axle,
})

const api = createApi(axle, useAxle)

export const apiGetUsers = api<Response<User[]>>('/user', 'get')

export const apiGetUser = api<Response<User>>('/user/:id', 'get')

export const apiCreateUser = api<Response<User>, CreateUser>('/user', 'post')

export const apiUpdateUser = api<Response<User>, UpdateUser>('/user/:id', 'put')

export const apiDeleteUser = api<Response<User>>('/user/:id', 'delete')

export type Response<T> = {
  data: T
  code: number
  message: string
  success: boolean
}

export interface User {
  id: string
  name: string
}

export interface CreateUser {
  name: string
}

export interface UpdateUser {
  name: string
}
```

## 调用 API

```ts
const route = useRoute()

const [users, getUsers] = apiGetUsers.use<Response<User[]>>()
/** 和 useAxle 一致并且扩展了 pathParams **/

const [user, getUser] = apiGetUser.use<Response<User>>({
  pathParams: () => ({ id: route.params.id }),
})

async function handleCreate(params: CreateUser) {
  const { success } = await apiCreateUser.load(params)

  if (success) {
    getUsers()
  }
}

async function handleUpdate(params: UpdateUser, id: string) {
  const { success } = await apiUpdateUser.load(params, { id })

  if (success) {
    getUsers()
  }
}

async function handleDelete(id: string) {
  const { success } = await apiDeleteUser.load({}, { id })

  if (success) {
    getUsers()
  }
}
```
