import Button from '@components/Button'
import type { Component } from 'solid-js'
import type { createCounter } from './reactivity'

interface Props extends ReturnType<typeof createCounter> {}

const Counter: Component<Props> = (props) => {
  return (
    <div class="text-center">
      <p>{props.counter()}</p>
      <div class="-m-1">
      <Button onClick={() => props.increment()}>
        <div class="i-carbon-moonrise text-3xl" />
      </Button>
      </div>
    </div>
  )
}

export default Counter
