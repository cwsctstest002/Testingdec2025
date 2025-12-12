chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url && /^http/.test(tab.url)) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['content.js']  // Local bundled file
    });
  }
});

// Optional: Also run on install/refresh
chrome.runtime.onInstalled.addListener(() => {
  console.log("Installed – all websites will now turn RED!");
});