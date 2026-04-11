import { isFunction } from 'rattail'

export type MatchPattern = string | ((options: { url: string; method: string; status?: number }) => boolean)

export function matchPattern(pattern: MatchPattern, method: string, url: string, status?: number) {
  if (isFunction(pattern)) {
    return pattern({ url, method, status })
  }

  if (pattern.startsWith('status:')) {
    return pattern.replace('status:', '').trim() === String(status)
  }

  return pattern.startsWith('method:') ? pattern.replace('method:', '').trim() === method : url === pattern
}

export function createMatcher(include?: MatchPattern[], exclude?: MatchPattern[]) {
  function matcher(method: string, url: string, status?: number) {
    if (!include && !exclude) {
      return true
    }

    const isExclude = (exclude ?? []).some((pattern) => matchPattern(pattern, method, url, status))

    if (isExclude) {
      return false
    }

    if (!include) {
      return true
    }

    const isInclude = (include ?? []).some((pattern) => matchPattern(pattern, method, url, status))

    return isInclude
  }

  return matcher
}
