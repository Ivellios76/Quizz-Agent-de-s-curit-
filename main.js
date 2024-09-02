let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 45;
let questionContainer = document.getElementById('quiz-container');
let nextButton = document.getElementById('next-button');
let timerContainer = document.getElementById('timer');

function displayQuestion() {
    if (currentQuestionIndex < quiz.length) {
        currentQuestion = quiz[currentQuestionIndex];
        let options = shuffle(Object.entries(currentQuestion.options));
        questionContainer.innerHTML = `
            <h2>${currentQuestion.question}</h2>
            ${options.map(option => `<div class="option" data-answer="${option[0]}">${option[1]}</div>`).join('')}
        `;
        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', checkAnswer);
        });
        startTimer();
    } else {
        displayScore();
    }
}

function checkAnswer(event) {
    let selectedAnswer = event.target.getAttribute('data-answer');
    if (selectedAnswer === currentQuestion.correct) {
        score++;
    }
    currentQuestionIndex++;
    clearInterval(timer);
    displayQuestion();
}

function displayScore() {
    let noteSur20 = (score / quiz.length) * 20;
    questionContainer.innerHTML = `
        <h2>Quiz terminé !</h2>
        <p>Votre score : ${score} / ${quiz.length}</p>
        <p>Votre note : ${noteSur20.toFixed(2)} / 20</p>
    `;
    nextButton.style.display = 'none';
    timerContainer.style.display = 'none';
}

function startTimer() {
    timeLeft = 45;
    timerContainer.innerHTML = `Temps restant : ${timeLeft} secondes`;
    timer = setInterval(() => {
        timeLeft--;
        timerContainer.innerHTML = `Temps restant : ${timeLeft} secondes`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            currentQuestionIndex++;
            displayQuestion();
        }
    }, 1000);
}

nextButton.addEventListener('click', displayQuestion);

document.addEventListener('DOMContentLoaded', () => {
    displayQuestion();
});
