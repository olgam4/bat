import type { FlowComponent, JSX } from 'solid-js'

interface Props extends JSX.HTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
  datatestid?: string
  type?: 'button' | 'submit'
}

const Button: FlowComponent<Props> = (props) => {
  return (
    <button {...props} class={'btn ' + props.class} data-testid={props.datatestid} type={props.type}>
      {props.children}
    </button>
  )
}

export default Button
