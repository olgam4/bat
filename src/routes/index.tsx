import { createI18nContext, I18nContext } from '@solid-primitives/i18n'
import { en, fr } from '@locales'
import App from '@layouts/app'

const value = createI18nContext({ en, fr }, 'fr')

export default function () {
  return (
    <I18nContext.Provider value={value}>
      <App />
    </I18nContext.Provider>
  )
}
