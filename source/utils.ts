export function injectCss(): void {
  const style = document.createElement('style')
  style.textContent = `
div[class*='-DivBrowserModeContainer'] div[class^='tiktok-'][class*='-DivContentContainer'] {
  display: none !important;
}
`
  document.head.append(style)
  console.log('append custom style', style)
}
