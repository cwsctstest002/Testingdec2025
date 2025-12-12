// function getRemoteColor() {
//     // You can put ANY logic here
//     // You can compute, fetch, randomize, or apply rules

//     const colors = ["#FF5733", "#4CAF50", "#2196F3", "#9C27B0"];

//     // Example rule: pick based on time
//     const index = new Date().getSeconds() % colors.length;

//     return colors[index];
// }

// function getRemoteColor() {
//     return "#ff5733";
// }

// https://raw.githubusercontent.com/.../color.js

function getRemoteColor() {
    // You can put ANY logic here — it runs in background!
    const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24", "#6c5ce7", "#e84393"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Optional: do something on load
console.log("%c Remote color.js loaded successfully!", "color: #00ff00; font-size: 16px");
