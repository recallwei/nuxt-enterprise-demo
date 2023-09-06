import type { Theme } from '~/types'

export class ThemeUtils {
  private static readonly THEME_LOCAL_STORAGE_KEY = 'theme'

  static getTheme(): Theme {
    return <Theme>localStorage.getItem(this.THEME_LOCAL_STORAGE_KEY)
  }

  static setTheme(theme: Theme) {
    localStorage.setItem(this.THEME_LOCAL_STORAGE_KEY, theme)
  }

  static getDefaultThemeMode(): Theme {
    const theme = this.getTheme()
    switch (theme) {
      case 'light':
      case 'dark':
        return theme
      default:
        break
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  }

  static changeThemeMode(theme: Theme) {
    if (theme === 'light') {
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
      this.setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute('data-theme', 'light')
      this.setTheme('light')
    }
  }
}
