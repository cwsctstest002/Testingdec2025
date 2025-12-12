// Any logic here runs when getRemoteColor() is called
function getRemoteColor() {
  const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24"];
  return colors[Math.floor(Date.now() % colors.length)]; // Dynamic example
}
