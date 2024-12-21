// Function to update the time every second
function updateTime() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    const timeEl = document.getElementById('time');
    timeEl.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update time immediately and then every second
updateTime();
setInterval(updateTime, 1000); // Update every 1000ms (1 second)
