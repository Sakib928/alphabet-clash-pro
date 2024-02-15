const homePage = document.getElementById('home');
homePage.addEventListener('click', function () {
    pageSwitch('home', 'playground');
    continueGame();
})
function continueGame() {
    const alphabet = charGenerator();
    const currentAlphabet = document.getElementById('console');
    currentAlphabet.innerText = alphabet;
}
function keyBoardEvent(event) {
    const pressedKey = event.key;
    const validKey = document.getElementById('console').innerText.toLowerCase();
    // console.log(validKey);
    if (pressedKey === validKey) {
        let currentScore = document.getElementById('scoreboard').innerText;
        currentScore = parseInt(currentScore);
        currentScore = currentScore + 1;
        console.log(currentScore);
        putScore('scoreboard', currentScore);
        removeButtonEffect(pressedKey);
        continueGame();
    } else {
        let currentLife = document.getElementById('life').innerText;
        currentLife = parseInt(currentLife);
        currentLife = currentLife - 1;
        if (currentLife === 0) {
            let finalScore = document.getElementById('scoreboard').innerText;
            finalScore = parseInt(finalScore);
            console.log(finalScore);
            pageSwitch('playground', 'play-again');
            putScore('finalscore', finalScore);
        }
        putScore('life', currentLife);
    }
    setTimeout(timeOut, 60000);
}
const playAgain = document.getElementById('playagain');
playAgain.addEventListener('click', function () {
    pageSwitch('play-again', 'playground');
    putScore('life', 3);
    putScore('scoreboard', 0);
})
function timeOut() {
    let finalScore = document.getElementById('scoreboard').innerText;
    finalScore = parseInt(finalScore);
    console.log(finalScore);
    pageSwitch('playground', 'play-again');
    putScore('finalscore', finalScore);
}
document.addEventListener('keyup', keyBoardEvent);
