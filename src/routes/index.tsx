import { Provider } from '@locales'

import { createInput } from '@primitives/form/input'
import { Link } from '@solidjs/router'
import bat from '@assets/bat.png'
import Image from '@primitives/image'
import Paragraph from '@components/paragraph'
import type { Ref } from 'solid-js'
import Form from '@primitives/form'
import Counter, { createCounter } from '@components/counter'
import Phone from '@components/phone'
import Language from '@components/language'
import Theme from '@components/theme'

export default function() {
  let linkRef: Ref<any>
  const nameInput = createInput('name')
  const counter = createCounter()

  return (
    <Provider>
      <Title>bat</Title>
      <div class="full flex-center flex-col bg-gray-100/75 dark:bg-gray-800 transition-colors">
        <Image hover image={bat} />
        <Paragraph class="-mt-10 text-gray-500" key="batman" />
        <div class="flex mt-6 space-x-2 items-center">
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
          <Theme />
          <Link href={Math.round((Math.random() * 100000)).toString()}>
            <div class="btn i-carbon-location-hazard w-6 h-6" />
          </Link>
          <Phone />
          <Language />
        </div>
      </div>
    </Provider>
  )
}
