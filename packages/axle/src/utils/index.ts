export function isFormData(value: unknown): value is FormData {
  return typeof FormData !== 'undefined' && value instanceof FormData
}

export function formDataToObject(formData: FormData): Record<string, any> {
  const normalizedData: Record<string, any> = {}
  formData.forEach((value, key) => {
    normalizedData[key] = value
  })
  return normalizedData
}

export function objectToFormData(object: Record<string, any>): FormData {
  const formData = new FormData()
  Object.keys(object).forEach((key) => formData.append(key, object[key]))
  return formData
}
