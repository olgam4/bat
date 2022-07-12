// @refresh reload
import { Links, Meta, Routes, Scripts } from 'solid-start/root'
import { ErrorBoundary } from 'solid-start/error-boundary'
import { Suspense } from 'solid-js'

import './assets/global.css'
import { Title } from 'solid-meta'

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <script src="registerSW.js"></script>
        <meta name="description" content="Opinionated, batteries included, PWA using Solid and Vite" />
        <link rel="icon" href="/favicon.ico" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/pwa-192x192.png" sizes="192x192" />
        <meta name="theme-color" content="#F6F7F8" />
        <Title>bat</Title>
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
