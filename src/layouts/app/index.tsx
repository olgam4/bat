import bat from '@assets/bat.png'
import { useI18n } from '@solid-primitives/i18n'
import Image from '@components/Image'
import Counter, { createCounter } from '@components/Counter'
import Button from '@components/Button'
import ReloadPrompt from '@components/ReloadPrompt'

const ReloadPromptCheck = typeof window !== 'undefined' ?
  () => <ReloadPrompt />
  :
  () => null

export default function () {
  const counter = createCounter()
  const [t, { locale }] = useI18n()

  const nextLanguage = () => {
    const next = locale() === 'en' ? 'fr' : 'en'
    locale(next)
  }

  return (
    <div class="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center bg-gray-100/75">
      <h1>{t('hello')}</h1>
      <ReloadPromptCheck />
      <nav class="flex space-x-2">
        <Link href="/about" children={<p>{t('about')}</p>}/>
      </nav>
      <Image image={bat} />
      <div class="flex justify-end space-x-4">
        <Counter {...counter}/>
        <a class="btn" href="https://github.com/olgam4/bat" target="_blank">
          <div class="i-carbon-logo-github text-3xl" />
        </a>
        <Button onClick={() => nextLanguage()}>
          <div class="i-carbon-language text-3xl" />
        </Button>
      </div>
    </div>
  )
}
