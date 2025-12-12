// This file is hosted at:
// https://raw.githubusercontent.com/cwsctstest002/Testingdec2025/main/change-p-color.js

(() => {
  console.log("Injected script loaded from GitHub!");

  const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

  const applyStyles = () => {
    document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div').forEach(el => {
      el.style.color = randomColor();
      el.style.fontWeight = 'bold';
      el.style.textShadow = '1px 1px 3px rgba(0,0,0,0.3)';
    });
  };

  // Run immediately
  applyStyles();

  // Re-run every 3 seconds (fun effect)
  setInterval(applyStyles, 3000);

  // Or react to DOM changes
  new MutationObserver(applyStyles).observe(document.body, { childList: true, subtree: true });
<<<<<<< HEAD
})();
=======
})();
>>>>>>> d2e91e0e59d0b519e37642a113fbf6ff40eab9b9
