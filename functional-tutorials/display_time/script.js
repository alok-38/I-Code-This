// Getting date and time components
setInterval(() => {
    let now = new Date();
    let currentTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const timeEl = document.querySelector('.time');
    timeEl.textContent = currentTime;
    timeEl.style.color = "#ffffff";
});
