import { useAxle } from '@/request'
import { UseAxleOptions } from '@varlet/axle/use'

export type Response<T> = {
  data: T
  code: number
  message: string
}

export interface User {
  id?: string
  name?: string
}

export type Options<V, R = any, P = Record<string, any>> = Partial<UseAxleOptions<V, R, P>>

export function useGetUsers<V>(options: Options<V, Response<User[]>>) {
  return useAxle({
    url: '/user/list-user',
    method: 'get',
    ...options,
  })
}

export function useGetMockUsers<V>(options: Options<V, Response<User[]>>) {
  return useAxle({
    url: '/mock/list-user',
    method: 'get',
    ...options,
  })
}

export function useGetUser<V>(options: Options<V, Response<User>>) {
  return useAxle({
    url: '/user/get-user',
    method: 'get',
    ...options,
  })
}

export function useAddUser<V>(options: Options<V, Response<User>>) {
  return useAxle({
    url: '/user/add-user',
    method: 'post',
    ...options,
  })
}

export function useDeleteUser<V>(options: Options<V, Response<User>>) {
  return useAxle({
    url: '/user/delete-user',
    method: 'delete',
    ...options,
  })
}

export function useUpdateUser<V>(options: Options<V, Response<User>>) {
  return useAxle({
    url: '/user/update-user',
    method: 'put',
    ...options,
  })
}

export function usePatchUser<V>(options: Options<V, Response<User>>) {
  return useAxle({
    url: '/user/patch-user',
    method: 'patch',
    ...options,
  })
}

export function useDownloadFile<V>(options: Options<V, Response<Blob>>) {
  return useAxle({
    url: 'http://localhost:5173/logo.png',
    method: 'getBlob',
    ...options,
  })
}

export function useThrowError<V>(options: Options<V, Response<User>>) {
  return useAxle({
    url: '/user/throw-error',
    method: 'get',
    ...options,
  })
}

export function useAlwaysThrowError<V>(options: Options<V, Response<User>>) {
  return useAxle({
    url: '/user/always-throw-error',
    method: 'get',
    ...options,
  })
}
