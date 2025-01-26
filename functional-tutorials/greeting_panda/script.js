// Change the text content of the name span
const spanEl = document.querySelector('span');
spanEl.textContent = `Hello Panda!`;

// Add interactivity: Eye roll when chat bubble is clicked
const chatBubble = document.getElementById('chat-bubble');
const eyes = document.querySelectorAll('.eye-roll');

// Function to trigger eye roll animation
function rollEyes() {
    eyes.forEach(eye => {
        eye.classList.toggle('roll'); // Toggle the 'roll' class to animate eyes
    });
}

// Add event listener for click on chat bubble
chatBubble.addEventListener('click', () => {
    rollEyes(); // Trigger the eye roll animation
});
