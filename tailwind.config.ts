import type { Config } from 'tailwindcss'

const DEFAULT_FONTS =
  'Nunito, system-ui, -apple-system, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif'

export default <Partial<Config>>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.ts',
    './app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        default: [DEFAULT_FONTS]
      },
      textColor: {
        muted: '#999999'
      }
    }
  },
  plugins: [],
  darkMode: ['class', '[data-theme="dark"]']
}
