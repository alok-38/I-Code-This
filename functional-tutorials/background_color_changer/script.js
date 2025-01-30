// Function to generate a random RGB color
function getRandomRGB() {
    const r = Math.floor(Math.random() * 256); // Random value between 0 and 255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

// Function to calculate brightness of the RGB color (simple luminance formula)
function calculateBrightness(rgb) {
    const [r, g, b] = rgb.match(/\d+/g).map(Number);
    // Formula to calculate brightness (luminosity)
    return (r * 299 + g * 587 + b * 114) / 1000;
}

// Function to change the background color and update the RGB text
function changeBackgroundColor() {
    const randomColor = getRandomRGB();
    document.body.style.backgroundColor = randomColor; // Change the background color of the body

    // Update the text inside the <p> element with the new RGB value
    const colorText = document.getElementById('color');
    colorText.textContent = randomColor;

    // Calculate the brightness of the background color
    const brightness = calculateBrightness(randomColor);

    // If the brightness is low (dark background), change the text to white; otherwise, black
    if (brightness < 128) {
        colorText.style.color = "#ffffff"; // White text
    } else {
        colorText.style.color = "#000000"; // Black text
    }
}

const buttonEl = document.querySelector('button');
// Add event listener to the button to change background color when clicked
buttonEl.addEventListener('click', changeBackgroundColor);
