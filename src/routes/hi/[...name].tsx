import Paragraph from '@islands/paragraph'
import { Provider } from '@locales'
import { Link, useParams } from '@solidjs/router'

export default function() {
  const params = useParams()

  return (
    <Provider>
      <Title>Hello World</Title>
      <div class="full flex-center flex-col bg-gray-100/75 dark:bg-gray-800 dark:text-gray-400 space-y-2">
        <Paragraph key='hello' variable={{ name: params.name }} />
        <Link href="/">
          <div class="i-carbon-arrow-left h-7 w-7" />
        </Link>
      </div>
    </Provider>
  )
}
