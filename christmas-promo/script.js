const buttonEl = document.querySelector('button');
const h1El = document.querySelector('h1');
const h3El = document.querySelector('h3');

const someFunction = () => {
    // Get the computed color of the h1 element
    const computedColor = window.getComputedStyle(h1El).color;

    // Check if the h1 is currently the target color
    if (computedColor === "rgb(36, 46, 76)") { // This is the RGB value of #242e4c
        h1El.style.color = "#e11a1e";
        h3El.style.color = "#d1860c";
    } else {
        h1El.style.color = "#242e4c";
    }
}

// When the button is clicked, change color
buttonEl.addEventListener('click', someFunction);

// When the mouse leaves the button, restore the original color
buttonEl.addEventListener('mouseout', () => {
    h1El.style.color = "#242e4c";
    h3El.style.color = "black";
});
