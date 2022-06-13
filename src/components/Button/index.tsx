import { FlowComponent } from 'solid-js'

interface Props {
  onClick: () => void
}

const Button: FlowComponent<Props> = (props) => {
  return (
    <button class="p-4 border text-gray-300 border-gray-300 rounded-md hover:(border-transparent bg-gray-300 text-white)" onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button
