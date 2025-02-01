const jokeElement = document.getElementById("joke");
const getJokeBtn = document.getElementById("get-joke-btn");

// Function to fetch a random joke from the Dad Jokes API
async function getRandomJoke() {
    try {
        const response = await fetch("https://icanhazdadjoke.com/", {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        });
        const data = await response.json();
        jokeElement.textContent = data.joke; // Update the joke in the paragraph
    } catch (error) {
        jokeElement.textContent = "Oops! Couldn't fetch a joke. Try again later."; // In case of an error
    }
}

// Load an initial joke when the page loads
window.onload = () => {
    getRandomJoke();
};

// Event listener to fetch a new joke when the button is clicked
getJokeBtn.addEventListener("click", getRandomJoke);