const buttonEl = document.getElementById("btn");

// Original styles
const originalStyle = {
    backgroundColor: "#f55153",
    color: "#fef6f5",
    textContent: "Click me!"
}

// Modified button styles
const modifiedStyle = {
    backgroundColor: "#fef6f5",
    color: "#f55153",
    textContent: "Clicked!"
};

const changeTheButton = () => {
    // Check the current text content and toggle
    if (buttonEl.textContent === modifiedStyle.textContent) {
        // Restore original styles
        buttonEl.style.backgroundColor = originalStyle.backgroundColor;
        buttonEl.style.color = originalStyle.color;
        buttonEl.textContent = originalStyle.textContent;
    } else {
        // Apply modified styles
        buttonEl.style.backgroundColor = modifiedStyle.backgroundColor;
        buttonEl.style.color = modifiedStyle.color;
        buttonEl.textContent = modifiedStyle.textContent;
    }
};

buttonEl.addEventListener("click", changeTheButton);