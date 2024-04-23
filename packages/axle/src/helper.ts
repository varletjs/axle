import { inBrowser } from '@varlet/shared'
import { type AxiosResponse, isAxiosError } from 'axios'

export interface WithResponseReturn<R> {
  response: R | undefined
  errorResponse: AxiosResponse | undefined
}

export function withResponse<R>(promise: Promise<R>) {
  return new Promise<WithResponseReturn<R>>((resolve, reject) => {
    promise
      .then((response) => {
        resolve({
          response,
          errorResponse: undefined,
        })
      })
      .catch((error) => {
        if (isAxiosError(error)) {
          resolve({
            response: undefined,
            errorResponse: error.response,
          })
        } else {
          reject(error)
        }
      })
  })
}

export function download(url: string | Blob, filename: string) {
  if (!inBrowser()) {
    return
  }

  const a = document.createElement('a')
  a.download = filename
  a.style.display = 'none'
  a.href = typeof url === 'string' ? url : URL.createObjectURL(url)
  document.body.appendChild(a)
  a.click()
  URL.revokeObjectURL(a.href)
  document.body.removeChild(a)
}
