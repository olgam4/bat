import type { Component } from 'solid-js'
import { Motion, Presence } from '@motionone/solid'
import Button from '@components/button'

type Props = {
  message: string
}

const Toast: Component<Props> = (props) => {
  const [show, setShow] = createSignal(true)

  return (
    <div>
    <Presence exitBeforeEnter>
      <Show when={show()}>
        <Motion.div 
            class="bg-white w-44 p-3"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 1 }}
        >
          {props.message}
        </Motion.div>
      </Show>
    </Presence>
    <Button onClick={() => setShow(!show())}>X</Button>
    </div>
  )
}

export {
  Toast as default,
}
