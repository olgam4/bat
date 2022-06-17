import { Title } from 'solid-meta'

import App from '@layouts/app'
import { Provider } from '@locales'

export default function () {
  return (
    <Provider>
      <Title>bat</Title>
      <App />
    </Provider>
  )
}
