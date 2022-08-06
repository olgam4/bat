import type { Ref } from 'solid-js'

import { Link } from '@solidjs/router'
import bat from '@assets/bat.png'
import Image from '@components/image'
import Counter, { createCounter } from '@components/counter'
import Button from '@components/button'
import ReloadPrompt from '@components/reload'
import Form from '@components/form'
import { createInput } from '@components/form/input'
import Toaster, { createToaster } from '@components/toaster'
import { createApp } from './reactivity'

const ReloadPromptCheck = typeof window !== 'undefined' ?
  () => <ReloadPrompt />
  :
  () => null

export default function() {
  let linkRef: Ref<any>

  const counter = createCounter()
  const nameInput = createInput('name')
  const toasterHook = createToaster()
  const {
    phoneCall,
    nextLanguage,
  } = createApp()


  return (
    <div class="full flex-center flex-col bg-gray-100/75">
      <ReloadPromptCheck />
      <Image image={bat} />
      <div class="flex -mt-10 items-center">
        <Form inputs={[nameInput]} onSubmit={() => linkRef.click()} />
        <Link ref={linkRef} href={`/hi/${nameInput.value()}`}>
          <div class="i-carbon-arrow-right btn w-7 h-7" />
        </Link>
      </div>
      <div class="flex items-end space-x-6">
        <Counter {...counter} />
        <a class="btn" href="https://github.com/olgam4/bat" target="_blank">
          <div class="i-carbon-logo-github w-6 h-6" />
        </a>
        <Link href={Math.round((Math.random() * 100000)).toString()}>
          <div class="btn i-carbon-location-hazard w-6 h-6" />
        </Link>
        <Button onClick={() => {
          phoneCall((data) => {
            console.log(data)
            toasterHook.toast(JSON.stringify(data))
          })
        }}>
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
