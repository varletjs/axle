import { type Ref, ref, watch } from 'vue'

export function useHasLoading(...loadings: Ref<boolean>[]) {
  const hasLoading = ref(false)

  watch(
    () => loadings.map((loading) => loading.value),
    (newLoadings) => {
      hasLoading.value = newLoadings.some(Boolean)
    },
    { immediate: true }
  )

  return hasLoading
}
