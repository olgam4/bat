import Button from "@components/button";

export default function () {
  const [_, { locale }] = useI18n()


  const nextLanguage = () => {
    const next = locale() === 'en' ? 'fr' : 'en'
    locale(next)
  }

  return (
    <Button onClick={() => nextLanguage()}>
      <div class="i-carbon-language w-6 h-6" />
    </Button>
  )
}
