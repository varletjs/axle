import { useAxle, axle } from '@/request'
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

export type Options<D, R = any, P = Record<string, any>> = Partial<Omit<UseAxleOptions<D, R, P>, 'data'>>

export function useGetUsers<D>(data: D, options?: Options<D, Response<User[]>>) {
  return useAxle({
    data,
    url: '/user/list-user',
    runner: axle.get,
    ...options,
  })
}

export function useGetUser<D>(data: D, options?: Options<D, Response<User>>) {
  return useAxle({
    data,
    url: '/user/get-user',
    runner: axle.get,
    ...options,
  })
}

export function useAddUser<D>(data: D, options?: Options<D, Response<User>>) {
  return useAxle({
    data,
    url: '/user/add-user',
    runner: axle.postJSON,
    ...options,
  })
}

export function useDeleteUser<D>(data: D, options?: Options<D, Response<User>>) {
  return useAxle({
    data,
    url: '/user/delete-user',
    runner: axle.delete,
    ...options,
  })
}

export function useUpdateUser<D>(data: D, options?: Options<D, Response<User>>) {
  return useAxle({
    data,
    url: '/user/update-user',
    runner: axle.putJSON,
    ...options,
  })
}

export function usePatchUser<D>(data: D, options?: Options<D, Response<User>>) {
  return useAxle({
    data,
    url: '/user/patch-user',
    runner: axle.patchJSON,
    ...options,
  })
}

export function useDownloadFile<D>(data: D, options?: Options<D, Blob>) {
  return useAxle({
    data,
    url: 'http://localhost:5173/logo.png',
    runner: axle.getBlob,
    ...options,
  })
}

export function useThrowError<D>(data: D, options?: Options<D, Response<User>>) {
  return useAxle({
    data,
    url: '/user/throw-error',
    runner: axle.get,
    ...options,
  })
}