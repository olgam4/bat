import { defineConfig } from 'vitest/config'
import solid from 'solid-start'
import vercel from 'solid-start-vercel'
import tsconfigPaths from 'vite-tsconfig-paths'
import { VitePWA } from 'vite-plugin-pwa'

import type { VitePWAOptions } from 'vite-plugin-pwa'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import replace, {RollupReplaceOptions} from '@rollup/plugin-replace'

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
      ],
    }),
    Unocss(),
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
