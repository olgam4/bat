import { useI18n } from 'solid-i18n'

export default function () {
  const i18n = useI18n()
  return (
      <div class="p-4 text-red-300">
        <h1>{i18n.t('about')}</h1>
      </div>
  )
}
