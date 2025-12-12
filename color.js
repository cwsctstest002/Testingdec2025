function getRemoteColor() {
    // You can put ANY logic here
    // You can compute, fetch, randomize, or apply rules

    const colors = ["#FF5733", "#4CAF50", "#2196F3", "#9C27B0"];

    // Example rule: pick based on time
    const index = new Date().getSeconds() % colors.length;

    return colors[index];
}
