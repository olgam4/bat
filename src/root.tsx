// @refresh reload
import { FileRoutes, Links, Meta, Scripts } from 'solid-start/root'
import { ErrorBoundary } from 'solid-start/error-boundary'
import { Routes } from '@solidjs/router'
import { Suspense } from 'solid-js'

import './assets/global.css'
import { ThemeProvider } from '@context/theme'

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.webmanifest" />
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
            <ThemeProvider>
              <Routes>
                <FileRoutes />
              </Routes>
              <div class="absolute bottom-1 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
                built with ❤️ using <u><a href="https://bat.glo.quebec">bat</a></u>
              </div>
            </ThemeProvider>
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </body>
    </html>
  )
}
