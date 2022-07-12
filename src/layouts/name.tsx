import { useI18n } from '@solid-primitives/i18n'
import type { Component } from 'solid-js'

const Name: Component = () => {
  const params = useParams()
  const [t] = useI18n()

  return (
    <div class="full flex-center flex-col bg-gray-100/75 space-y-2">
      <p>{t('hello', { name: params.name })}</p>
      <Link href="/">
        <div class="i-carbon-arrow-left h-7 w-7" />
      </Link>
    </div>
  )
}

export default Name
