import type { Config } from 'tailwindcss'

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
    fontFamily: {
      sans: 'Nunito, Noto Sans SC, system-ui, -apple-system, Roboto, Helvetica Neue, Arial, sans-serif'
    },
    extend: {
      textColor: {
        primary: '#333333',
        muted: '#999999'
      }
    }
  },
  darkMode: ['class', '[data-theme="dark"]']
}
