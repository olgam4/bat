import type { FlowComponent } from 'solid-js'

interface Props {
  onClick?: () => void
  datatestid?: string
  type?: 'button' | 'submit'
}

const Button: FlowComponent<Props> = ({ datatestid, onClick, type, children }) => {
  return (
    <button type={type} data-testid={datatestid} class="btn" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
