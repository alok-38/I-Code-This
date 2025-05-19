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


// Snowfall
const body = document.body;
const closeBtnSVG = document.querySelector('svg');
const mainEl = document.querySelector('main');
const computedColorBody = window.getComputedStyle(body).color;

let snowInterval = null;

const createSnowFall = () => {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snow");
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
  snowflake.style.opacity = Math.random();
  snowflake.style.width = snowflake.style.height = `${Math.random() * 10 + 10}px`;

  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 5000);
};

closeBtnSVG.addEventListener('click', (event) => {
  event.stopPropagation();
  mainEl.style.display = "none";
  document.body.style.backgroundColor = "black";
  if (!snowInterval) {
    snowInterval = setInterval(createSnowFall, 200);
  }
});

document.body.addEventListener("click", (e) => {
  const isClickInsideMain = mainEl.contains(e.target);
  const isClickOnSVG = closeBtnSVG.contains(e.target);

  if (!isClickInsideMain && !isClickOnSVG) {
    mainEl.style.display = "block";
    document.body.style.backgroundColor = ""; // restore original
    if (snowInterval) {
      clearInterval(snowInterval);
      snowInterval = null;
    }
  }
});
