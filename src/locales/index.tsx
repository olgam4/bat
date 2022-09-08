import { createI18nContext, I18nContext } from '@solid-primitives/i18n'
import { FlowComponent } from 'solid-js'
import en from './en'
import fr from './fr'
import jp from './jp'

const context = createI18nContext({ en, jp, fr }, 'fr')

const Provider: FlowComponent = (props) => (
  <I18nContext.Provider value={context}>
    {props.children}
  </I18nContext.Provider>
)


export {
  en,
  fr,
  jp,
  Provider,
}
