const divEl = document.querySelector('.time');
if (!divEl) {
    console.log("Div not found!");
} else {
    console.log("Div found!");
}

const today = new Date();
let time = today.getHours();
let minutes = today.getMinutes();

// Convert to 12-hour format
const amPm = time >= 12 ? 'PM' : 'AM';
if (time > 12) {
    time -= 12; // Convert to 12-hour format
} else if (time === 0) {
    time = 12; // Handle midnight (00:00)
}

// Format minutes to always show two digits
minutes = minutes < 10 ? `0${minutes}` : minutes;

// Format the time string
const formattedTime = `${time}:${minutes} ${amPm}`;

// Display the time in the div
divEl.textContent = formattedTime;
divEl.style.color = "#ffffff";