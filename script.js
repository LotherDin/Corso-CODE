let timer;
let score = 0;
document.getElementById('score').textContent = `Score: ${score}`;
let correctButtonIndex;

function setSeconds(numbers) {
    document.getElementById('timer').textContent = "Timer 00:0" + numbers;
}


function startTimer() {
    let seconds = 5;
    setSeconds(seconds)
    timer = setInterval(() => {

        if (seconds === 0) {
            clearInterval(timer);
            decrementScore();
            showButtons();
            startTimer();
        }
        seconds = seconds - 1;

        if (seconds >= 0) { setSeconds(seconds) }

    }, 1000);
}

function showButtons() {
    const buttonContainer = document.getElementById('buttons-container');
    buttonContainer.innerHTML = '';
    const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple'];
    correctButtonIndex = Math.floor(Math.random() * colors.length);

    for (let i = 0; i < colors.length; i++) { //qui creo i bottoni in html tramite javasc
        const button = document.createElement('button');
        const buttonText = document.createElement('span');
        buttonText.textContent = colors[i];
        buttonText.style.color = i === correctButtonIndex ? colors[i] : getRandomColor();
        button.appendChild(buttonText);
        button.addEventListener('click', () => checkAnswer(i));
        buttonContainer.appendChild(button);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function checkAnswer(index) {

    if (index === correctButtonIndex) {
        score++;

    } else {

        if (score > 0) { score-- }
    }

    document.getElementById('score').textContent = `Score: ${score}`;
    clearInterval(timer);
    startTimer();
    showButtons();
}

function decrementScore() {
    score = Math.max(0, score - 1);
    document.getElementById('score').textContent = `Score: ${score}`;
}

startTimer();
showButtons();