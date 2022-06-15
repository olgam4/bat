import { defineConfig } from 'vite'
import solid from 'solid-start'
import vercel from 'solid-start-vercel'
import tsconfigPaths from 'vite-tsconfig-paths'
import { VitePWA } from 'vite-plugin-pwa'

import type { VitePWAOptions } from 'vite-plugin-pwa'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import replace from '@rollup/plugin-replace'

const replaceOptions = { __DATE__: new Date().toISOString() }
const pwaOptions: Partial<VitePWAOptions> = {
  mode: 'development',
  registerType: "prompt",
  base: '/',
  workbox: {
    globPatterns: ['**/*.{js,css,png,jpg,jpeg,svg,gif,woff,woff2,ttf,eot}'],
  },
  includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt'],
  manifest: {
    name: 'bat',
    short_name: 'bat',
    description: 'Waw',
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
  devOptions: {
    enabled: process.env.SW_DEV === 'true',
    type: 'module',
    navigateFallback: 'index.html',
  }
}

export default defineConfig({
  plugins: [
    solid({ adapter: vercel() }),
    tsconfigPaths(),
    AutoImport({
      imports: [
        'solid-app-router',
        'solid-js',
      ],
    }),
    Unocss(),
    VitePWA(pwaOptions),
    replace(replaceOptions),
  ],
  build: {
    sourcemap: true,
    target: 'esnext',
    polyfillDynamicImport: false,
  },
})
