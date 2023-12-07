import {
  createAxle,
  responseRetryInterceptor,
  requestHeadersInterceptor,
  responseBlobInterceptor,
  responseTimeoutInterceptor,
  responseStatusInterceptor,
  requestMockInterceptor,
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
  }),

  requestMockInterceptor({
    mapping: {
      '/mock/**': {
        delay: 1000,
        handler: () => ({
          data: {
            code: 200,
            data: [
              {
                id: 1,
                name: 'Mock Jack Ma',
              },
              {
                id: 2,
                name: 'Mock Tom',
              },
            ],
            message: 'success',
          },
        }),
      },
    },
  })
)

axle.useResponseInterceptor(
  responseTimeoutInterceptor(),

  responseRetryInterceptor({
    count: 3,
    include: ['/user/throw-error'],
  }),

  responseStatusInterceptor({
    validStatusHandler: {
      200: (response) => {
        console.log('validate handler status 200:', response)
      },
    },
    invalidStatusHandler: {
      500: (error) => {
        console.log('invalidate handler status 500:', error)
      },
    },
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

  {
    onFulfilled(response) {
      if (response.data.code !== 200 && response.data.message) {
        Snackbar.warning(response.data.message)
      }

      return response.data
    },
    onRejected(error) {
      Snackbar.error(error.message)
      return Promise.reject(error)
    },
  }
)

export { axle, useAxle }
