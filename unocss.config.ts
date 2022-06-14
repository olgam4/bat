import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'full': 'absolute top-0 left-0 right-0 bottom-0',
    'flex-center': 'flex items-center justify-center',
  },
  presets: [
    presetUno(),
    presetIcons(),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
}) 
