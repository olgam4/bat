import { useI18n } from '@solid-primitives/i18n'
import type { Component } from 'solid-js'
import type { createInput } from './reactivity'

interface Props extends ReturnType<typeof createInput> { }
const Input: Component<Props> = (props) => {
  const [t] = useI18n()

  return (
    <input
      class="bg-gray-200/60 dark:border-gray-50/75 rounded-md p-1 dark:placeholder:text-gray-800"
      type="text"
      value={props.value()}
      onInput={(e) => props.setValue(e.currentTarget.value)}
      placeholder={t(props.name())}
    />
  )
}

export default Input

