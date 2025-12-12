// color.js on GitHub – can contain anything you want
function getRemoteColor() {
    const colors = ["#ff6b6b", "#4ecdc4", "#feca57", "#48dbfb", "#ff9ff9"];
    return colors[Math.floor(Math.random() * colors.length)];
}

console.log("Remote .js file executed successfully!");
