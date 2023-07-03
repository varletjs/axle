import { createAxle } from '@varlet/axle'
import { createUseAxle } from '@varlet/axle/use'

function api(api: string) {
  return (...ids: (string | number)[]) => {
    const suffix = ids.reduce((suffix, id) => {
      if (!id) {
        return suffix
      }
      
      return suffix + `/${id}`
    }, '')

    return `${api}${suffix}`
  }
}

function dataTransformer(response) {
  const { method } = response.config

  if (response.data.code !== 200) {
    Snackbar.warning(response.data.message)
  }

  if (method === 'get') {
    return response.data.data
  }

  if (['post', 'put', 'delete', 'patch'].includes(method)) {
    return response.data
  }
}

function errorTransformer(errorResponse) {
  Snackbar.error(errorResponse.message)

  return errorResponse
}

const axle = createAxle({
  baseURL: '/api'
})

const useAxle = createUseAxle({
  dataTransformer,
  errorTransformer,
})

export { axle, useAxle, api }