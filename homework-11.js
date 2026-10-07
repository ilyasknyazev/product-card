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

let user;

const registrationForm = document.querySelector('#registration-form');
const modal = document.querySelector('#modal');

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const form = event.target;

    if (!form.checkValidity()) {
        alert('Регистрация откланена!');
        return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (data.password !== data.passwordConfirm) {
        alert('Регистрация откланена: пароли не совпадают!');
        return;
    }

    const encodedPassword = btoa(data.password);
    const encodedRePassword = btoa(data.passwordConfirm);

    user = {
        ...data,
        password: encodedPassword,
        passwordConfirm: encodedRePassword,
        createdOn: new Date()
    };

    console.log(user);

    modal.classList.remove('modal-showed');
});