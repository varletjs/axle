import {
  createAxle,
  responseRetryInterceptor,
  requestHeadersInterceptor,
  responseBlobInterceptor,
  responseTimeoutInterceptor,
  responseStatusInterceptor,
} from '@varlet/axle'
import { createUseAxle } from '@varlet/axle/use'

const axle = createAxle({
  baseURL: '/api',
})

const useAxle = createUseAxle({
  axle,
  onTransform: (response) => response.data,
})

axle.useRequestInterceptor(
  requestHeadersInterceptor({
    headers: {
      'Axle-Custom-Header': 'Axle-Custom-Header',
    },
  })
)

axle.useResponseInterceptor(
  responseStatusInterceptor({
    handler: {
      300: (error) => {
        console.log('300', 300)
        return error
      },
      400: (error) => {
        console.log('400', 400)
        return error
      },
      500: (error) => {
        console.log('500', 500)
        return error
      },
    },
  }),

  responseRetryInterceptor({
    count: 3,
    include: ['/user/throw-error'],
  }),

  responseBlobInterceptor({
    onResponse: (response) => ({
      ...response,
      data: {
        code: 200,
        data: response.data,
        message: 'success',
      },
    }),
  }),

  responseTimeoutInterceptor(),

  {
    onFulfilled(response) {
      if (response.data.code !== 200 && response.data.message) {
        Snackbar.warning(response.data.message)
      }

      return response.data
    },
    onRejected(error) {
      console.log(error)
      Snackbar.error(error.message)
      return Promise.reject(error)
    },
  }
)

export { axle, useAxle }
