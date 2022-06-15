import Button from '@components/button'
import type { Component } from 'solid-js'
import type { createCounter } from './reactivity'

interface Props extends ReturnType<typeof createCounter> {}

const Counter: Component<Props> = (props) => {
  return (
    <div
      class="group"
    >
      <p
        class="text-center transition opacity-0 cursor-pointer group-hover:opacity-100"
      >
        {props.counter()}
      </p>
      <div class="-m-1">
        <Button onClick={() => props.increment()}>
          <div class="i-carbon-moonrise text-3xl" />
        </Button>
      </div>
    </div>
  )
}

export default Counter
