import type { Component } from 'solid-js'
import Toast from '@components/toast'
import { NotificationContext } from '@context/notifications'

const Toaster: Component = () => {
  const [context] = useContext(NotificationContext)
  return (
    <div class="absolute top-3 right-3 space-y-2">
      <For each={context.notifications}
        children={(notification) => {
          return (
            <Toast message={notification.message} />
          )
        }}
      />
    </div>
  )
}

export {
  Toaster as default,
}
