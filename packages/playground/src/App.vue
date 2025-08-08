<script setup lang="ts">
import { apiCreateUser, apiDeleteUser, apiGetMockUsers, apiGetUser, apiGetUsers, apiUpdateUser, User } from './apis'

const id = ref('1')
const deleteId = ref('1')
const runnable = ref(true)
const model = ref({
  id: '',
  name: '',
})

const [users, getUsers] = apiGetUsers.use({
  runnable: () => runnable.value,
})

const [userForWatchAll, getUserForWatchAll] = apiGetUser.use({
  immediate: false,
  pathParams: () => ({ id: id.value }),
  watch: true,
})

const [userForWatchPathParams, getUserForWatchPathParams] = apiGetUser.use({
  immediate: false,
  pathParams: () => ({ id: id.value }),
  watch: { pathParams: true },
})

const [usersForWatchParams, getUsersForWatchParams] = apiGetUsers.use({
  immediate: false,
  params: () => ({ id: id.value }),
  watch: { params: true },
})

const timeoutInput = ref('5000')
const requestConfig = computed(() => ({ timeout: parseInt(timeoutInput.value) || 5000 }))
const [userForWatchConfig, getUserForWatchConfig] = apiGetUser.use({
  immediate: false,
  pathParams: () => ({ id: id.value }),
  config: () => requestConfig.value,
  watch: { config: true },
})

const [mockUsers, getMockUsers] = apiGetMockUsers.use()

const [user, getUser] = apiGetUser.use<User>({
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

function toggleRunnable() {
  runnable.value = !runnable.value
}
</script>

<template>
  <div style="max-width: 800px">
    <var-space direction="column">
      <var-cell>name: getUsers</var-cell>
      <var-cell>loading: {{ getUsers.loading }}</var-cell>
      <var-cell>runnable: {{ runnable }}</var-cell>

      <var-cell>data: {{ users ?? 'No Data' }}</var-cell>
      <var-cell>
        <var-button type="primary" @click="getUsers()">Load</var-button>
        <var-button type="danger" @click="toggleRunnable()">Change Runnable</var-button>
      </var-cell>

      <var-cell>name: getMockUsers</var-cell>
      <var-cell>loading: {{ getMockUsers.loading.value }}</var-cell>
      <var-cell>data: {{ mockUsers ?? 'No Data' }}</var-cell>
      <var-cell>
        <var-button type="primary" @click="getMockUsers()">Load</var-button>
      </var-cell>

      <var-cell>name: getUser</var-cell>
      <var-cell>loading: {{ getUser.loading.value }}</var-cell>
      <var-cell>data: {{ user ?? 'No Data' }}</var-cell>
      <var-cell>
        <var-input v-model="id" variant="outlined" size="small" />
      </var-cell>
      <var-cell>
        <var-button type="primary" @click="getUser()">Load</var-button>
      </var-cell>

      <var-divider />

      <var-cell>name: getUserForWatchAll (watch: true)</var-cell>
      <var-cell>loading: {{ getUserForWatchAll.loading.value }}</var-cell>
      <var-cell>data: {{ userForWatchAll ?? 'No Data' }}</var-cell>

      <var-cell>name: getUserForWatchPathParams (watch: { pathParams: true })</var-cell>
      <var-cell>loading: {{ getUserForWatchPathParams.loading.value }}</var-cell>
      <var-cell>data: {{ userForWatchPathParams ?? 'No Data' }}</var-cell>

      <var-cell>name: getUsersForWatchParams (watch: { params: true })</var-cell>
      <var-cell>loading: {{ getUsersForWatchParams.loading.value }}</var-cell>
      <var-cell>data: {{ usersForWatchParams ?? 'No Data' }}</var-cell>
      <var-cell>
        <var-input v-model="id" placeholder="update id auto load" variant="outlined" size="small" />
      </var-cell>

      <var-cell>name: getUserForWatchConfig (watch: { config: true })</var-cell>
      <var-cell>loading: {{ getUserForWatchConfig.loading.value }}</var-cell>
      <var-cell>data: {{ userForWatchConfig ?? 'No Data' }}</var-cell>
      <var-cell>
        <var-input v-model="timeoutInput" placeholder="update timeout auto load" variant="outlined" size="small" />
      </var-cell>

      <var-cell>name: createUser & updateUser</var-cell>
      <var-cell>
        <var-input v-model="model.id" placeholder="id" size="small" variant="outlined" />
        <var-input v-model="model.name" placeholder="name" style="margin-top: 20px" size="small" variant="outlined" />
      </var-cell>
      <var-cell>
        <var-button style="margin-right: 10px" type="primary" auto-loading @click="handleCreate"> Create </var-button>
        <var-button type="primary" auto-loading @click="handleUpdate"> Update </var-button>
      </var-cell>

      <var-cell>name: deleteUser</var-cell>
      <var-cell>
        <var-input v-model="deleteId" placeholder="id" size="small" variant="outlined" />
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
