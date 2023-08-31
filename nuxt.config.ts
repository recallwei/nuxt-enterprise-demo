const DEFAULT_PORT = 3000

export default defineNuxtConfig({
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
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: ['~/assets/css/main.scss', '~/assets/css/fonts.scss'],
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
    presets: ['pinia']
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
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@pinia/nuxt',
    'unplugin-icons/nuxt'
  ],
  /**
   * Nuxt Image
   *
   * @see https://image.nuxt.com/
   */
  image: {}
})
