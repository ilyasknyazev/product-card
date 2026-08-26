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