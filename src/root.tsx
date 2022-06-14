// @refresh reload
import { Links, Meta, Routes, Scripts } from 'solid-start/root'
import { ErrorBoundary } from 'solid-start/error-boundary'

import './assets/global.css'
import 'uno.css'

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>bat</title>
        <Meta />
        <Links />
      </head>
      <body>
        <ErrorBoundary>
          <Suspense>
            <Routes />
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </body>
    </html>
  )
}
