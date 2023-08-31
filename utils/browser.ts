export class BrowserUtils {
  static setClipBoardText(text: string): Promise<void> {
    return navigator.clipboard.writeText(text)
  }

  static openNewWindow(url: string) {
    const w: Window | null = window.open('about:blank')
    if (w) {
      w.opener = null
      w.location.href = url
    }
  }

  static downloadFile(imgURL: string, fileName: string) {
    const aElement = document.createElement('a')
    aElement.href = imgURL
    aElement.setAttribute('download', fileName)
    aElement.click()
  }
}
