const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minEl = document.getElementById('minutes');
const secEl = document.getElementById('seconds');

function timeLeftThisYear() {
    const now = new Date();
    const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59); // Dec 31, 23:59:59
    const millisecondsLeft = endOfYear - now;

    if (millisecondsLeft <= 0) {
        daysEl.textContent = 0;
        hoursEl.textContent = 0;
        minEl.textContent = 0;
        secEl.textContent = 0;
        return;
    }

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const oneSecond = 1000;

    const daysLeft = Math.floor(millisecondsLeft / oneDay);
    const hoursLeft = Math.floor((millisecondsLeft % oneDay) / oneHour);
    const minLeft = Math.floor((millisecondsLeft % oneHour) / oneMinute);
    const secLeft = Math.floor((millisecondsLeft % oneMinute) / oneSecond);

    daysEl.textContent = daysLeft;
    hoursEl.textContent = hoursLeft;
    minEl.textContent = minLeft;
    secEl.textContent = secLeft;
}

// Call it once immediately
timeLeftThisYear();

// Then update every second
setInterval(timeLeftThisYear, 1000);
