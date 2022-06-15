import { useI18n } from '@solid-primitives/i18n'
import type { Component, Ref } from 'solid-js'

const Input: Component = () => {
  let linkRef: Ref<any>
  const [value, setValue] = createSignal('')
  const [t] = useI18n()

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        linkRef.click()
      }}
      class="flex mb-4 space-x-3"
    >
      <input
        class="bg-gray-200/60 rounded-md p-1"
        type="text"
        value={value()}
        onInput={(e) => setValue(e.currentTarget.value)}
        placeholder={t('name')}
        />
      <Link ref={linkRef} href={`/hi/${value()}`}>
        <div class="i-carbon-arrow-right btn text-3xl" />
      </Link>
    </form>
  )
}

export default Input
