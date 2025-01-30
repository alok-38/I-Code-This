document.addEventListener('DOMContentLoaded', () => {
    // Function to inflate and deflate the balloon
    function inflateAndDeflate(object) {
        object.addEventListener('mouseenter', () => {
            // Inflate the balloon by scaling it up and translating it
            object.style.transform = 'translateY(-10px) scale(1.2)';
        });
        object.addEventListener('mouseleave', () => {
            // Deflate the balloon by resetting the transform
            object.style.transform = 'translateY(0) scale(1)';
        });
    }

    // Select all balloons
    const balloons = document.querySelectorAll('.balloon');

    // Attach event listeners to each balloon
    balloons.forEach(balloon => inflateAndDeflate(balloon));
});
