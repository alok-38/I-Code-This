// Function to handle mouse enter and leave for inflating and deflating the balloon
function setBalloonEvents(balloonElement) {
    balloonElement.addEventListener('mouseenter', () => {
        balloonElement.style.transform = 'scale(1.2)'; // Inflate balloon
    });

    balloonElement.addEventListener('mouseleave', () => {
        balloonElement.style.transform = 'scale(1)'; // Deflate balloon
    });
}

// Select all balloon elements
const balloons = document.querySelectorAll('.balloon');
console.log(balloons);  // Log to confirm correct elements are selected

// Attach event listeners to each balloon
balloons.forEach(balloon => setBalloonEvents(balloon));