import { Title } from 'solid-meta'

import Name from '@layouts/name'
import { Provider } from '@locales'

export default function () {
  return (
    <Provider>
      <Title>Hi</Title>
      <Name />
    </Provider>
  )
}
