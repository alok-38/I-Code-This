const colors = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
    yellow: "#FFFF00",
    orange: "#FFA500",
    purple: "#800080",
    cyan: "#00FFFF",
    magenta: "#FF00FF",
    black: "#000000",
    white: "#FFFFFF",
    gray: "#808080",
    pink: "#FFC0CB",
    brown: "#A52A2A",
    lime: "#00FF00",
    indigo: "#4B0082"
};

const changeBackgroundcolor = () => {
    // Get a random index based on the number of colors
    let randomIndex = Math.floor(Math.random() * Object.keys(colors).length);
    let randomColor = Object.keys(colors)[randomIndex];  // Get the color name by index
    bodyEl.style.backgroundColor = colors[randomColor];  // Set the background color
}

const buttonEl = document.querySelector('button');
const bodyEl = document.querySelector('body');

buttonEl.addEventListener('click', changeBackgroundcolor);