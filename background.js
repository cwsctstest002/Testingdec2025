// This runs in the background and injects your external script into every page

const EXTERNAL_SCRIPT_URL = "https://your-server.com/change-p-color.js";
// For testing, use a real public raw JS URL like this (a simple hello world, replace with yours):
// const EXTERNAL_SCRIPT_URL = "https://raw.githubusercontent.com/refact0r/random-p-color/main/change-p-color.js";

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed – will change <p> color on all pages");
});

// Optional: Run when user clicks the extension icon
chrome.action.onClicked.addListener((tab) => {
  injectScript(tab.id);
});

// Run automatically on every page load (you can comment this out if you want manual only)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url && tab.url.startsWith('http')) {
    injectScript(tabId);
  }
});

function injectScript(tabId) {
  // First: Fetch the external script
  fetch(EXTERNAL_SCRIPT_URL)
    .then(response => {
      if (!response.ok) throw new Error("Failed to load script: " + response.status);
      return response.text();
    })
    .then(scriptContent => {
      // Then: Execute it in the page
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        func: new Function(scriptContent)  // Safely runs the fetched code
      });
    })
    .catch(err => {
      console.error("Could not load or execute external script:", err);
    });
}