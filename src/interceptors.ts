
export const TimeoutInterceptor = (normalizeErrorCode?: string) => {
  return [
    (response: any) => response,
    (error: any) => {
      if ((error.code == 'ECONNABORTED' && error.message.indexOf('timeout') != -1) || error.code === 'ETIMEDOUT') {
        error.code = normalizeErrorCode || 'TIMEOUT'
      }

      return Promise.reject(error)
    }
  ]
}
