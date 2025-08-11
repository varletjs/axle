import { api } from '@/request'

export type Response<T> = {
  data: T
  code: number
  message: string
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

export const apiGetUsers = api<Response<User[]>>('/user', 'get')

export const apiGetUser = api<Response<User>>('/user/:id', 'get')

export const apiCreateUser = api<Response<User>, CreateUser>('/user', 'post')

export const apiUpdateUser = api<Response<User>, UpdateUser>('/user/:id', 'put')

export const apiDeleteUser = api<Response<User>>('/user/:id', 'delete')

export const apiGetMockUsers = api<Response<User[]>>('/mock/user', 'get')
