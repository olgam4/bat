import App from '@layouts/app'
import { Provider } from '@locales'

export default function () {
  return (
    <Provider>
      <App />
    </Provider>
  )
}
