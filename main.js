const productCard = document.querySelector('.product-card');
const changeColorCardButton = document.querySelector('#change-card-color-button');
const grayColorHash = '#403f4f';

changeColorCardButton.addEventListener('click', () => {
    productCard.style.backgroundColor = grayColorHash;
});

