import Button from '@components/button'
import type { Component } from 'solid-js'
import type { createCounter } from './reactivity'

interface Props extends ReturnType<typeof createCounter> {}

const Counter: Component<Props> = (props) => {
  const { counter } = destructure(() => props)
  const { increment } = props

  return (
    <div
      class="group"
    >
      <p
        class="text-center transition opacity-0 cursor-pointer group-hover:opacity-100"
      >
        {counter()}
      </p>
      <div class="-m-1">
        <Button onClick={() => increment()}>
          <div class="i-carbon-moonrise h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}

export default Counter
