import type { FlowComponent } from 'solid-js'

interface Props {
  onClick: () => void
}

const Button: FlowComponent<Props> = (props) => {
  return (
    <button class="btn" onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button
