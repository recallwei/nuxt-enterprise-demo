import type { Theme } from '~/types'

export class ThemeUtils {
  static getDefaultThemeMode(): Theme {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  }

  static changeThemeMode(theme: Theme) {
    if (theme === 'light') {
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }
}
