import { useAxle, axle } from '@/request'

export const apiUser = '/api/user'

export function useApiGetUsers() {
  return useAxle({
    url: apiUser,
    runner: axle.get,
  })
}

export function useApiGetUser(id) {
  return useAxle({
    url: `${apiUser}/${id}`,
    runner: axle.get,
  })
}

export function useApiAddUser() {
  return useAxle({
    url: apiUser,
    runner: axle.postJSON,
    immediate: false,
  })
}

export function useApiDeleteUser() {
  return useAxle({
    runner: axle.delete,
    immediate: false,
  })
}

export function useApiUpdateUser() {
  return useAxle({
    runner: axle.putJSON,
    immediate: false,
  })
}
