function pageHide(pageId) {
    let targetPage = document.getElementById(pageId).classList;
    targetPage.add('hidden');
}
function pageShow(pageId) {
    let targetPage = document.getElementById(pageId).classList;
    targetPage.remove('hidden');
}
function pageSwitch(pageFrom, pageTo) {
    pageHide(pageFrom);
    pageShow(pageTo);
}
function charGenerator() {
    let alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let randomNum = Math.round(Math.random() * 25);
    let display = document.getElementById('console');
    display.innerText = alphabets[randomNum];
    buttonEffect(alphabets[randomNum]);
    return alphabets[randomNum];
}
function putScore(id, value) {
    let scorePlace = document.getElementById(id);
    scorePlace.innerText = value;
}
function buttonEffect(buttonId) {
    let element = document.getElementById(buttonId);
    element.style.background = 'orange'
}
function removeButtonEffect(buttonId) {
    let element = document.getElementById(buttonId);
    element.style.background = "";
}