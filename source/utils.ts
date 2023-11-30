export function injectCss(): HTMLElement {
  const style = document.createElement('style')
  style.textContent = magicCss
  document.head.append(style)
  return style
}


export const magicCss = `
div[class*='-DivBrowserModeContainer'] div[class*='-DivContentContainer'] {
  display: none !important;
}
`;