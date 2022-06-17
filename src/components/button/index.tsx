import type { FlowComponent } from 'solid-js'

interface Props {
  onClick: () => void
}

const Button: FlowComponent<Props> = ({ onClick, children }) => {
  return (
    <button class="btn" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
