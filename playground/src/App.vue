<script setup lang="ts">
import { useApiGetUser, useApiGetUsers, useApiAddUser, useApiDeleteUser, useApiUpdateUser, useApiPatchUser, apiUser } from './apis'

const id = ref('1')
const deleteId = ref('1')

const [users, apiGetUsers, usersLoading] = useApiGetUsers()
const [user, apiGetUser, userLoading] = useApiGetUser(id.value)
const [addedUser, apiAddUser] = useApiAddUser()
const [updatedUser, apiUpdateUser] = useApiUpdateUser()
const [patchedUser, apiPatchUser] = useApiPatchUser()
const [deletedUser, apiDeleteUser] = useApiDeleteUser()

const userModel = reactive({
  id: undefined,
  name: '',
})

async function handleSubmit() {
  Snackbar.loading('Submitting!')

  const [{ code }] = userModel.id
    ? await apiUpdateUser({ url: apiUser(userModel.id), params: userModel })
    : await apiAddUser({ params: userModel })

  if (code === 200) {
    Snackbar.success('Submitting Success!')
  }
}

async function handleDelete() {
  Snackbar.loading('Deleting!')

  const [{ code }] = await apiDeleteUser({ url: apiUser(deleteId.value) })

  if (code === 200) {
    Snackbar.success('Deleting Success!')
  }
}

watch(
  () => [addedUser.value, updatedUser.value, deletedUser.value, patchedUser.value],
  () => apiGetUsers()
)
</script>

<template>
  <var-space direction="column">
    <var-cell>name: getUsers</var-cell>
    <var-cell>loading: {{ usersLoading }}</var-cell>
    <var-cell>data: {{ users ?? 'No Data' }}</var-cell>
  </var-space>

  <var-divider margin="30px 0" />

  <var-space direction="column">
    <var-space align="center">
      <var-input type="number" variant="outlined" v-model="id" />
      <var-button type="primary" @click="apiGetUser({ url: apiUser(id) })">Search</var-button>
    </var-space>

    <var-cell>name: getUser</var-cell>
    <var-cell>loading: {{ userLoading }}</var-cell>
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
