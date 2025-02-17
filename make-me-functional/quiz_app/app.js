const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", isCorrect: false },
            { text: "Madrid", isCorrect: false },
            { text: "Paris", isCorrect: true },
            { text: "Rome", isCorrect: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", isCorrect: false },
            { text: "Mars", isCorrect: true },
            { text: "Jupiter", isCorrect: false },
            { text: "Saturn", isCorrect: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic", isCorrect: false },
            { text: "Indian", isCorrect: false },
            { text: "Arctic", isCorrect: false },
            { text: "Pacific", isCorrect: true }
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { text: "Shakespeare", isCorrect: true },
            { text: "Dickens", isCorrect: false },
            { text: "Austen", isCorrect: false },
            { text: "Hemingway", isCorrect: false }
        ]
    }
];

// Function to render quiz
function renderQuiz() {
    const questionWrappers = document.querySelectorAll(".question-wrapper");

    questionWrappers.forEach((wrapper, questionIndex) => {
        const questionElement = wrapper.querySelector(".question");
        const answers = wrapper.querySelectorAll(".answer-wrapper label");

        // Set the question text
        questionElement.textContent = questions[questionIndex].question;

        // Loop through each answer and assign the text and correctAnswer index
        answers.forEach((answerLabel, answerIndex) => {
            answerLabel.textContent = questions[questionIndex].answers[answerIndex];

            // Add event listener to handle answer selection
            answerLabel.addEventListener("click", () => handleAnswerClick(answerLabel, questionIndex, answerIndex));
        });
    });
}

// Function to handle the answer click
function handleAnswerClick(answerLabel, questionIndex, answerIndex) {
    const answerWrappers = answerLabel.closest(".quiz-form").querySelectorAll(".answer-wrapper");

    // Remove the selected class and feedback classes (correct, incorrect) from all answers
    answerWrappers.forEach(wrapper => {
        const label = wrapper.querySelector("label");
        label.classList.remove("selected", "correct", "incorrect");
    });

    // Add the selected class to the clicked label
    answerLabel.classList.add("selected");

    // Check if the selected answer is correct and apply corresponding class
    if (answerIndex === questions[questionIndex].correctAnswerIndex) {
        answerLabel.classList.add("correct");
    } else {
        answerLabel.classList.add("incorrect");
    }
}

// Call renderQuiz when the page loads
window.onload = renderQuiz;