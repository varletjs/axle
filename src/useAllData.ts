import { computed } from 'vue'

export function useAllData<DC extends any[]>(...dataCollection: DC) {
  return computed({
    get: () => dataCollection.map((data) => data.value),

    set(values) {
      dataCollection.forEach((data, index) => {
        data.value = values[index]
      })
    },
  })
}
