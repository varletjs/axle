import { getCurrentInstance, onActivated, onDeactivated, onMounted, onUnmounted, ref, watch, type Ref } from 'vue'
import { isFunction } from 'rattail'
import { type AxleInstance, type AxleRequestConfig, type RunnerMethod } from './instance'

export type Runnable = () => boolean

export interface RunOptions<V, P, D> {
  url?: string
  params?: P
  config?: AxleRequestConfig<D>
  resetValue?: boolean
  cloneResetValue?: boolean | ((value: V) => V)
}

export type UseAxleExtra<V> = {
  loading: Ref<boolean>
  error: Ref<Error | undefined>
  uploadProgress: Ref<number>
  downloadProgress: Ref<number>
  pollingCanceled: Ref<boolean>
  abort(): void
  resetValue(options?: ResetValueOptions<V>): void
  invalidateCache(): void
  cancelPolling(): void
}

export interface UseAxleRefs<V> {
  value: Ref<V>
  loading: Ref<boolean>
  error: Ref<Error | undefined>
  uploadProgress: Ref<number>
  downloadProgress: Ref<number>
  pollingCanceled: Ref<boolean>
}

export type Run<V, R, P, D> = {
  (options?: RunOptions<V, P, D>): Promise<R>
} & UseAxleExtra<V>

export type WatchOptions =
  | boolean
  | {
      params?: boolean
      config?: boolean
      _custom?: () => any
    }

export interface UseAxleOptions<V = any, R = any, P = Record<string, any>, D = Record<string, any>> {
  url: string | (() => string)
  method: RunnerMethod
  value?: V
  immediate?: boolean
  resetValue?: boolean
  cloneResetValue?: boolean | ((value: V) => V)
  abortOnUnmount?: boolean
  cacheKey?: string | (() => string)
  cacheTime?: number
  config?: AxleRequestConfig<D> | (() => AxleRequestConfig<D>)
  watch?: WatchOptions
  pollingInterval?: number
  pollingOnHidden?: boolean
  pollingOnDeactivated?: boolean
  params?: P | (() => P)
  onBefore?(refs: UseAxleRefs<V>): void
  onAfter?(refs: UseAxleRefs<V>): void
  onTransform?(response: R, refs: UseAxleRefs<V>): V | Promise<V>
  onSuccess?(response: R, refs: UseAxleRefs<V>): void
  onError?(error: Error, refs: UseAxleRefs<V>): void
}

export interface ResetValueOptions<V> {
  cloneResetValue?: boolean | ((value: V) => V)
}

export type UseAxleInstance<V, R, P, D> = [value: Ref<V>, run: Run<V, R, P, D>, extra: UseAxleExtra<V>]

export interface CreateUseAxleOptions {
  axle: AxleInstance
  immediate?: boolean
  abortOnUnmount?: boolean
  cacheTime?: number
  onTransform?(response: any, refs: any): any
}

export type UseAxleOptionsWithRunnable<
  V = any,
  R = any,
  P = Record<string, any>,
  D = Record<string, any>,
> = UseAxleOptions<V, R, P, D> & { runnable: Runnable }

export interface UseAxle {
  <V = any, R = any, P = Record<string, any>, D = Record<string, any>>(
    options: UseAxleOptionsWithRunnable<V, R, P, D>,
  ): UseAxleInstance<V, R | undefined, P, D>

  <V = any, R = any, P = Record<string, any>, D = Record<string, any>>(
    options: UseAxleOptions<V, R, P, D>,
  ): UseAxleInstance<V, R, P, D>
}

type GenericUseAxleOptions<V = any, R = any, P = Record<string, any>, D = Record<string, any>> = UseAxleOptions<
  V,
  R,
  P,
  D
> & { runnable?: Runnable }

export function normalizeValueGetter<T>(valueGetter: T | (() => T)) {
  return isFunction(valueGetter) ? valueGetter() : valueGetter
}

const cacheBuffer: Map<string, { response?: any; expiredTime?: number; promise: Promise<any> }> = new Map()

export function cleanupCacheBuffer() {
  cacheBuffer.forEach((value, key) => {
    if (value.expiredTime && Date.now() >= value.expiredTime) {
      cacheBuffer.delete(key)
    }
  })
}

export function createUseAxle(options: CreateUseAxleOptions) {
  const {
    axle,
    onTransform: defaultOnTransform,
    immediate: defaultImmediate = true,
    abortOnUnmount: defaultAbortOnUnmount = true,
    cacheTime: defaultCacheTime = Infinity,
  } = options

  const useAxle: UseAxle = <V = any, R = any, P = Record<string, any>, D = Record<string, any>>(
    options: GenericUseAxleOptions<V, R, P, D>,
  ) => {
    const {
      url: initialUrlOrGetter,
      method,
      immediate = defaultImmediate,
      abortOnUnmount = defaultAbortOnUnmount,
      cacheTime = defaultCacheTime,
      cacheKey,
      pollingInterval,
      pollingOnHidden = true,
      pollingOnDeactivated = false,
      value: initialValue,
      resetValue: initialResetValue,
      cloneResetValue: initialCloneResetValue,
      params: initialParamsOrGetter,
      config: initialConfigOrGetter,
      watch: watchOptions,
      runnable = () => true,
      onBefore = () => {},
      onAfter = () => {},
      onTransform = (defaultOnTransform as UseAxleOptions<V, R, P>['onTransform']) ??
        ((response) => response as unknown as V),
      onSuccess = () => {},
      onError = () => {},
    } = options

    const value = ref(initialValue) as Ref<V>
    const loading = ref(false)
    const error = ref<Error>()
    const downloadProgress = ref(0)
    const uploadProgress = ref(0)
    const pollingCanceled = ref(false)

    const refs: UseAxleRefs<V> = {
      value,
      loading,
      error,
      downloadProgress,
      uploadProgress,
      pollingCanceled,
    }

    const extra: UseAxleExtra<V> = {
      uploadProgress,
      downloadProgress,
      loading,
      error,
      pollingCanceled,
      abort,
      resetValue,
      invalidateCache,
      cancelPolling,
    }

    let controller = new AbortController()
    let pollingTimer: any = null
    let deactivated = false
    let hidden = false

    const run = Object.assign(async (options: RunOptions<V, P, D> = {}) => {
      if (!runnable()) {
        return
      }

      pollingCanceled.value = false

      if (controller.signal.aborted) {
        controller = new AbortController()
      }

      const resetValueOption = options.resetValue ?? initialResetValue ?? false
      if (resetValueOption === true) {
        resetValue(options)
      }

      uploadProgress.value = 0
      downloadProgress.value = 0

      const url = options.url ?? normalizeValueGetter(initialUrlOrGetter)
      const params = options.params ?? normalizeValueGetter(initialParamsOrGetter)
      const config = options.config ?? normalizeValueGetter(initialConfigOrGetter)
      const normalizedCacheKey = cacheKey ? normalizeValueGetter(cacheKey) : undefined

      onBefore(refs)

      loading.value = true

      try {
        cleanupCacheBuffer()
        const response = (await getResponse()) as R

        if (shouldSetCacheResponse(normalizedCacheKey)) {
          const cache = cacheBuffer.get(normalizedCacheKey!)!
          cache.response = response
          cache.expiredTime = Date.now() + cacheTime
        }

        value.value = await onTransform(response, refs)
        error.value = undefined
        onSuccess(response, refs)
        loading.value = false
        onAfter(refs)

        return response
      } catch (responseError: any) {
        error.value = responseError as Error
        onError(responseError as Error, refs)
        loading.value = false
        onAfter(refs)

        throw responseError
      } finally {
        clearPolling()
        startPolling()
      }

      function getResponse() {
        if (shouldUseCache(normalizedCacheKey)) {
          return JSON.parse(JSON.stringify(cacheBuffer.get(normalizedCacheKey!)!.response))
        }

        if (shouldAwaitCachePromise(normalizedCacheKey)) {
          return cacheBuffer.get(normalizedCacheKey!)!.promise
        }

        const promise = fetchResponse()

        if (shouldSetCachePromise(normalizedCacheKey)) {
          cacheBuffer.set(normalizedCacheKey!, { promise })
        }

        return promise
      }

      function fetchResponse() {
        return axle[method](url, params, {
          signal: controller.signal,

          onUploadProgress(event) {
            uploadProgress.value = event.progress ?? 0
          },

          onDownloadProgress(event) {
            downloadProgress.value = event.progress ?? 0
          },

          ...config,
        })
      }

      function shouldUseCache(key: string | undefined) {
        if (!key || !cacheBuffer.has(key)) {
          return false
        }

        const buffer = cacheBuffer.get(key)!

        return buffer.response != null
      }

      function shouldAwaitCachePromise(key: string | undefined) {
        if (!key || !cacheBuffer.has(key)) {
          return false
        }

        const buffer = cacheBuffer.get(key)!

        return buffer.promise
      }

      function shouldSetCachePromise(key: string | undefined) {
        if (!key || cacheBuffer.has(key)) {
          return false
        }

        return true
      }

      function shouldSetCacheResponse(key: string | undefined) {
        if (!key || !cacheBuffer.has(key)) {
          return false
        }

        const buffer = cacheBuffer.get(key)!

        return buffer.response == null
      }
    }, extra)

    if (immediate) {
      runWithInitialConfig()
    }

    if (getCurrentInstance()) {
      onActivated(() => {
        deactivated = false
        addVisibilityChangeListener()
        startPolling()
      })

      onMounted(() => {
        addVisibilityChangeListener()
      })

      onDeactivated(() => {
        deactivated = true
        removeVisibilityChangeListener()
        clearPolling()
      })

      onUnmounted(() => {
        removeVisibilityChangeListener()
        cancelPolling()
      })

      if (abortOnUnmount) {
        onUnmounted(() => {
          abort()
        })
      }

      if (watchOptions) {
        const normalizedWatchOptions =
          watchOptions === true ? { params: true, config: true } : { params: false, config: false, ...watchOptions }
        const enableWatchParams = isFunction(initialParamsOrGetter) && normalizedWatchOptions.params
        const enableWatchConfig = isFunction(initialConfigOrGetter) && normalizedWatchOptions.config

        watch(
          () => [
            enableWatchParams ? normalizeValueGetter(initialParamsOrGetter) : undefined,
            enableWatchConfig ? normalizeValueGetter(initialConfigOrGetter) : undefined,
            normalizedWatchOptions._custom ? normalizedWatchOptions._custom() : undefined,
          ],
          () => {
            runWithInitialConfig()
          },
        )
      }
    }

    function runWithInitialConfig() {
      return run({
        url: normalizeValueGetter(initialUrlOrGetter),
        params: normalizeValueGetter(initialParamsOrGetter),
        config: normalizeValueGetter(initialConfigOrGetter),
      })
    }

    function resetValue(options: ResetValueOptions<V> = {}) {
      const cloneResetValue = options.cloneResetValue ?? initialCloneResetValue ?? false
      const cloneFn =
        cloneResetValue === true
          ? (v: V) => (v == null ? null : JSON.parse(JSON.stringify(v)))
          : isFunction(initialCloneResetValue)
            ? initialCloneResetValue
            : (v: V) => v
      value.value = cloneFn(initialValue as V)
    }

    function abort() {
      controller.abort()
    }

    function addVisibilityChangeListener() {
      if (typeof document !== 'undefined') {
        document.addEventListener('visibilitychange', handleVisibilityChange)
      }
    }

    function removeVisibilityChangeListener() {
      if (typeof document !== 'undefined') {
        document.removeEventListener('visibilitychange', handleVisibilityChange)
      }
    }

    function handleVisibilityChange() {
      hidden = document.visibilityState === 'hidden'

      if (pollingOnHidden) {
        return
      }

      hidden ? clearPolling() : startPolling()
    }

    function startPolling() {
      if (
        pollingInterval == null ||
        pollingCanceled.value ||
        pollingTimer != null ||
        (deactivated && !pollingOnDeactivated) ||
        (hidden && !pollingOnHidden)
      ) {
        return
      }

      pollingTimer = setTimeout(() => {
        runWithInitialConfig()
      }, pollingInterval)
    }

    function clearPolling() {
      if (pollingTimer == null) {
        return
      }

      clearTimeout(pollingTimer)
      pollingTimer = null
    }

    function cancelPolling() {
      clearPolling()
      pollingCanceled.value = true
    }

    function invalidateCache() {
      const normalizedCacheKey = cacheKey ? normalizeValueGetter(cacheKey) : undefined
      if (!normalizedCacheKey || !cacheBuffer.has(normalizedCacheKey)) {
        return
      }

      cacheBuffer.delete(normalizedCacheKey)
    }

    return [value, run, extra]
  }

  return useAxle
}

export * from './composables/useAverageProgress.js'
export * from './composables/useHasLoading.js'
export * from './composables/useValues.js'
