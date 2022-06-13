/* @refresh reload */
import { render } from 'solid-js/web'
import './assets/global.css'
import 'uno.css'

import App from './App'
import { Router } from 'solid-app-router'
import { en, fr } from '@locales'
import { createI18n, I18nProvider } from 'solid-i18n'

const i18n = createI18n({
  language: 'en',
  locales: {
    en,
    fr,
  },
})

render(() =>
  (
    <I18nProvider i18n={i18n}>
      <Router>
        <App />
      </Router>
    </I18nProvider>
  ),
  document.getElementById('root') as HTMLElement,
)
