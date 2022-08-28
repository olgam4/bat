// @refresh reload
import { Body, FileRoutes, Head, Html, Link, Meta, Scripts } from 'solid-start'
import { ErrorBoundary } from 'solid-start/error-boundary'
import { Routes } from '@solidjs/router'
import { Suspense } from 'solid-js'
import { ssr } from 'solid-js/web'

import './assets/global.css'
import { ThemeProvider } from '@context/theme'

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="manifest" href="/manifest.webmanifest" />
        <Meta name="description" content="Opinionated, batteries included, PWA using Solid and Vite" />
        <Link rel="icon" href="/favicon.ico" type="image/png" sizes="16x16" />
        <Link rel="apple-touch-icon" href="/pwa-192x192.png" sizes="192x192" />
        <Meta name="theme-color" content="#F6F7F8" />
        <Title>bat</Title>
      </Head>
      <Body>
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
      </Body>
    </Html>
  )
}
