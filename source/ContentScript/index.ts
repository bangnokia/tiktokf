import { injectCss } from '../utils'
import hotkeys from 'hotkeys-js';

const enable = true;

if (enable) {
  injectCss();

  hotkeys('f', () => {
    const activeSlider = document.querySelector('.swiper-slide-active');
    const expandButton: HTMLElement | null | undefined = activeSlider?.querySelector('[class*=\'-DivExpandIconContainer\']');
    expandButton?.click();
  });
}

export { };