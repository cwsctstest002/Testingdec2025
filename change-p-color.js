// change-p-color.js — This runs directly on the webpage

(function () {
  // Generate random color
  const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

  // Change all <p> tags
  document.querySelectorAll('p').forEach(p => {
    p.style.color = randomColor();
    p.style.transition = 'color 0.6s ease';
    p.style.fontWeight = 'bold'; // optional fun effect
  });

  console.log("All <p> tags now have random colors!");
})();