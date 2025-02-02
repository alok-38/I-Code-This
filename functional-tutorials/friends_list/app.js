document.addEventListener('DOMContentLoaded', () => {
    const followButtons = document.querySelectorAll('.friends-list button');

    followButtons.forEach(button => {
        // Initial button setup if already in 'Following' state
        if (button.classList.contains('followed')) {
            button.textContent = 'Following';
            button.style.color = "#6c559c"; // Set color to original state for 'Following'
        }

        // Click event to toggle Follow/Following/Unfollow states
        button.addEventListener('click', () => {
            if (button.textContent === 'Follow') {
                button.textContent = 'Following';
                button.classList.add('followed');
                button.style.color = "#6c559c";  // Color for Following
            } else if (button.textContent === 'Following') {
                button.textContent = 'Unfollow';
                button.style.color = "red"; // Color for Unfollow
            } else if (button.textContent === 'Unfollow') {
                button.textContent = 'Follow'; // Reset to Follow
                button.classList.remove('followed');
                button.style.color = "white"; // Color for Follow
            }
        });

        // Hover event to change text to 'Unfollow' if the button says 'Following'
        button.addEventListener('mouseenter', () => {
            if (button.textContent === 'Following') {
                button.textContent = 'Unfollow';
                button.style.color = "red"; // Color for Unfollow
            }
        });

        // Hover event to reset text back to 'Following' when mouse leaves
        button.addEventListener('mouseleave', () => {
            if (button.textContent === 'Unfollow') {
                button.textContent = 'Following';
                button.style.color = "#6c559c"; // Color for Following
            }
        });
    });
});
