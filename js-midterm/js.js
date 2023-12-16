let currentBox = 1;
let rollingInterval;
let timer;

const rollDuration = 400; //duration that the numbers 0-9 will appear
const rollInterval = 300; //timing between each number appearign
const timerDuration = 13000; // timer

//Start Rolling Function: Making 0-9 roll through in order for each box
const digits = Array.from({ length: 10 }, (_, index) => index);

function startRolling() {
    let index = 0;

    rollingInterval = setInterval(function () {
        const currentBoxElement = document.getElementById(`box${currentBox}`);
        currentBoxElement.value = digits[index];

        index = (index + 1) % digits.length;
    }, rollInterval);
}

//Stop Rollling Function
function stopRolling() {
    clearInterval(rollingInterval);
    const currentBoxElement = document.getElementById(`box${currentBox}`);
    
    const displayedDigit = digits[currentBoxElement.value] !== undefined ? digits[currentBoxElement.value] : 0;
    
    currentBoxElement.value = displayedDigit;
}



function setNumber() {
    stopRolling();

    const currentBoxElement = document.getElementById(`box${currentBox}`);
    const displayedDigit = digits[parseInt(currentBoxElement.value)];
    currentBoxElement.value = displayedDigit;

    currentBox++;

    if (currentBox > 10) {
        if (timer) {
            showSuccessPopup();
            clearTimeout(timer);
        } else {
            showTimesUpPopup();
            restart();
        }
    } else {
        startRolling();
    }
}




function restart() {
    currentBox = 1;
    for (let i = 1; i <= 10; i++) {
        const boxElement = document.getElementById(`box${i}`);
        boxElement.value = '';
    }

    stopRolling(); 
    clearInterval(timer); 
    startRolling();
    startTimer();
}

function startTimer() {
    timer = setTimeout(function () {
        showTimesUpPopup();
        restart();
    }, timerDuration);
}

function showTimesUpPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    restart();
}

function showSuccessPopup() {
    const successPopup = document.getElementById('success-popup');
    successPopup.style.display = 'flex';
}

function closeSuccessPopup() {
    const successPopup = document.getElementById('success-popup');
    successPopup.style.display = 'none';
}

startRolling();
startTimer();
