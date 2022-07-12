import { defineConfig } from 'vitest/config'
import solid from 'solid-start'
// @ts-ignore
import vercel from 'solid-start-vercel'
import tsconfigPaths from 'vite-tsconfig-paths'
import { VitePWA } from 'vite-plugin-pwa'
import replace, {RollupReplaceOptions} from '@rollup/plugin-replace'
import type { VitePWAOptions } from 'vite-plugin-pwa'
import AutoImport from 'unplugin-auto-import/vite'

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
    theme_color: '#ffffff',
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

export default defineConfig({
  test: {
    environment: 'jsdom',
    transformMode: {
      web: [/.[jt]sx?/],
    },
    deps: {
      inline: [/solid-js/],
    },
    coverage: {
      all: true,
      reporter: ['html', 'json', 'text'],
      include: ['**/*.tsx', '**/*.ts'],
      exclude: ['entry**', 'root.tsx', 'locales/*.ts'],
      src: ['src'],
    },
  },
  plugins: [
    solid({ adapter: vercel() }),
    tsconfigPaths(),
    AutoImport({
      imports: [
        'solid-app-router',
        'solid-js',
        'vitest',
        {
          '@solid-primitives/destructure': [
            'destructure',
          ],
          'solid-testing-library': [
            'getByRole',
            ['render', 'renderTest'],
          ],
          '@solid-primitives/i18n': [
            'useI18n',
            'createI18nContext',
          ],
          '@testing-library/user-event': [
            ['default', 'userEvent'],
          ],
          'solid-meta': [
            'Title',
          ],
        },
      ],
    }),
    VitePWA(pwaOptions),
    replace(replaceOptions),
  ],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
})
