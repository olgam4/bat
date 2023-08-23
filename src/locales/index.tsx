import { createI18nContext, I18nContext } from '@solid-primitives/i18n'
import { FlowComponent } from 'solid-js'
import en from './en'
import fr from './fr'
import jp from './jp'
import tp from './tp'

const languages = { en, fr, jp, tp }
const context = createI18nContext(languages, 'fr')

const Provider: FlowComponent = (props) => (
  <I18nContext.Provider value={context}>
    {props.children}
  </I18nContext.Provider>
)


export {
  en,
  fr,
  jp,
  tp,
  languages,
  Provider,
}
