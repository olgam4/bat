import type { Component } from 'solid-js'
import { Motion, Presence } from '@motionone/solid'

type Props = {
  message: string
}

const Toast: Component<Props> = (props) => {
  const [show, setShow] = createSignal(true)

  setTimeout(() => {
    setShow(!show())
  }, 3000)

  return (
    <Presence exitBeforeEnter>
      <Show when={show()}>
        <Motion.div 
            class="bg-white w-44 p-3 rounded-md"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.5 }}
        >
          {props.message}
        </Motion.div>
      </Show>
    </Presence>
  )
}

export {
  Toast as default,
}
