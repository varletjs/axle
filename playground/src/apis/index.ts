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

export type Options<D, R = any, P = Record<string, any>> = Partial<Omit<UseAxleOptions<D, R, P>, 'data'>> &
  Pick<UseAxleOptions<D, R, P>, 'data'>

export function useGetUsers<D>(options: Options<D, Response<User[]>>) {
  return useAxle({
    url: '/user/list-user',
    runner: axle.get,
    ...options,
  })
}

export function useGetUser<D>(options: Options<D, Response<User>>) {
  return useAxle({
    url: '/user/get-user',
    runner: axle.get,
    ...options,
  })
}

export function useAddUser<D>(options: Options<D, Response<User>>) {
  return useAxle({
    url: '/user/add-user',
    runner: axle.post,
    ...options,
  })
}

export function useDeleteUser<D>(options: Options<D, Response<User>>) {
  return useAxle({
    url: '/user/delete-user',
    runner: axle.delete,
    ...options,
  })
}

export function useUpdateUser<D>(options: Options<D, Response<User>>) {
  return useAxle({
    url: '/user/update-user',
    runner: axle.put,
    ...options,
  })
}

export function usePatchUser<D>(options: Options<D, Response<User>>) {
  return useAxle({
    url: '/user/patch-user',
    runner: axle.patch,
    ...options,
  })
}

export function useDownloadFile<D>(options: Options<D, Blob>) {
  return useAxle({
    url: 'http://localhost:5173/logo.png',
    runner: axle.getBlob,
    ...options,
  })
}

export function useThrowError<D>(options: Options<D, Response<User>>) {
  return useAxle({
    url: '/user/throw-error',
    runner: axle.get,
    ...options,
  })
}
