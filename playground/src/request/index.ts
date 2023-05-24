import { createAxle, createUseAxleHelper } from '@varlet/axle'

const { helpers: axle } = createAxle()

function dataFormatter(response) {
  const { method } = response.config

  if (response.data.code !== 200) {
    Snackbar.warning(response.data.message)
  }

  if (method === 'get') {
    return response.data.data
  }

  if (['post', 'put', 'delete', 'patch']) {
    return response.data
  }
}

function errorFormatter(errorResponse) {
  Snackbar.error(errorResponse.message)

  return errorResponse
}

const useAxle = createUseAxleHelper({
  dataFormatter,
  errorFormatter
})

const api = (api: string) => {
  return (id?: string) => `${api}${id ? `/${id}` : ''}`
} 

export { axle, useAxle, api }