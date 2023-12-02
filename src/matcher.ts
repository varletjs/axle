import { minimatch } from 'minimatch'

export function matchPattern(pattern: string, method: string, url: string) {
  if (pattern.startsWith('method:')) {
    return pattern.replace('method:', '').trim() === method
  } else {
    return minimatch(url ?? '', pattern)
  }
}

export function createMatcher(include?: string[], exclude?: string[]) {
  function matcher(method: string, url: string) {
    if (!include && !exclude) {
      return true
    }

    const isExclude = (exclude ?? []).some((pattern) => matchPattern(pattern, method, url))

    if (isExclude) {
      return false
    }

    if (!include) {
      return true
    }

    const isInclude = (include ?? []).some((pattern) => matchPattern(pattern, method, url))

    return isInclude
  }

  return matcher
}
