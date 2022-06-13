import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';
import AutoImport from 'unplugin-auto-import/vite';
import Unocss from 'unocss/vite';

export default defineConfig({
  plugins: [
    solidPlugin(),
    tsconfigPaths(),
    VitePWA(),
    AutoImport(),
    Unocss(),
  ],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
});
