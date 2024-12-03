const container = document.getElementById('container');

const timerElement = document.getElementById('timer');
const inputElement = document.getElementById('input');

const explosionAudioElement = document.getElementById('explosion-audio');
const clickAudioElement = document.getElementById('click-audio');

const defusePassword = '1234';
let time = 10 * 60;
let timerInterval;

function playExplosionSound() {
    explosionAudioElement.play();
}


function playClickSound() {
    clickAudioElement.play();
}


function startGame(button) {
    button.style.display = "none";
    container.style.display = "block";
    timerInterval = setInterval(updateTimer, 1000);
}



function updateTimer() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (time >= 0) {
        time--;
    } else {
        clearInterval(timerInterval);
        playExplosionSound()
        timerElement.textContent = '00:00';
        inputElement.value = '';
    }
}


function removeLastDigit(button) {
    if (inputElement.value.length > 0 && button.textContent === '*') { 
        inputElement.value = inputElement.value.slice(0, inputElement.value.length - 1)
    }
}


function updateInput(button) {
    if (inputElement.value.length < inputElement.maxLength) {
        inputElement.value += button.textContent;
        lastDigit = button.textContent;
    }

}


function check() {
    const text = inputElement.value;

    if (text === defusePassword) {
        clearInterval(timerInterval);
        alert("A bomba foi desarmada.")
    }
}


