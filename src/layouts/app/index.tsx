import type { Ref } from 'solid-js'

import bat from '@assets/bat.png'
import Image from '@components/image'
import Counter, { createCounter } from '@components/counter'
import Button from '@components/button'
import ReloadPrompt from '@components/reload'
import Form from '@components/form'
import { createInput } from '@components/form/input'

const ReloadPromptCheck = typeof window !== 'undefined' ?
  () => <ReloadPrompt />
  :
  () => null

export default function () {
  let linkRef: Ref<any>
  const counter = createCounter()
  const [_, { locale }] = useI18n()

  const nextLanguage = () => {
    const next = locale() === 'en' ? 'fr' : 'en'
    locale(next)
  }

  const nameHook = createInput('name')

  const onSubmit = () => {
    linkRef.click()
  }

  return (
    <div class="full flex-center flex-col bg-gray-100/75">
      <ReloadPromptCheck />
      <Image image={bat} />
      <div class="flex -mt-10 mb-5">
        <Form inputs={[nameHook]} onSubmit={onSubmit} />
        <Link ref={linkRef} href={`/hi/${nameHook.value()}`}>
          <div class="i-carbon-arrow-right btn w-7 h-7" />
        </Link>
      </div>
      <div class="flex items-end space-x-6">
        <Counter {...counter}/>
        <a class="btn" href="https://github.com/olgam4/bat" target="_blank">
          <div class="i-carbon-logo-github w-7 h-7" />
        </a>
        <Link href="/random">
          <div class="btn i-carbon-location-hazard w-7 h-7" />
        </Link>
        <Button onClick={() => nextLanguage()}>
          <div class="i-carbon-language w-7 h-7" />
        </Button>
      </div>
    </div>
  )
}
