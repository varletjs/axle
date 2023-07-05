import { useAxle, axle } from '@/request'
import { UseAxleOptions } from '@varlet/axle/use'

export type Response<T> = {
  data: T
  code: number
  message: string
}

export interface UserModel {
  id?: string
  name?: string
}

export type UseApiOptions<D, R = any, P = Record<string, any>> = Partial<Omit<UseAxleOptions<D, R, P>, 'data'>>

export function useApiGetUsers<D>(data: D, options: UseApiOptions<D, Response<UserModel[]>>) {
  return useAxle({
    data,
    url: '/user/list-user',
    runner: axle.get,
    ...options,
  })
}

export function useApiGetUser<D>(data: D, options?: UseApiOptions<D, Response<UserModel>>) {
  return useAxle({
    data,
    url: '/user/get-user',
    runner: axle.get,
    ...options,
  })
}

export function useApiAddUser<D>(data: D, options?: UseApiOptions<D, Response<UserModel>>) {
  return useAxle({
    data,
    url: '/user/add-user',
    runner: axle.postJSON,
    ...options,
  })
}

export function useApiDeleteUser<D>(data: D, options?: UseApiOptions<D, Response<UserModel>>) {
  return useAxle({
    data,
    url: '/user/delete-user',
    runner: axle.delete,
    ...options,
  })
}

export function useApiUpdateUser<D>(data: D, options?: UseApiOptions<D, Response<UserModel>>) {
  return useAxle({
    data,
    url: '/user/update-user',
    runner: axle.putJSON,
    ...options,
  })
}

export function useApiPatchUser<D>(data: D, options?: UseApiOptions<D, Response<UserModel>>) {
  return useAxle({
    data,
    url: '/user/patch-user',
    runner: axle.patchJSON,
    ...options,
  })
}
