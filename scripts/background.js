"use strict";

chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.executeScript(null, { file: "scripts/proxy-redirect.js" });
});
