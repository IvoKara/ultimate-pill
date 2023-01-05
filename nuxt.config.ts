export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image-edge',
  ],
  image: {
    screens: {
      'sm': 390,
      'md': 768,
      'lg': 992,
      'xl': 1400,
      'xxl': 1920,
      '2xl': 1920,
      '3xl': 2560,
    },

  },
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  colorMode: {
    classSuffix: '',
  },
})
