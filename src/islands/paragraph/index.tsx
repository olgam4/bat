import { en } from '@locales'
import type { Component } from 'solid-js'
import { useI18n } from '@solid-primitives/i18n'

interface Variables {
  [key: string]: string
}

interface Props {
  key: keyof typeof en
  class?: string
  variable?: Variables
}

const Paragraph: Component<Props> = (props) => {
  const [t] = useI18n()
  return (
    <p class={props.class}>{t(props.key, props.variable)}</p>
  )
}

export default Paragraph
