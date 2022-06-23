import { useI18n } from '@solid-primitives/i18n'
import type { Component } from 'solid-js'
import type { createInput } from './reactivity'

interface Props extends ReturnType<typeof createInput> {}
const Input: Component<Props> = (props) => {
  const [t] = useI18n()

  return (
    <input
      class="bg-gray-200/60 rounded-md p-1"
      type="text"
      value={props.value()}
      onInput={(e) => props.setValue(e.currentTarget.value)}
      placeholder={t(props.name())}
      />
  )
}

export default Input

