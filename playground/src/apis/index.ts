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

export type UseApiOptions<D = any, R = any, P = Record<string, any>> = Partial<UseAxleOptions<D, R, P>>

export function useApiGetUsers<D>(options?: UseApiOptions<D, Response<UserModel[]>>) {
  return useAxle({
    url: '/user/list-user',
    runner: axle.get,
    data: [],
    ...options,
  })
}

export function useApiGetUser<D>(options?: UseApiOptions<D, Response<UserModel>>) {
  return useAxle({
    url: '/user/get-user',
    runner: axle.get,
    data: null,
    ...options,
  })
}

export function useApiAddUser<D>(options?: UseApiOptions<D, Response<UserModel>>) {
  return useAxle({
    url: '/user/add-user',
    runner: axle.postJSON,
    data: null,
    ...options,
  })
}

export function useApiDeleteUser<D>(options?: UseApiOptions<D, Response<UserModel>>) {
  return useAxle({
    url: '/user/delete-user',
    runner: axle.delete,
    data: null,
    ...options,
  })
}

export function useApiUpdateUser<D>(options?: UseApiOptions<D, Response<UserModel>>) {
  return useAxle({
    url: '/user/update-user',
    runner: axle.putJSON,
    data: null,
    ...options,
  })
}

export function useApiPatchUser<D>(options?: UseApiOptions<D, Response<UserModel>>) {
  return useAxle({
    url: '/user/patch-user',
    runner: axle.patchJSON,
    data: null,
    ...options,
  })
}
