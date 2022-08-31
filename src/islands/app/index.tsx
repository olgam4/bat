import type { Ref } from 'solid-js'

import { Link } from '@solidjs/router'
import bat from '@assets/bat.png'
import Image from '@components/image'
import Counter, { createCounter } from '@components/counter'
import Button from '@components/button'
import ReloadPrompt from '@components/reload'
import Form from '@components/form'
import { createInput } from '@components/form/input'
import { ThemeContext } from '@context/theme'

import { createApp } from './reactivity'

const ReloadPromptCheck = typeof window !== 'undefined' ?
  () => <ReloadPrompt />
  :
  () => null

export default function() {
  let linkRef: Ref<any>

  const counter = createCounter()
  const nameInput = createInput('name')
  const {
    phoneCall,
    nextLanguage,
  } = createApp()

  const [theme, { toggleTheme }] = useContext(ThemeContext)

  return (
    <div class="full flex-center flex-col bg-gray-100/75 dark:bg-gray-800">
      <ReloadPromptCheck />
      <Image image={bat} />
      <div class="flex -mt-10 space-x-2 items-center">
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
        <Button onClick={toggleTheme}>
          {() => {
            return theme.name === 'dark' ?
              <div class="i-carbon-sun w-6 h-6" /> :
              <div class="i-carbon-moon w-6 h-6" />
          }}
        </Button>
        <Link href={Math.round((Math.random() * 100000)).toString()}>
          <div class="btn i-carbon-location-hazard w-6 h-6" />
        </Link>
        <Button onClick={() => {
          phoneCall(console.log)
        }}>
          <div class="i-carbon-phone-voice w-6 h-6" />
        </Button>
        <Button onClick={() => nextLanguage()}>
          <div class="i-carbon-language w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}
