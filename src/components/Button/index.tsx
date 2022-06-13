import { FlowComponent } from "solid-js"

interface Props {
  onClick: () => void
}

const Button: FlowComponent<Props> = (props) => {
  return (
    <button class="p-4 border border-gray-400 rounded-md" onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button
