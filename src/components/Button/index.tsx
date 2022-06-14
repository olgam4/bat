import type { FlowComponent } from 'solid-js'

interface Props {
  onClick: () => void
}

const Button: FlowComponent<Props> = (props) => {
  return (
    <button class="btn hover:(bg-none)" onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button
