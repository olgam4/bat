import type { Component, Ref } from 'solid-js'
import autoAnimate from '@formkit/auto-animate'

type Toast = {
  id: string
  message: string
}

const createToaster = () => {
  const [toasts, setToasts] = createSignal<Toast[]>([])

  const toast = (message: string) => {
    const id = Math.random().toString()
    setToasts(toasts => [...toasts, { id, message }])
  }

  const removeToast = (id: string) => {
    setToasts(toasts => toasts.filter(t => t.id !== id))
  }

  return {
    toasts,
    removeToast,
    toast,
  }
}

interface Props extends ReturnType<typeof createToaster> { }

const Toaster: Component<Props> = (props) => {
  let toasterRef: Ref<any>

  createEffect(() => {
    toasterRef && autoAnimate(toasterRef)
  })

  return (
    <div ref={toasterRef} class="absolute p-5 top-0 right-0">
      <For each={props.toasts()} children={({ message, id }) => (
        <div class="flex space-x-2 bg-white p-2 mb-5 rounded">
          <button class="text-red-600 font-black" onClick={() => props.removeToast(id)}>
            X
          </button>
          <p>
            {message}
          </p>
        </div>
      )} />
    </div>
  )
}

export {
  createToaster,
  Toaster as default,
}
