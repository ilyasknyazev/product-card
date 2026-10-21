import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import './homework-10.js';
import './homework-11.js';
import './homework-12.js';

const productCards = document.querySelectorAll('.product-card');
const changeColorAllCardButton = document.querySelector('#change-color-all-card');
const grayColorHash = '#403f4f';

changeColorAllCardButton.addEventListener('click', () => {
    productCards.forEach((card) => card.style.backgroundColor = grayColorHash);
});

const firstproductCard = document.querySelector('.product-card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');
const lightgrayColorHash = '#9392ad';

changeColorFirstCardButton.addEventListener('click', () => {
    firstproductCard.style.backgroundColor = lightgrayColorHash; 
});

const openGooglePageButton = document.querySelector('#open-google-page');
const googleURL = 'https://www.google.com';

function openGoogle() {
    const answer = confirm('Вы действительно хотите открыть Google?');

    if (answer === true) {
        window.open(googleURL);
    } else {
        return;
    }
}

openGooglePageButton.addEventListener('click', openGoogle);

const outputConsoleLogButton = document.querySelector('#output-console-log');

function outputConsoleLog(message) {
    alert(message);
    console.log(message);
}

outputConsoleLogButton.addEventListener('click', () => outputConsoleLog('Hello World'));

const pageTitle = document.querySelector('.title');

pageTitle.addEventListener('mouseover', (e) => {
    const textTitle = e.target.textContent;
    console.log(textTitle);
});

const changeBgColorButton = document.querySelector('#change-bgColor');

changeBgColorButton.addEventListener('click', () => {
    changeBgColorButton.classList.toggle('another-color');
});