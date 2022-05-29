import 'emoji-log';
import { browser } from "webextension-polyfill-ts";

console.log('background script loaded')

browser.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  // what should we do here
});
