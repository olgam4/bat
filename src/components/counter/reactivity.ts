const createCounter = () => {
  const [counter, setCounter] = createSignal(0)
  return {
    counter,
    increment: () => setCounter(c => c + 1),
  }
}

export {
  createCounter,
}
