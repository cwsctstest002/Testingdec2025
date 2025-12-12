// dynamic-red.js – Your fully controllable remote code
console.log("RED MODE ACTIVATED FROM GITHUB!");

// Make everything red
const makeEverythingRed = () => {
  const style = document.createElement('style');
  style.textContent = `
    * { color: red !important; font-weight: bold !important; background: black !important; }
    a { color: #ff6666 !important; }
    input, button, textarea, select { color: black !important; background: white !important; border: 2px solid red !important; }
    img { filter: hue-rotate(0deg) brightness(0.8); } /* Optional: keep images visible */
  `;
  document.head.appendChild(style);
};

// Run now
makeEverythingRed();

// Re-apply on dynamic sites (React, etc.)
new MutationObserver(makeEverythingRed).observe(document.body, { childList: true, subtree: true });