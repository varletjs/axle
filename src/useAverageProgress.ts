import { type Ref, ref, watch } from 'vue'

export function useAverageProgress(...progressCollection: Ref<number>[]) {
  const averageProgress = ref(0)

  watch(
    () => progressCollection.map((progress) => progress.value),
    (newProgressCollection) => {
      const total = newProgressCollection.reduce((total, progress) => total + progress, 0)
      averageProgress.value = total / progressCollection.length
    },
    { immediate: true }
  )

  return averageProgress
}
