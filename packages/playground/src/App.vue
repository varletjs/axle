<script setup lang="ts">
import { apiGetUsers, apiGetMockUsers, apiGetUser, apiCreateUser, apiDeleteUser, apiUpdateUser, User } from './apis'

const id = ref('1')
const deleteId = ref('1')
const model = ref({
  id: '',
  name: '',
})

const [users, getUsers, { loading: isUsersLoading }] = apiGetUsers.use()

const [mockUsers, getMockUsers, { loading: isMockUsersLoading }] = apiGetMockUsers.use()

const [user, getUser, { loading: isUserLoading }] = apiGetUser.use<User>({
  pathParams: () => ({ id: id.value }),
})

async function handleCreate() {
  await apiCreateUser.load(model.value)
  await getUsers()
}

async function handleUpdate() {
  await apiUpdateUser.load(model.value, { id: model.value.id })
  await getUsers()
}

async function handleDelete() {
  await apiDeleteUser.load({}, { id: deleteId.value })
  await getUsers()
}
</script>

<template>
  <div style="max-width: 800px">
    <var-space direction="column">
      <var-cell>name: getUsers</var-cell>
      <var-cell>loading: {{ isUsersLoading }}</var-cell>
      <var-cell>data: {{ users ?? 'No Data' }}</var-cell>
      <var-cell>
        <var-button type="primary" @click="getUsers()">Load</var-button>
      </var-cell>

      <var-cell>name: getMockUsers</var-cell>
      <var-cell>loading: {{ isMockUsersLoading }}</var-cell>
      <var-cell>data: {{ mockUsers ?? 'No Data' }}</var-cell>
      <var-cell>
        <var-button type="primary" @click="getMockUsers()">Load</var-button>
      </var-cell>

      <var-cell>name: getUser</var-cell>
      <var-cell>loading: {{ isUserLoading }}</var-cell>
      <var-cell>data: {{ user ?? 'No Data' }}</var-cell>
      <var-cell>
        <var-input variant="outlined" size="small" v-model="id" />
      </var-cell>
      <var-cell>
        <var-button type="primary" @click="getUser()">Load</var-button>
      </var-cell>

      <var-cell>name: createUser & updateUser</var-cell>
      <var-cell>
        <var-input placeholder="id" size="small" variant="outlined" v-model="model.id" />
        <var-input placeholder="name" style="margin-top: 20px" size="small" variant="outlined" v-model="model.name" />
      </var-cell>
      <var-cell>
        <var-button style="margin-right: 10px" type="primary" auto-loading @click="handleCreate"> Create </var-button>
        <var-button type="primary" auto-loading @click="handleUpdate"> Update </var-button>
      </var-cell>

      <var-cell>name: deleteUser</var-cell>
      <var-cell>
        <var-input placeholder="id" size="small" variant="outlined" v-model="deleteId" />
      </var-cell>
      <var-cell>
        <var-button style="margin-right: 20px" type="danger" auto-loading @click="handleDelete"> Delete </var-button>
      </var-cell>
    </var-space>
  </div>
</template>

<style>
body {
  color: var(--color-text);
  background-color: var(--color-body);
}
</style>
