// Get the button element
const button = document.querySelector('button');

// Add event listener for click event
button.addEventListener('click', function () {
    if (button.style.backgroundColor === '#f55153') {
        // Change background color
        button.style.backgroundColor = '#fef6f5';
        // Change text color
        button.style.color = '#f55153';
        // Change text content
        button.textContent = 'Clicked!';
    } else {
        // Revert the background color and text color to initial values
        button.style.backgroundColor = '#f55153';
        button.style.color = '#ffffff'; // Assuming white text
        button.textContent = 'Click me!';
    }
});
