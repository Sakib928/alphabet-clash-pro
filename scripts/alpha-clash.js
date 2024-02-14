function pageHide(pageName) {
    let x = document.getElementById(pageName).classList;
    x.add('hidden');
}
function pageShow(pageName) {
    let x = document.getElementById(pageName).classList;
    x.remove('hidden');
}
function pageSwitch(page1, page2) {
    pageHide(page1);
    pageShow(page2);
}
function charGenerator() {
    let alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let randomNum = Math.floor(Math.random() * 26 + 0);
    let display = document.getElementById('console');
    display.innerText = alphabets[randomNum];
}
function putScore(id, value) {
    let scorePlace = document.getElementById(id);
    scorePlace.innerText = value;
}
let score = 0, lives = 5, valid = 'y';
window.addEventListener('keydown', function (event) {
    let pressedKey = event.key;
    valid = document.getElementById('console').innerText;
    charGenerator();
    let button = this.document.getElementById(pressedKey);
    button.style.background = "orange";
}
)
window.addEventListener('keyup', function () {
    let button = this.document.getElementById(pressedKey);
    button.style.background = "";
}
)