import { defineConfig } from 'vite'
import solid from 'solid-start'
import vercel from 'solid-start-vercel'
import tsconfigPaths from 'vite-tsconfig-paths'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'

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
  ],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
})
