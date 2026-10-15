import { CanceledError } from 'axios'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vite-plus/test'
import { createRenderer, nextTick, ref } from 'vue'
import { createUseAxle, type CreateUseAxleOptions } from '../src/use'

interface PendingRequest {
  params: any
  resolve(response: any): void
}

function createPendingAxle(options: Omit<CreateUseAxleOptions, 'axle'> = {}) {
  const requests: PendingRequest[] = []
  const axle = {
    get(_url: string, params: any, config: { signal: AbortSignal }) {
      return new Promise((resolve, reject) => {
        config.signal.addEventListener('abort', () => reject(new CanceledError()))
        requests.push({ params, resolve })
      })
    },
  }

  return { requests, useAxle: createUseAxle({ axle: axle as any, immediate: false, ...options }) }
}

function mountSetup<T>(setup: () => T) {
  const { createApp } = createRenderer<object, object>({
    patchProp() {},
    insert() {},
    remove() {},
    createElement: () => ({}),
    createText: () => ({}),
    createComment: () => ({}),
    setText() {},
    setElementText() {},
    parentNode: () => null,
    nextSibling: () => null,
  })
  let result!: T
  const app = createApp({
    setup() {
      result = setup()
      return () => null
    },
  })

  app.mount({})

  return { result, unmount: () => app.unmount() }
}

function flushPromises() {
  return new Promise((resolve) => setTimeout(resolve))
}

describe('useAxle run', () => {
  it('keeps concurrent runs by default', async () => {
    const { requests, useAxle } = createPendingAxle()
    const [value, run] = useAxle({ url: '/users', method: 'get' })

    const firstRun = run({ params: { id: 1 } })
    const secondRun = run({ params: { id: 2 } })

    requests[1].resolve('second')
    await expect(secondRun).resolves.toBe('second')
    expect(run.loading.value).toBe(false)

    requests[0].resolve('first')
    await expect(firstRun).resolves.toBe('first')
    expect(value.value).toBe('first')
  })

  it('allows useAxle to turn off abortPrevious', async () => {
    const { requests, useAxle } = createPendingAxle({ abortPrevious: true })
    const [, run] = useAxle({ url: '/users', method: 'get', abortPrevious: false })

    const firstRun = run()
    const secondRun = run()

    requests[0].resolve('first')
    requests[1].resolve('second')

    await expect(firstRun).resolves.toBe('first')
    await expect(secondRun).resolves.toBe('second')
  })

  it('aborts the previous run and keeps only the latest response', async () => {
    const { requests, useAxle } = createPendingAxle({ abortPrevious: true })
    const [value, run] = useAxle({ url: '/users', method: 'get' })

    const firstRun = run({ params: { id: 1 } })
    const secondRun = run({ params: { id: 2 } })

    await expect(firstRun).rejects.toThrow(CanceledError)
    expect(run.loading.value).toBe(true)
    expect(run.error.value).toBeUndefined()

    requests[0].resolve('first')
    requests[1].resolve('second')
    await secondRun

    expect(value.value).toBe('second')
    expect(run.loading.value).toBe(false)
  })

  it('ignores a stale response whose onTransform settles after a newer run starts', async () => {
    const { requests, useAxle } = createPendingAxle({ abortPrevious: true })
    const transforms: Array<() => void> = []
    const [value, run] = useAxle({
      url: '/users',
      method: 'get',
      onTransform: (response: string) => new Promise<string>((resolve) => transforms.push(() => resolve(response))),
    })

    const firstRun = run()
    requests[0].resolve('first')
    await flushPromises()

    const secondRun = run()
    transforms[0]()
    await firstRun

    expect(value.value).toBeUndefined()
    expect(run.loading.value).toBe(true)

    requests[1].resolve('second')
    await flushPromises()
    transforms[1]()
    await secondRun

    expect(value.value).toBe('second')
    expect(run.loading.value).toBe(false)
  })

  it('does not set loading for a silent run', async () => {
    const { requests, useAxle } = createPendingAxle()
    const [value, run] = useAxle({ url: '/users', method: 'get' })

    const silentRun = run({ silent: true })
    expect(run.loading.value).toBe(false)

    requests[0].resolve('silent')
    await silentRun

    expect(value.value).toBe('silent')
    expect(run.loading.value).toBe(false)
  })

  it('does not clear the loading of a pending run when a silent run starts', async () => {
    const { requests, useAxle } = createPendingAxle()
    const [, run] = useAxle({ url: '/users', method: 'get' })

    const loadingRun = run()
    const silentRun = run({ silent: true })
    expect(run.loading.value).toBe(true)

    requests[0].resolve('first')
    requests[1].resolve('second')
    await Promise.all([loadingRun, silentRun])
    expect(run.loading.value).toBe(false)
  })

  it('cancels the shared cached request when the latest run is aborted', async () => {
    const { requests, useAxle } = createPendingAxle({ abortPrevious: true })
    const [value, run] = useAxle({ url: '/users', method: 'get', cacheKey: 'aborted-shared-users' })

    const firstRun = run()
    const secondRun = run()
    run.abort()

    await expect(firstRun).rejects.toThrow(CanceledError)
    await expect(secondRun).rejects.toThrow(CanceledError)
    expect(run.error.value).toBeInstanceOf(CanceledError)
    expect(value.value).toBeUndefined()

    const nextRun = run()
    expect(requests).toHaveLength(2)
    requests[1].resolve('users')
    await nextRun
    expect(value.value).toBe('users')
  })

  it('drops every pending cache owned by the instance when aborted', async () => {
    const { requests, useAxle } = createPendingAxle()
    let page = 1
    const [, run] = useAxle({ url: '/users', method: 'get', cacheKey: () => `paged-users-${page}` })

    const firstPageRun = run()
    page = 2
    const secondPageRun = run()
    run.abort()

    await expect(firstPageRun).rejects.toThrow(CanceledError)
    await expect(secondPageRun).rejects.toThrow(CanceledError)

    page = 1
    const retryRun = run()
    expect(requests).toHaveLength(3)
    requests[2].resolve('page 1')
    await expect(retryRun).resolves.toBe('page 1')
  })

  it('resets loading when a run fails before sending the request', async () => {
    const { useAxle } = createPendingAxle({ abortPrevious: true })
    let shouldThrow = false
    const [, run] = useAxle({
      url: '/users',
      method: 'get',
      onBefore() {
        if (shouldThrow) {
          throw new Error('before')
        }
      },
    })

    const firstRun = run()
    shouldThrow = true
    const secondRun = run()

    await expect(firstRun).rejects.toThrow(CanceledError)
    await expect(secondRun).rejects.toThrow('before')
    expect(run.loading.value).toBe(false)
    expect(run.error.value?.message).toBe('before')
  })

  it('shares the pending request when a run with the same cache key is superseded', async () => {
    const { requests, useAxle } = createPendingAxle({ abortPrevious: true })
    const [value, run] = useAxle({ url: '/users', method: 'get', cacheKey: 'shared-users' })
    const [otherValue, otherRun] = useAxle({ url: '/users', method: 'get', cacheKey: 'shared-users' })

    const firstRun = run()
    const otherInstanceRun = otherRun()
    const secondRun = run()

    expect(requests).toHaveLength(1)

    requests[0].resolve('users')

    await expect(firstRun).resolves.toBe('users')
    await expect(otherInstanceRun).resolves.toBe('users')
    await expect(secondRun).resolves.toBe('users')
    expect(value.value).toBe('users')
    expect(otherValue.value).toBe('users')
  })

  it('drops the pending cache when the run is aborted explicitly', async () => {
    const { requests, useAxle } = createPendingAxle()
    const [value, run] = useAxle({ url: '/users', method: 'get', cacheKey: 'aborted-users' })

    const abortedRun = run()
    run.abort()
    await expect(abortedRun).rejects.toThrow(CanceledError)

    const nextRun = run()
    expect(requests).toHaveLength(2)

    requests[1].resolve('users')
    await nextRun

    expect(value.value).toBe('users')
  })

  it('does not leak a rejection when an immediate run is superseded', async () => {
    const { requests, useAxle } = createPendingAxle({ immediate: true, abortPrevious: true })
    const [value, run] = useAxle({ url: '/users', method: 'get' })

    const nextRun = run()
    requests[1].resolve('users')
    await nextRun
    await flushPromises()

    expect(value.value).toBe('users')
  })

  it('sets error when the latest run is aborted explicitly', async () => {
    const { useAxle } = createPendingAxle()
    const [, run] = useAxle({ url: '/users', method: 'get' })

    const pendingRun = run()
    run.abort()

    await expect(pendingRun).rejects.toThrow(CanceledError)
    expect(run.error.value).toBeInstanceOf(CanceledError)
    expect(run.loading.value).toBe(false)
  })
})

describe('useAxle polling', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('polls silently with pollingSilent', async () => {
    const { requests, useAxle } = createPendingAxle()
    const [value, run] = useAxle({ url: '/users', method: 'get', pollingInterval: 1000, pollingSilent: true })

    const firstRun = run()
    requests[0].resolve('first')
    await firstRun

    await vi.advanceTimersByTimeAsync(1000)
    expect(requests).toHaveLength(2)
    expect(run.loading.value).toBe(false)

    requests[1].resolve('second')
    await vi.advanceTimersByTimeAsync(0)
    expect(value.value).toBe('second')

    run.cancelPolling()
  })

  it('sets loading for polling runs by default', async () => {
    const { requests, useAxle } = createPendingAxle()
    const [, run] = useAxle({ url: '/users', method: 'get', pollingInterval: 1000 })

    const firstRun = run()
    requests[0].resolve('first')
    await firstRun

    await vi.advanceTimersByTimeAsync(1000)
    expect(requests).toHaveLength(2)
    expect(run.loading.value).toBe(true)

    run.cancelPolling()
  })

  it('stops polling when the interval getter returns null', async () => {
    const { requests, useAxle } = createPendingAxle()
    const [value, run] = useAxle<string>({
      url: '/tasks',
      method: 'get',
      pollingInterval: (): number | null => (value.value === 'done' ? null : 1000),
    })

    const firstRun = run()
    requests[0].resolve('pending')
    await firstRun

    await vi.advanceTimersByTimeAsync(1000)
    expect(requests).toHaveLength(2)

    requests[1].resolve('done')
    await vi.advanceTimersByTimeAsync(5000)
    expect(value.value).toBe('done')
    expect(requests).toHaveLength(2)
  })

  it('starts and stops polling when the interval getter changes', async () => {
    const { requests, useAxle } = createPendingAxle()
    const enabled = ref(false)
    const { result: run, unmount } = mountSetup(() => {
      const [, run] = useAxle({ url: '/users', method: 'get', pollingInterval: () => (enabled.value ? 1000 : null) })

      return run
    })

    const firstRun = run()
    requests[0].resolve('first')
    await firstRun

    await vi.advanceTimersByTimeAsync(1000)
    expect(requests).toHaveLength(1)

    enabled.value = true
    await nextTick()
    await vi.advanceTimersByTimeAsync(1000)
    expect(requests).toHaveLength(2)

    requests[1].resolve('second')
    enabled.value = false
    await nextTick()
    await vi.advanceTimersByTimeAsync(5000)
    expect(requests).toHaveLength(2)

    unmount()
  })

  it('does not poll while a run is pending', async () => {
    const { requests, useAxle } = createPendingAxle()
    const enabled = ref(false)
    const { result: run, unmount } = mountSetup(() => {
      const [, run] = useAxle({ url: '/users', method: 'get', pollingInterval: () => (enabled.value ? 1000 : null) })

      return run
    })

    const pendingRun = run()
    enabled.value = true
    await nextTick()
    await vi.advanceTimersByTimeAsync(3000)
    expect(requests).toHaveLength(1)

    requests[0].resolve('first')
    await pendingRun
    await vi.advanceTimersByTimeAsync(1000)
    expect(requests).toHaveLength(2)

    unmount()
  })

  it('does not let a scheduled poll interrupt a manual run', async () => {
    const { requests, useAxle } = createPendingAxle({ abortPrevious: true })
    const [value, run] = useAxle({ url: '/users', method: 'get', pollingInterval: 1000 })

    const firstRun = run()
    requests[0].resolve('first')
    await firstRun

    await vi.advanceTimersByTimeAsync(500)
    const manualRun = run()
    await vi.advanceTimersByTimeAsync(600)
    expect(requests).toHaveLength(2)

    requests[1].resolve('manual')
    await expect(manualRun).resolves.toBe('manual')
    expect(value.value).toBe('manual')

    run.cancelPolling()
  })

  it('does not resume polling after cancelPolling until the next run', async () => {
    const { requests, useAxle } = createPendingAxle()
    const enabled = ref(true)
    const { result: run, unmount } = mountSetup(() => {
      const [, run] = useAxle({ url: '/users', method: 'get', pollingInterval: () => (enabled.value ? 1000 : null) })

      return run
    })

    const firstRun = run()
    requests[0].resolve('first')
    await firstRun

    run.cancelPolling()
    await vi.advanceTimersByTimeAsync(3000)
    expect(requests).toHaveLength(1)

    enabled.value = false
    await nextTick()
    enabled.value = true
    await nextTick()
    await vi.advanceTimersByTimeAsync(3000)
    expect(requests).toHaveLength(1)

    const nextRun = run()
    requests[1].resolve('second')
    await nextRun
    await vi.advanceTimersByTimeAsync(1000)
    expect(requests).toHaveLength(3)

    unmount()
  })
})
