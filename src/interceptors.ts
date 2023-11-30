
export const AxleTIMEOUTInterceptor = () => {
  return [
    (response: any) => response,
    (error: any) => {
      if ((error.code == 'ECONNABORTED' && error.message.indexOf('timeout') != -1) || error.code === 'ETIMEDOUT') {
        error.code = 'TIMEOUT'
      }

      return Promise.reject(error)
    }
  ]
}