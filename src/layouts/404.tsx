import { useI18n } from "@solid-primitives/i18n"

export default function () {
  const [t] = useI18n()

  return (
    <div class="full flex-center flex-col bg-gray-100/50 text-gray-400">
      <h1 class="text-4xl font-extrabold">404</h1>
      <div class="flex space-x-1 mt-1">
        <p>{t('404')}</p>
        <div class="pt-1">
          <div class="i-carbon-face-dissatisfied-filled"/>
        </div>
      </div>
      <Link href="/" class="flex items-center space-x-1 mt-4 transition hover:(text-gray-400/40)">
        <div class="i-carbon-arrow-left text-3xl" />
        <p class="font-extrabold">{t('goback')}</p>
      </Link>
    </div>
  )
}
