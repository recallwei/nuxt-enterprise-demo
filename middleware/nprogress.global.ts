import 'nprogress/nprogress.css'

import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })

export default defineNuxtRouteMiddleware(() => {
  if (process.server) return // 跳过服务端
  NProgress.start()
  NProgress.done()
})
