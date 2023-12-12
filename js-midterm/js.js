let currentBox = 1;

function setNumber() {
    const currentBoxElement = document.getElementById(`box${currentBox}`);
    const randomNumber = Math.floor(Math.random() * 10);
    
    currentBoxElement.value = randomNumber;

    if (currentBox < 10) {
        currentBox++;
    } else {
        alert('All digits have been set! Next, lets verify your number.');
    }
}

function restart() {
    currentBox = 1;
    for (let i = 1; i <= 10; i++) {
        const boxElement = document.getElementById(`box${i}`);
        boxElement.value = '';
    }
}

