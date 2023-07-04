import { useAxle, axle } from '@/request'
import { UseAxleOptions } from '@varlet/axle/use'

export type Response<T> = {
  data: T
  code: number
  message: string
}

export interface UserModel {
  id?: string
  name: string
}

export function useApiGetUsers<D>(options?: UseAxleOptions<D, Response<UserModel[]>>) {
  return useAxle({
    url: '/user/list-user',
    runner: axle.get,
    ...options,
  })
}

export function useApiGetUser<D>(options?: UseAxleOptions<D, Response<UserModel>>) {
  return useAxle({
    url: '/user/get-user',
    runner: axle.get,
    ...options,
  })
}

export function useApiAddUser<D>(options?: UseAxleOptions<D, Response<UserModel>>) {
  return useAxle({
    url: '/user/add-user',
    runner: axle.postJSON,
    ...options
  })
}

export function useApiDeleteUser<D>(options?: UseAxleOptions<D, Response<UserModel>>) {
  return useAxle({
    url: '/user/delete-user',
    runner: axle.delete,
    ...options
  })
}

export function useApiUpdateUser<D>(options?: UseAxleOptions<D, Response<UserModel>>) {
  return useAxle({
    url: '/user/update-user',
    runner: axle.putJSON,
    ...options
  })
}

export function useApiPatchUser<D>(options?: UseAxleOptions<D, Response<UserModel>>) {
  return useAxle({
    url: '/user/patch-user',
    runner: axle.patchJSON,
    ...options
  })
}
