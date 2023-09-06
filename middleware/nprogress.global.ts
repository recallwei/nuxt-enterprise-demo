import 'nprogress/nprogress.css'

import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })

export default defineNuxtRouteMiddleware(() => {
  if (process.server) return // Skip Server Side
  NProgress.start()
  NProgress.done()
})
