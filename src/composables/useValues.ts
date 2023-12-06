import { type Ref, type WritableComputedRef, computed } from 'vue'

export function useValues<T extends Ref<any>[]>(...valueCollection: T): WritableComputedRef<T[number]['value'][]> {
  return computed({
    get: () => valueCollection.map((value) => value.value),

    set(values) {
      valueCollection.forEach((value, index) => {
        value.value = values[index]
      })
    },
  })
}
