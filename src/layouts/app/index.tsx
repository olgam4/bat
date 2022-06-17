import bat from '@assets/bat.png'
import Image from '@components/image'
import Counter, { createCounter } from '@components/counter'
import Button from '@components/button'
import ReloadPrompt from '@components/reload'
import Input from '@components/input'

const ReloadPromptCheck = typeof window !== 'undefined' ?
  () => <ReloadPrompt />
  :
  () => null

export default function () {
  const counter = createCounter()
  const [_, { locale }] = useI18n()

  const nextLanguage = () => {
    const next = locale() === 'en' ? 'fr' : 'en'
    locale(next)
  }

  return (
    <div class="full flex-center flex-col bg-gray-100/75">
      <ReloadPromptCheck />
      <Image image={bat} />
      <div class="-mt-10 mb-5">
        <Input />
      </div>
      <div class="flex items-end space-x-6">
        <Counter {...counter}/>
        <a class="btn" href="https://github.com/olgam4/bat" target="_blank">
          <div class="i-carbon-logo-github text-3xl" />
        </a>
        <Link href="/random">
          <div class="btn i-carbon-location-hazard text-3xl" />
        </Link>
        <Button onClick={() => nextLanguage()}>
          <div class="i-carbon-language text-3xl" />
        </Button>
      </div>
    </div>
  )
}
