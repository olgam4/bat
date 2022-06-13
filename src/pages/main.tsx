import Button from '@components/Button'
import Image from '@components/Image'
import { Link } from 'solid-app-router'
import { useI18n } from 'solid-i18n'

import bat from '@assets/bat.png'
import Counter, { createCounter } from '@components/Counter'

export default function () {
  const i18n = useI18n()
  const changeLanguage = () => {
    i18n.language === 'en' ? i18n.setLanguage('fr') : i18n.setLanguage('en')
  }
  const counter = createCounter()

  return (
    <div class="p-10">
      <h1>{i18n.t('hello')}</h1>
      <nav class="flex space-x-2">
        <Link href="/about" children={i18n.t('about')}/>
        <Link href="/random" children={<p>202</p>}/>
      </nav>
      <p>{counter.counter()}</p>
      <Image image={bat} />
      <Counter {...counter}/>
      <Button onClick={changeLanguage}>
        <div class="i-carbon-language" />
      </Button>
      <p>
        {i18n.t('title')}
      </p>
    </div>
  )
}
