import Button from '@primitives/button'
import { languages } from '@locales'

export default function () {
  const [index, setIndex] = createSignal(0)
  const [_, { locale }] = useI18n()

  const languagesKeys = Object.keys(languages)

  const nextLanguage = () => {
    setIndex((index() + 1) % languagesKeys.length)
    locale(languagesKeys[index()])
  }

  return (
    <Button onClick={() => nextLanguage()}>
      <div class="i-carbon-language w-6 h-6" />
    </Button>
  )
}
