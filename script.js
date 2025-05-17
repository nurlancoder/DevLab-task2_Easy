const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentQuestionEl = document.getElementById('current-question');
const totalQuestionsEl = document.getElementById('total-questions');
const progressBar = document.getElementById('progress-bar');
const scoreEl = document.getElementById('score');
const maxScoreEl = document.getElementById('max-score');
const scorePercentageEl = document.getElementById('score-percentage');
const resultMessageEl = document.getElementById('result-message');
const timerEl = document.getElementById('timer');
const categorySelect = document.getElementById('category');
const highScoreEl = document.getElementById('high-score');

let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timeLeft = 15;
let hasAnswered = false;
let filteredQuestions = [];

totalQuestionsEl.textContent = quizQuestions.length;
maxScoreEl.textContent = quizQuestions.length;

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', loadNextQuestion);
restartBtn.addEventListener('click', restartQuiz);
shareBtn.addEventListener('click', shareResults);
categorySelect.addEventListener('change', filterQuestions);

function filterQuestions() {
    const selectedCategory = categorySelect.value;
    if (selectedCategory === 'all') {
        filteredQuestions = [...quizQuestions];
    } else {
        filteredQuestions = quizQuestions.filter(q => q.category === selectedCategory);
    }
    totalQuestionsEl.textContent = filteredQuestions.length;
    maxScoreEl.textContent = filteredQuestions.length;
}

function startQuiz() {
    filterQuestions();
    if (filteredQuestions.length === 0) {
        alert('Seçilen kategoride soru bulunmamaktadır!');
        return;
    }
    
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    loadQuestion(0);
    updateProgressBar();
    showHighScore();
}

function loadQuestion(index) {
    const question = filteredQuestions[index];
    
    hasAnswered = false;
    currentQuestionIndex = index;
    nextBtn.classList.add('hidden');
    
    currentQuestionEl.textContent = index + 1;
    
    questionText.textContent = question.question;
    
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, i) => {
        const optionEl = document.createElement('div');
        optionEl.className = 'option';
        
        const letterEl = document.createElement('span');
        letterEl.className = 'option-letter';
        letterEl.textContent = String.fromCharCode(65 + i); 
        
        const optionTextEl = document.createElement('span');
        optionTextEl.textContent = option;
        
        optionEl.appendChild(letterEl);
        optionEl.appendChild(optionTextEl);
        
        optionEl.addEventListener('click', () => {
            if (hasAnswered) return; 
            checkAnswer(i);
        });
        
        optionsContainer.appendChild(optionEl);
    });
    
    resetTimer();
    startTimer();
}

function checkAnswer(selectedIndex) {
    if (hasAnswered) return;
    
    hasAnswered = true;
    clearInterval(timerInterval); 
    
    const correctIndex = filteredQuestions[currentQuestionIndex].correctIndex;
    const options = optionsContainer.querySelectorAll('.option');
    
    options.forEach((option, i) => {
        if (i === correctIndex) {
            option.classList.add('correct');
        } else if (i === selectedIndex && selectedIndex !== correctIndex) {
            option.classList.add('incorrect');
        }
    });
    
    if (selectedIndex === correctIndex) {
        score++;
        playCorrectSound();
    } else {
        playIncorrectSound();
    }
    
    nextBtn.classList.remove('hidden');
}

function loadNextQuestion() {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
        loadQuestion(currentQuestionIndex + 1);
        updateProgressBar();
    } else {
        showResults();
    }
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / filteredQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function showResults() {
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    
    scoreEl.textContent = score;
    const percentage = Math.round((score / filteredQuestions.length) * 100);
    scorePercentageEl.textContent = `${percentage}%`;
    
    if (percentage >= 80) {
        resultMessageEl.textContent = 'Mükemmel! Bu konuda uzmanlaşmışsın!';
        showConfetti();
    } else if (percentage >= 60) {
        resultMessageEl.textContent = 'İyi iş! Sağlam bir anlayışa sahipsin.';
    } else if (percentage >= 40) {
        resultMessageEl.textContent = 'Fena değil! Biraz daha pratik yaparsan daha iyi olacak.';
    } else {
        resultMessageEl.textContent = 'Çalışmaya devam et! Pratik yaptıkça gelişeceksin.';
    }
    
    saveHighScore(score);
    showHighScore();
}

function saveHighScore(currentScore) {
    const highScore = parseInt(localStorage.getItem('quizHighScore')) || 0;
    
    if (currentScore > highScore) {
        localStorage.setItem('quizHighScore', currentScore.toString());
        highScoreEl.textContent = currentScore;
    }
}

function showHighScore() {
    const highScore = parseInt(localStorage.getItem('quizHighScore')) || 0;
    highScoreEl.textContent = highScore;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultsScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        
        if (timeLeft <= 5) {
            timerEl.style.color = '#ef4444'; 
        }
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            
            if (!hasAnswered) {
                const correctIndex = filteredQuestions[currentQuestionIndex].correctIndex;
                const options = optionsContainer.querySelectorAll('.option');
                
                options[correctIndex].classList.add('correct');
                hasAnswered = true;
                nextBtn.classList.remove('hidden');
            }
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timeLeft = 15;
    timerEl.textContent = timeLeft;
    timerEl.style.color = '#4b5563';
}

function shareResults() {
    const text = `Quiz skorum: ${score}/${filteredQuestions.length} (${Math.round((score / filteredQuestions.length) * 100)}%)`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Quiz Sonuçlarım',
            text: text,
            url: window.location.href
        }).catch(console.error);
    } else {
        navigator.clipboard.writeText(text).then(() => {
            alert('Sonuçlar panoya kopyalandı!');
        }).catch(console.error);
    }
}

function showConfetti() {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
    }, 250);
}

const correctSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-tone-2870.mp3');
const incorrectSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3');

function playCorrectSound() {
    correctSound.currentTime = 0;
    correctSound.play();
}

function playIncorrectSound() {
    incorrectSound.currentTime = 0;
    incorrectSound.play();
}


document.addEventListener('DOMContentLoaded', () => {
    showHighScore();
    filterQuestions();
}); 
