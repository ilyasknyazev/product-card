const subscribeForm = document.querySelector('#subscribe-form');

subscribeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    console.log(data);
});

const loginWindow = document.querySelector('#modal');
const openLoginButton = document.querySelector('#open-login');
const closedLoginButton = document.querySelector('#closed-login');

openLoginButton.addEventListener('click', (event) => {
    loginWindow.classList.add('modal-showed');
});

closedLoginButton.addEventListener('click', (event) => {
    loginWindow.classList.remove('modal-showed');
});