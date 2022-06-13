import Button from "@components/Button";
import Example from "@components/Example";
import { createI18n, I18nProvider } from "solid-i18n";
import en from "./locales/en";
import fr from "./locales/fr";

const i18n = createI18n({
  language: 'en',
  locales: {
    en,
    fr,
  },
})

export default function App() {
  return (
    <I18nProvider i18n={i18n}>
      <div class="p-4 text-red-300">
        <h1>Hello World</h1>
        <Example className="text-blue-400 px-4" />
        <Button />
      </div>
    </I18nProvider>
  )
}
