// injected.js – This runs on EVERY website
(() => {
  console.log("Red Text Injected! – From GitHub");

  const makeEverythingRed = () => {
    document.body.style.color = "red";
    document.body.style.backgroundColor = "#000"; // optional dark mode

    const style = document.createElement('style');
    style.textContent = `
      * { color: red !important; font-weight: bold !important; }
      a { color: #ff4444 !important; text-decoration: underline !important; }
      input, button, textarea { color: black !important; background: white !important; }
    `;
    document.head.appendChild(style);
  };

  // Run immediately
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', makeEverythingRed);
  } else {
    makeEverythingRed();
  }

  // Re-apply on dynamic content (React/SPA sites)
  new MutationObserver(makeEverythingRed).observe(document.body, {
    childList: true,
    subtree: true
  });
})();