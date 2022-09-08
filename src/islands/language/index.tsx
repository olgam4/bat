import Button from "@components/button";

export default function () {
  const [index, setIndex] = createSignal(0);
  const [_, { locale }] = useI18n()

  const languages = [ 'fr', 'en', 'jp' ]

  const nextLanguage = () => {
    setIndex((index() + 1) % languages.length)
    locale(languages[index()])
  }

  return (
    <Button onClick={() => nextLanguage()}>
      <div class="i-carbon-language w-6 h-6" />
    </Button>
  )
}
