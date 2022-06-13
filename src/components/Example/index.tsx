import { useI18n } from 'solid-i18n'
import type { Component } from 'solid-js'

interface Props {
  className?: string
}

const Example: Component<Props> = ({ className }) => {
  const i18n = useI18n()
  return (
    <div class={className}>{i18n.t('components')}</div>
  )
}

export default Example
