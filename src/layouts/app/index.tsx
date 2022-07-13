import type { Ref } from 'solid-js'

import bat from '@assets/bat.png'
import Image from '@components/image'
import Counter, { createCounter } from '@components/counter'
import Button from '@components/button'
import ReloadPrompt from '@components/reload'
import Form from '@components/form'
import { createInput } from '@components/form/input'
import Toaster, { createToaster } from '@components/toaster'

const ReloadPromptCheck = typeof window !== 'undefined' ?
  () => <ReloadPrompt />
  :
  () => null

export default function () {
  let linkRef: Ref<any>
  const counter = createCounter()
  const [_, { locale }] = useI18n()
  const nameHook = createInput('name')
  const toasterHook = createToaster()

  const nextLanguage = () => {
    const next = locale() === 'en' ? 'fr' : 'en'
    locale(next)
  }

  const onSubmit = () => {
    linkRef.click()
  }

  const phoneCall = async () => {
    const response = await fetch('/api/phone', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: '+33123456789',
      }),
    })
    const data = await response.json()

    console.log(data)
    toasterHook.toast(JSON.stringify(data))
  }

  return (
    <div class="full flex-center flex-col bg-gray-100/75">
      <ReloadPromptCheck />
      <Image image={bat} />
      <div class="flex -mt-10 items-center">
        <Form inputs={[nameHook]} onSubmit={onSubmit} />
        <Link ref={linkRef} href={`/hi/${nameHook.value()}`}>
          <div class="i-carbon-arrow-right btn w-7 h-7" />
        </Link>
      </div>
      <div class="flex items-end space-x-6">
        <Counter {...counter}/>
        <a class="btn" href="https://github.com/olgam4/bat" target="_blank">
          <div class="i-carbon-logo-github w-6 h-6" />
        </a>
        <Link href={Math.round((Math.random() * 100000)).toString()}>
          <div class="btn i-carbon-location-hazard w-6 h-6" />
        </Link>
        <Button onClick={() => phoneCall()}>
          <div class="i-carbon-phone-voice w-6 h-6" />
        </Button>
        <Button onClick={() => nextLanguage()}>
          <div class="i-carbon-language w-6 h-6" />
        </Button>
      </div>
      <Toaster {...toasterHook} />
    </div>
  )
}
