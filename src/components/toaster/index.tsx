import type { Component } from 'solid-js'

type Toast = {
  id: string
  message: string
}

const createToaster = () => {
  const [toasts, setToasts] = createSignal<Toast[]>([])

  const toast = (message: string) => {
    const id = Math.random().toString()
    setTimeout(() => {
      setToasts(toasts => toasts.filter(t => t.id !== id))
    }, 1000)
    setToasts(toasts => [...toasts, { id, message }])
  }

  return {
    toasts,
    toast,
  }
}

interface Props extends ReturnType<typeof createToaster> {}

const Toaster: Component<Props> = (props) => {
  return (
    <div class="absolute p-5 top-0 right-0">
      <For each={props.toasts()} children={({ message }) => (
        <div class="bg-white p-2 mb-5 rounded">
          {message}
        </div>
      )}/>
    </div>
  )
}

export {
  createToaster,
  Toaster as default,
}
