const toggler = document.getElementById("toggler");
const bodyEl = document.body; // Access the body directly
const mainEl = document.querySelector('main');

// Listen for the change event to toggle the theme
toggler.addEventListener('change', function () {
    if (toggler.checked) {
        // Dark mode: Apply styles directly
        bodyEl.style.backgroundColor = "#021322";
        mainEl.style.color = "#ffffff";  // Change text color to white in dark mode
    } else {
        // Light mode: Reset styles
        bodyEl.style.backgroundColor = "";  // Reset to default background
        mainEl.style.color = "";  // Reset to default text color
    }
});
