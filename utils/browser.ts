export const openWindow = (url: string) => {
  const w: Window | null = window.open('about:blank')
  if (w) {
    w.opener = null
    w.location.href = url
  }
}
