const DEFAULT_PORT = 3000

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-CN'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [{ rel: 'icon', href: '/favicon.ico', sizes: 'any' }]
    }
  },
  ssr: true,
  vite: {
    base: '/'
  },
  devServer: {
    port: Number(process.env.NUXT_PORT) || DEFAULT_PORT
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      }
    },
    prerender: {
      crawlLinks: false,
      routes: ['/']
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
  image: {
    dir: 'assets/img'
  }
})
