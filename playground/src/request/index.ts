import { createAxle } from '@varlet/axle'
import { createUseAxle } from '@varlet/axle/use'

const axle = createAxle({
  baseURL: '/api',
})

const useAxle = createUseAxle({
  onTransform: (response) => response.data 
})

axle.axios.interceptors.response.use(
  (response) => {
    const { status, data } = response

    if (status !== 200) {
      Snackbar.error(data.message)
      return data
    }

    if (data.code !== 200) {
      Snackbar(data.message)
    }

    return data
  },
  (error) => {
    Snackbar.error(error.message)
    return Promise.reject(error)
  }
)

export { axle, useAxle }
