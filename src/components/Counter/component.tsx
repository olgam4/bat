import Button from '@components/Button'
import type { Component } from 'solid-js'
import type { createCounter } from './reactivity'

interface Props extends ReturnType<typeof createCounter> {}

const Counter: Component<Props> = (props) => {
  return (
    <div>
      <Button onClick={() => props.increment()}>
        <div class="i-carbon-bat" />
      </Button>
    </div>
  )
}

export default Counter
