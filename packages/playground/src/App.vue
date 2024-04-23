<script setup lang="ts">
import { useHasLoading, useValues, useAverageProgress } from '@varlet/axle/use'
import { download, withResponse } from '@varlet/axle'
import {
  useGetUser,
  useGetUsers,
  useAddUser,
  useDeleteUser,
  useUpdateUser,
  usePatchUser,
  useDownloadFile,
  useThrowError,
  useGetMockUsers,
  User,
  useAlwaysThrowError,
  Response,
} from './apis'
import { axle } from './request'

const id = ref('1')
const deleteId = ref('1')

const [users, getUsers, { loading: isUsersLoading }] = useGetUsers<User[]>({ immediate: true })

const [mockUsers, , { loading: isMockUsersLoading }] = useGetMockUsers<User[]>({ immediate: true })

const [user, getUser, { loading: isUserLoading, abort, resetValue }] = useGetUser<User>({
  value: { id: 'test' },
  resetValue: true,
  cloneResetValue: true,
  onSuccess(response) {
    if (response.code === 200) {
      Snackbar.success('Getting Success!')
    }
  },
})

const [addedUser, addUser] = useAddUser<User>({
  onBefore() {
    Snackbar.loading('Adding!')
  },
  onSuccess(response) {
    if (response.code === 200) {
      Snackbar.success('Add User Success!')
    }
  },
})

const [updatedUser, updateUser] = useUpdateUser<User>({
  onBefore() {
    Snackbar.loading('Updating!')
  },
  onSuccess(response) {
    if (response.code === 200) {
      Snackbar.success('Update User Success!')
    }
  },
})

const [patchedUser] = usePatchUser<User>({
  onBefore() {
    Snackbar.loading('Patching!')
  },
  onSuccess(response) {
    if (response.code === 200) {
      Snackbar.success('Patch User Success!')
    }
  },
})

const [deletedUser, deleteUser] = useDeleteUser<User>({
  onBefore() {
    Snackbar.loading('Deleting!')
  },
  onSuccess(response) {
    if (response.code === 200) {
      Snackbar.success('Delete User Success!')
    }
  },
})

const [file, downloadBlob, { downloadProgress }] = useDownloadFile<Blob | null>({})

const [errorUser, throwError, { loading: isThrowErrorLoading }] = useThrowError<User>({
  resetValue: true,
})

const [, alwaysThrowError, { loading: isAlwaysThrowErrorLoading }] = useAlwaysThrowError({})

// parallel
const [usersOne, getUsersOne, { loading: isUsersLoadingOne, downloadProgress: userDownloadProgressOne }] = useGetUsers<
  User[]
>({
  immediate: true,
})

const [usersTwo, getUsersTwo, { loading: isUsersLoadingTwo, downloadProgress: userDownloadProgressTwo }] = useGetUsers<
  User[]
>({
  immediate: true,
})

const usersAverageDownloadProgress = useAverageProgress(userDownloadProgressOne, userDownloadProgressTwo)
const hasUsersLoading = useHasLoading(isUsersLoadingOne, isUsersLoadingTwo)
const allUsers = useValues(usersOne, usersTwo)

const userRecord = reactive<User>({
  id: '',
  name: '',
})

watch(
  () => [addedUser.value, updatedUser.value, deletedUser.value, patchedUser.value],
  () => getUsers()
)

function runAll() {
  allUsers.value = [[], []]
  Promise.all([getUsersOne(), getUsersTwo()])
}

async function handleSubmit() {
  const options = { params: userRecord }
  userRecord.id ? await updateUser(options) : await addUser(options)
}

async function handleDelete() {
  await deleteUser({ params: { id: deleteId.value } })
}

async function downloadFile() {
  const { code, data } = await downloadBlob()
  if (code === 200) {
    download(data, 'logo.png')
  }
}

async function handleWithResponse() {
  const { response, errorResponse } = await withResponse(axle.get<Response<any>>('/not-found-api'))
  console.log(response, errorResponse)
}
</script>

<template>
  <var-space direction="column">
    <var-cell>name: getUsers</var-cell>
    <var-cell>loading: {{ isUsersLoading }}</var-cell>
    <var-cell>data: {{ users ?? 'No Data' }}</var-cell>

    <var-cell>name: getMockUsers</var-cell>
    <var-cell>loading: {{ isMockUsersLoading }}</var-cell>
    <var-cell>data: {{ mockUsers ?? 'No Data' }}</var-cell>
  </var-space>

  <var-divider margin="30px 0" />

  <var-space direction="column">
    <var-space align="center">
      <var-input type="number" variant="outlined" v-model="id" />
      <var-button type="primary" @click="getUser({ params: { id } })">Search</var-button>
      <var-button type="primary" @click="() => resetValue()">Reset Value</var-button>
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
    <var-button type="primary" @click="() => downloadFile()">Download (PS: Please use slow 3G)</var-button>
  </var-space>

  <var-divider margin="30px 0" />

  <var-space direction="column">
    <var-cell>name: throw error</var-cell>
    <var-cell>loading: {{ isThrowErrorLoading }}</var-cell>
    <var-cell>data: {{ errorUser ?? 'No Data' }}</var-cell>
    <var-button type="danger" @click="() => throwError()">Throw Error And Retry</var-button>
  </var-space>

  <var-divider margin="30px 0" />

  <var-space direction="column">
    <var-cell>name: always throw error</var-cell>
    <var-cell>loading: {{ isAlwaysThrowErrorLoading }}</var-cell>
    <var-button type="danger" @click="() => alwaysThrowError()">Always Throw Error</var-button>
  </var-space>

  <var-divider margin="30px 0" />

  <var-space direction="column">
    <var-cell>name: parallel</var-cell>
    <var-cell>loading: {{ hasUsersLoading }}</var-cell>
    <var-cell>download progress: {{ usersAverageDownloadProgress * 100 }} %</var-cell>
    <var-cell>data: {{ allUsers ?? 'No Data' }}</var-cell>
    <var-button type="primary" @click="runAll">Run All</var-button>
  </var-space>

  <var-divider margin="30px 0" />

  <var-button type="primary" @click="handleWithResponse">handleWithResponse</var-button>
</template>

<style>
body {
  color: var(--color-text);
  background-color: var(--color-body);
}
</style>
