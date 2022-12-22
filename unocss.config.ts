import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetForms } from '@julr/unocss-preset-forms'
import designBreakpoints from './breakpoints.json'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    { 'bg-lofi-gray-1': 'bg-[#DFDFDF]' },
  ],

  presets: [

    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetForms(),

    presetIcons({
      scale: 1.3,
    }),

    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Inter, DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],

  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    breakpoints: designBreakpoints,
  },
})
