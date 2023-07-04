<script setup lang="ts">
import {
  useApiGetUser,
  useApiGetUsers,
  useApiAddUser,
  useApiDeleteUser,
  useApiUpdateUser,
  useApiPatchUser,
  UserModel,
} from './apis'

const id = ref('1')
const deleteId = ref('1')

const [users, apiGetUsers, isUsersLoading] = useApiGetUsers<UserModel[]>({
  immediate: true,
  onSuccess(response) {
    if (response.code !== 200) {
      Snackbar(response.message)
      return
    }

    return response.data
  },
})
// const [user, apiGetUser, isUserLoading] = useApiGetUser<UserModel>({
//   onSuccess(response) {
//     if (response.code !== 200) {
//       Snackbar(response.message)
//       return
//     }

//     return response.data
//   },
// })
// const [addedUser, apiAddUser] = useApiAddUser<UserModel>({
//   onBefore() {
//     Snackbar.loading('Adding!')
//   },
//   onSuccess(response) {
//     if (response.code !== 200) {
//       Snackbar(response.message)
//       return
//     }

//     Snackbar.success('Add User Success!')
//     return response.data
//   },
// })
// const [updatedUser, apiUpdateUser] = useApiUpdateUser<UserModel>({
//   onBefore() {
//     Snackbar.loading('Updating!')
//   },
//   onSuccess(response) {
//     if (response.code !== 200) {
//       Snackbar(response.message)
//       return
//     }

//     Snackbar.success('Update User Success!')
//     return response.data
//   },
// })
// const [patchedUser] = useApiPatchUser<UserModel>({
//   onBefore() {
//     Snackbar.loading('Patching!')
//   },
//   onSuccess(response) {
//     if (response.code !== 200) {
//       Snackbar(response.message)
//       return
//     }

//     Snackbar.success('Patch User Success!')
//     return response.data
//   },
// })
// const [deletedUser, apiDeleteUser] = useApiDeleteUser<UserModel>({
//   onBefore() {
//     Snackbar.loading('Deleting!')
//   },
//   onSuccess(response) {
//     if (response.code !== 200) {
//       Snackbar(response.message)
//       return
//     }

//     Snackbar.success('Delete User Success!')
//     return response.data
//   },
// })

const userModel = reactive<UserModel>({
  id: '',
  name: '',
})

async function handleSubmit() {
  const options = { params: userModel }
  userModel.id ? await apiUpdateUser(options) : await apiAddUser(options)
}

async function handleDelete() {
  await apiDeleteUser({ params: { id: deleteId.value } })
}

watch(
  () => [addedUser.value, updatedUser.value, deletedUser.value, patchedUser.value],
  () => apiGetUsers()
)
</script>

<template>
  <var-space direction="column">
    <var-cell>name: getUsers</var-cell>
    <var-cell>loading: {{ isUsersLoading }}</var-cell>
    <var-cell>data: {{ users ?? 'No Data' }}</var-cell>
  </var-space>

  <var-divider margin="30px 0" />

  <var-space direction="column">
    <var-space align="center">
      <var-input type="number" variant="outlined" v-model="id" />
      <var-button type="primary" @click="apiGetUser({ params: { id } })">Search</var-button>
    </var-space>

    <var-cell>name: getUser</var-cell>
    <var-cell>loading: {{ isUserLoading }}</var-cell>
    <var-cell>data: {{ user ?? 'No Data' }}</var-cell>
  </var-space>

  <var-divider margin="30px 0" />

  <var-space direction="column">
    <var-space>
      <var-input type="number" variant="outlined" clearable placeholder="user.id" v-model="userModel.id" />
      <var-input variant="outlined" placeholder="user.name" v-model="userModel.name" />
    </var-space>
    <var-button type="primary" @click="handleSubmit">Submit</var-button>
  </var-space>

  <var-divider margin="30px 0" />

  <var-space direction="column">
    <var-space>
      <var-input type="number" variant="outlined" clearable placeholder="user.id" v-model="deleteId" />
    </var-space>
    <var-button type="danger" @click="handleDelete">Delete</var-button>
  </var-space>
</template>
