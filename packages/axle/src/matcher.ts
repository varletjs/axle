import { minimatch } from 'minimatch'

export function matchPattern(pattern: string, method: string, url: string, status?: number | null | undefined) {
  if (pattern.startsWith('status:')) {
    return pattern.replace('status:', '').trim() === String(status)
  }

  return pattern.startsWith('method:')
    ? pattern.replace('method:', '').trim() === method
    : minimatch(url ?? '', pattern)
}

export function createMatcher(include?: string[], exclude?: string[]) {
  function matcher(method: string, url: string, status?: number | null | undefined) {
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
