import type { Component } from 'solid-js'
import { useI18n } from '@solid-primitives/i18n'

interface Variables {
  [key: string]: string
}

interface Props {
  key: string
  variable?: Variables
}

const Paragraph: Component<Props> = (props) => {
  const [t] = useI18n()
  return (

      <p>{t(props.key, props.variable)}</p>
  )
}

export default Paragraph
