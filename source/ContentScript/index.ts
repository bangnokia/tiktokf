import { injectCss } from '../utils'
import hotkeys from 'hotkeys-js';

injectCss();

hotkeys('f', () => {
  console.log('F pressed');
  const activeSlider = document.querySelector('.swiper-slide-active');
  const expandButton = activeSlider?.querySelector('[class*=\'-DivExpandIconContainer\']');
  expandButton?.click();
});



export { };
