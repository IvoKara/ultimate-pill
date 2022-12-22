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
    { 'px-grid-br': 'px-4 md:px-6 lg:px-10 xl:px-16 xxl:px-20' },
    { 'mx-grid-br': 'mx-4 md:mx-6 lg:mx-10 xl:mx-16 xxl:mx-20' },
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
      fonts: {
        sans: ['DM Sans', 'Inter'],
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
