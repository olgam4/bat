/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import solid from 'solid-start/vite'
// @ts-ignore
import deno from 'solid-start-deno'
// @ts-ignore
import staticMode from 'solid-start-static'
import tsconfigPaths from 'vite-tsconfig-paths'
import { VitePWA } from 'vite-plugin-pwa'
import replace, { RollupReplaceOptions } from '@rollup/plugin-replace'
import type { VitePWAOptions } from 'vite-plugin-pwa'
import AutoImport from 'unplugin-auto-import/vite'
// @ts-ignore
import type { Options as AutoImportOptions } from 'unplugin-auto-import'

const replaceOptions: Partial<RollupReplaceOptions> = {
  __DATE__: new Date().toISOString(),
  preventAssignment: true,
}

const pwaOptions: Partial<VitePWAOptions> = {
  base: '/',
  includeAssets: ['favicon.ico', 'robots.txt'],
  manifest: {
    name: 'bat',
    short_name: 'bat',
    description: 'Opinionated, batteries included, PWA using Solid and Vite',
    theme_color: '#202A37',
    icons: [
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      }
    ]
  },
}

const autoImportOptions: Partial<AutoImportOptions> = {
  imports: [
    'solid-js',
    {
      '@solid-primitives/destructure': [
        'destructure',
      ],
      '@solid-primitives/i18n': [
        'useI18n',
        'createI18nContext',
      ],
      '@testing-library/user-event': [
        ['default', 'userEvent'],
      ],
      '@solidjs/meta': [
        'Title',
      ],
    },
  ],
}

const IS_TAURI = process && process.env.TAURI === '1'

export default defineConfig({
  test: {
    ...configDefaults,
  },
  plugins: [
    solid({ adapter: IS_TAURI ? staticMode() : deno() }),
    tsconfigPaths(),
    AutoImport(autoImportOptions),
    IS_TAURI ? undefined : VitePWA(pwaOptions),
    IS_TAURI ? undefined : replace(replaceOptions),
  ],
  build: {
    target: ['esnext'],
  },
  ssr: {
    noExternal: [
      '@motionone/solid',
      'motion',
      'solid-toast',
    ],
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
})
