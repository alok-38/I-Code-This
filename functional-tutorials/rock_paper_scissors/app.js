const resultElement = document.getElementById('result');

// Choices
const choices = ['rock', 'paper', 'scissors'];

// Computer makes a random choice
function computerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Determine the result
function getResult(playerChoice, compChoice) {
    if (playerChoice === compChoice) {
        return 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && compChoice === 'scissors') ||
        (playerChoice === 'scissors' && compChoice === 'paper') ||
        (playerChoice === 'paper' && compChoice === 'rock')
    ) {
        return 'You won!';
    } else {
        return 'Computer won!';
    }
}

// Handle the player's choice
function handleChoice(playerChoice) {
    const compChoice = computerChoice();
    const result = getResult(playerChoice, compChoice);

    resultElement.textContent = `You chose ${playerChoice}. Computer chose ${compChoice}. ${result}`;
}

// Event listeners for the buttons
document.getElementById('rock').addEventListener('click', () => handleChoice('rock'));
document.getElementById('paper').addEventListener('click', () => handleChoice('paper'));
document.getElementById('scissors').addEventListener('click', () => handleChoice('scissors'));
