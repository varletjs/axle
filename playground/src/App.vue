<script setup lang="ts">
import {
  useApiGetUser,
  useApiGetUsers,
  useApiAddUser,
  useApiDeleteUser,
  useApiUpdateUser,
  useApiPatchUser,
  useApiDownloadFile,
  User,
} from './apis'

const id = ref('1')
const deleteId = ref('1')

const [users, apiGetUsers, { loading: isUsersLoading }] = useApiGetUsers<User[]>([], { immediate: true })
const [user, apiGetUser, { loading: isUserLoading, abort }] = useApiGetUser<User>(
  {},
  {
    onSuccess(response) {
      if (response.code === 200) {
        Snackbar.success('Getting Success!')
      }
    },
  }
)
const [addedUser, apiAddUser] = useApiAddUser<User>(
  {},
  {
    onBefore() {
      Snackbar.loading('Adding!')
    },
    onSuccess(response) {
      if (response.code === 200) {
        Snackbar.success('Add User Success!')
      }
    },
  }
)
const [updatedUser, apiUpdateUser] = useApiUpdateUser<User>(
  {},
  {
    onBefore() {
      Snackbar.loading('Updating!')
    },
    onSuccess(response) {
      if (response.code === 200) {
        Snackbar.success('Update User Success!')
      }
    },
  }
)
const [patchedUser] = useApiPatchUser<User>(
  {},
  {
    onBefore() {
      Snackbar.loading('Patching!')
    },
    onSuccess(response) {
      if (response.code === 200) {
        Snackbar.success('Patch User Success!')
      }
    },
  }
)
const [deletedUser, apiDeleteUser] = useApiDeleteUser<User>(
  {},
  {
    onBefore() {
      Snackbar.loading('Deleting!')
    },
    onSuccess(response) {
      if (response.code === 200) {
        Snackbar.success('Delete User Success!')
      }
    },
  }
)
const [file, apiDownloadFile, { downloadProgress }] = useApiDownloadFile<Blob | null>(null, {
  onTransform: (response) => response,
})

const userRecord = reactive<User>({
  id: '',
  name: '',
})

async function handleSubmit() {
  const options = { params: user }
  userRecord.id ? await apiUpdateUser(options) : await apiAddUser(options)
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
      <var-button type="warning" @click="abort">Abort</var-button>
    </var-space>

    <var-cell>name: getUser</var-cell>
    <var-cell>loading: {{ isUserLoading }}</var-cell>
    <var-cell>data: {{ user ?? 'No Data' }}</var-cell>
  </var-space>

  <var-divider margin="30px 0" />

  <var-space direction="column">
    <var-space>
      <var-input type="number" variant="outlined" clearable placeholder="user.id" v-model="userRecord.id" />
      <var-input variant="outlined" placeholder="user.name" v-model="userRecord.name" />
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

  <var-divider margin="30px 0" />

  <var-space direction="column">
    <h3>Download Progress: {{ downloadProgress * 100 }} %</h3>
    <h3>File Size: {{ file?.size ?? 0 }}</h3>
    <var-button type="primary" @click="() => apiDownloadFile()">Download (PS: Please use slow 3G)</var-button>
  </var-space>
</template>
