import Button from "@components/Button"
import Example from "@components/Example"
import { en, fr } from "@locales"
import { createI18n, I18nProvider } from "solid-i18n"
import { createSignal } from "solid-js"

const i18n = createI18n({
  language: 'en',
  locales: {
    en,
    fr,
  },
})

export default function Index() {
  const [lang, setLang] = createSignal('en')

  const changeLang = () => {
    setLang(lang() === 'en' ? 'fr' : 'en')
    i18n.setLanguage(lang())
  }

  return (
    <I18nProvider i18n={i18n}>
      <div class="p-4 text-red-300">
        <h1>{i18n.t('hello')}</h1>
        <Example className="text-blue-400 px-4" />
        <Button onClick={changeLang}>
          <div class="i-carbon-language" />
        </Button>
        <p>
          {i18n.t('title')}
        </p>
      </div>
    </I18nProvider>
  )
}
