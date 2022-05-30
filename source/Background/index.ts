import 'emoji-log';
import { browser, Tabs } from 'webextension-polyfill-ts';

// console.clear();

function shouldHideSidebar(tab: Tabs.Tab): boolean {
  if (tab.status !== 'complete' || !tab.url) {
    return false;
  }

  return (
    tab.url.match(
      /https:\/\/www\.tiktok\.com\/(.*)@[a-zA-Z0-9_.]+\/video\/*/
    ) !== null
  );
}


browser.tabs.onUpdated.addListener(
  async (tabId, changeInfo, tab) => {
    // match url with tiktok personal video url
    if (!shouldHideSidebar(tab)) {
      return;
    }

    console.log('matched url', tab);
  },
  { urls: ['http://*.tiktok.com/*', 'https://*.tiktok.com/*'] }
);
