const toggleButton = document.querySelector('button');
const bodyEl = document.querySelector('body');
const centerPoint = document.querySelector('.center-point');

// Get the computed background color of the body
const bodyBackgroundColor = window.getComputedStyle(bodyEl).backgroundColor;

toggleButton.addEventListener('click', () => {
    if (bodyEl.style.backgroundColor === "rgb(0, 0, 0)") {
        // Reset to the original background and button styles
        bodyEl.style.backgroundColor = bodyBackgroundColor;
        toggleButton.style.backgroundColor = ""; // Reset button background
        toggleButton.style.color = ""; // Reset button text color
        centerPoint.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        // Change body background to black
        bodyEl.style.backgroundColor = "rgb(0, 0, 0)";
        toggleButton.style.backgroundColor = bodyBackgroundColor; // Set button's background to original color
        toggleButton.style.color = "rgb(255, 255, 255)"; // Set button text color to white for visibility
        centerPoint.style.backgroundColor = "#e74c3c";
    }

    // Update the time when button is clicked
    updateTime();
    setInterval(updateTime, 1000);
});

const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');
const currentTimeEl = document.getElementById('current-time');
const currentDateEl = document.getElementById('current-date');

function updateTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    currentTimeEl.innerText = `${hours}:${minutes}:${seconds}`;
    // Optionally, you can display the current date too
    currentDateEl.innerText = `${day}, ${month + 1}/${year}`;
}
