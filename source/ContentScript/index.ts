import { injectCss, magicCss } from '../utils'
import hotkeys from 'hotkeys-js';

const enable = true;

if (enable) {
  const style = injectCss();

  hotkeys('f', () => {
    const activeSlider = document.querySelector('.swiper-slide-active');
    const expandButton: HTMLElement | null | undefined = activeSlider?.querySelector('[class*=\'-DivExpandIconContainer\']');
    expandButton?.click();
  });

  // press T to toggle style on and off
  hotkeys('t', () => {
    if (style.textContent === '') {
      style.textContent = magicCss
    } else {
      style.textContent = ''
    }
  })
}

export { };