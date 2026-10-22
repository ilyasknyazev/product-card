import Form from './Form.js';
import Modal from './Modal.js';

const subscribeForm = new Form('subscribe-form');

subscribeForm.form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = subscribeForm.getValues();

    console.log(data);
});

const loginWindow = new Modal('modal');
const openLoginButton = document.getElementById('open-login');

openLoginButton.addEventListener('click', (event) => {
    loginWindow.open();
});

let user;

const registrationForm = new Form('registration-form');

registrationForm.form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!registrationForm.isValid()) {
        alert('Регистрация откланена!');
        return;
    }

    const data = registrationForm.getValues();

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

    loginWindow.close();

    registrationForm.reset();
});