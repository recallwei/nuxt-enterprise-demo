const DEFAULT_PORT = 3000

export default defineNuxtConfig({
  experimental: {
    inlineSSRStyles: false
  },
  ssr: true,
  devServer: {
    port: Number(process.env.NUXT_PORT) || DEFAULT_PORT
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  },
  css: ['~/assets/css/fonts.scss'],
  typescript: {
    strict: true,
    /**
     *  NOTE:
     *  Disable automatic type checking, avoid performance issues, use
     *  `pnpm run type:check` instead.
     *
     *  @see https://nuxt.com/docs/guide/concepts/typescript#type-checking
     */
    typeCheck: false,
    /**
     * NOTE:
     * When using VSCode and Volar with Take Over Mode，`d.ts` files
     * generated for *.vue files can be disabled.
     *
     * @see https://nuxt.com/docs/getting-started/installation#new-project
     */
    shim: false
  },
  vite: {
    base: '/'
  },
  imports: {
    presets: []
  },
  runtimeConfig: {
    public: {
      motion: {
        directives: {}
      }
    }
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@pinia/nuxt'
  ],
  /**
   * Nuxt Image
   *
   * @see https://image.nuxt.com/
   */
  image: {},
  /**
   * Nuxt TailwindCSS
   *
   * @see https://tailwindcss.nuxtjs.org/
   */
  tailwindcss: {
    viewer: true
  },
  colorMode: {
    classSuffix: ''
  }
})
