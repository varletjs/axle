import { type Ref, type WritableComputedRef, computed } from 'vue'

export function useAllData<T extends Ref<any>[]>(...dataCollection: T): WritableComputedRef<T[number]['value'][]> {
  return computed({
    get: () => dataCollection.map((data) => data.value),

    set(values) {
      dataCollection.forEach((data, index) => {
        data.value = values[index]
      })
    },
  })
}
