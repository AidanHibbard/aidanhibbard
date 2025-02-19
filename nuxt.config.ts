// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  appConfig: {
    baseUrl: process.env.BASE_URL ?? '',
  },
  runtimeConfig: {
    public: {
      honeyBadger: {
        apiKey: process.env.PUBLIC_HONEY_BADGER_API_KEY ?? '',
        environment: process.env.HONEY_BADGER_ENVIRONMENT ?? ''
      }
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@nuxt/ui',
    '@nuxtjs/robots'
  ],
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: {
    highlight: {
      theme: {
        light: 'material-theme',
        default: 'material-theme',
      },
    },
  },
  // https://color-mode.nuxtjs.org/#tailwindcss
  colorMode: {
    classSuffix: '',
  },
  compatibilityDate: '2024-07-05',
});