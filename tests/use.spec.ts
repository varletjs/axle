import { CanceledError } from 'axios'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vite-plus/test'
import { createRenderer, nextTick, ref } from 'vue'
import { createUseAxle } from '../src/use'

interface PendingRequest {
  params: any
  resolve(response: any): void
}

function createPendingAxle({ immediate = false }: { immediate?: boolean } = {}) {
  const requests: PendingRequest[] = []
  const axle = {
    get(_url: string, params: any, config: { signal: AbortSignal }) {
      return new Promise((resolve, reject) => {
        config.signal.addEventListener('abort', () => reject(new CanceledError()))
        requests.push({ params, resolve })
      })
    },
  }

  return { requests, useAxle: createUseAxle({ axle: axle as any, immediate }) }
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
  it('aborts the previous run and keeps only the latest response', async () => {
    const { requests, useAxle } = createPendingAxle()
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
    const { requests, useAxle } = createPendingAxle()
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

    const loadingRun = run()
    expect(run.loading.value).toBe(true)

    const silentRun = run({ silent: true })
    await expect(loadingRun).rejects.toThrow(CanceledError)
    expect(run.loading.value).toBe(false)

    requests[1].resolve('silent')
    await silentRun

    expect(value.value).toBe('silent')
    expect(run.loading.value).toBe(false)
  })

  it('shares the pending request when a run with the same cache key is superseded', async () => {
    const { requests, useAxle } = createPendingAxle()
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
    const { requests, useAxle } = createPendingAxle({ immediate: true })
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

  it('polls silently after each run', async () => {
    const { requests, useAxle } = createPendingAxle()
    const [value, run] = useAxle({ url: '/users', method: 'get', pollingInterval: 1000 })

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
})
