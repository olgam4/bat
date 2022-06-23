const createInput = (name?: string, initialValue?: string) => {
  const [value, setValue] = createSignal(initialValue ?? '')
  const inputName = name ?? 'input'
  return { value, setValue, name: () => inputName }
}

export {
  createInput,
}
