import type { Component } from 'solid-js'

interface Props {
  className?: string
}

const Example: Component<Props> = ({ className }) => {
  return (
    <div class={className}>Components are awesome!</div>
  )
}

export default Example
