import Button from '@components/button'
import { ThemeContext } from '@context/theme'
import type { Component } from 'solid-js'
import type { createCounter } from './reactivity'

interface Props extends ReturnType<typeof createCounter> { }

const Counter: Component<Props> = (props) => {
  const [theme] = useContext(ThemeContext)

  return (
    <div class={theme.name}>
      <div
        class="group"
      >
        <p
          class="text-center transition opacity-0 cursor-pointer group-hover:opacity-100 dark:text-gray-50"
        >
          {props.counter()}
        </p>
        <div class="-m-1">
          <Button onClick={() => props.increment()}>
            <div class="i-carbon-moonrise h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Counter
