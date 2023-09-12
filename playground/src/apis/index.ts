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
    runner: 'get',
    ...options,
  })
}

export function useGetUser<V>(options: Options<V, Response<User>>) {
  return useAxle({
    url: '/user/get-user',
    runner: 'get',
    ...options,
  })
}

export function useAddUser<V>(options: Options<V, Response<User>>) {
  return useAxle({
    url: '/user/add-user',
    runner: 'post',
    ...options,
  })
}

export function useDeleteUser<V>(options: Options<V, Response<User>>) {
  return useAxle({
    url: '/user/delete-user',
    runner: 'delete',
    ...options,
  })
}

export function useUpdateUser<V>(options: Options<V, Response<User>>) {
  return useAxle({
    url: '/user/update-user',
    runner: 'put',
    ...options,
  })
}

export function usePatchUser<V>(options: Options<V, Response<User>>) {
  return useAxle({
    url: '/user/patch-user',
    runner: 'patch',
    ...options,
  })
}

export function useDownloadFile<V>(options: Options<V, Blob>) {
  return useAxle({
    url: 'http://localhost:5173/logo.png',
    runner: 'getBlob',
    ...options,
  })
}

export function useThrowError<V>(options: Options<V, Response<User>>) {
  return useAxle({
    url: '/user/throw-error',
    runner: 'get',
    ...options,
  })
}
