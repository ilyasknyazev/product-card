// Покраска всех карточек

const productCards = document.querySelectorAll('.product-card');
const changeColorAllCardButton = document.querySelector('#change-color-all-card');
const grayColorHash = '#403f4f';

changeColorAllCardButton.addEventListener('click', () => {
    productCards.forEach((card) => card.style.backgroundColor = grayColorHash);
});

// Покраска первой карточки

const firstproductCard = document.querySelector('.product-card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');
const lightgrayColorHash = '#9392ad';

changeColorFirstCardButton.addEventListener('click', () => {
    firstproductCard.style.backgroundColor = lightgrayColorHash; 
});

// Открыть google 

const openGooglePageButton = document.querySelector('#open-google-page');
const googleURL = 'https://www.google.com';

/*openGooglePageButton.addEventListener(('click'), () => {
    window.open(googleURL);
});*/

function openGoogle() {
    const answer = confirm('Вы действительно хотите открыть Google?');

    if (answer === true) {
        window.open(googleURL);
    } else {
        return;
    }
}

openGooglePageButton.addEventListener('click', openGoogle);

// Вывод console log

const outputConsoleLogButton = document.querySelector('#output-console-log');

function outputConsoleLog(message) {
    alert(message);
    console.log(message);
}

outputConsoleLogButton.addEventListener('click', () => outputConsoleLog('Hello World'));

// Вывод заголовка в консоль при наведени

const pageTitle = document.querySelector('.title');

pageTitle.addEventListener('mouseover', (e) => {
    const textTitle = e.target.textContent;
    console.log(textTitle);
});