const subscribeForm = document.querySelector('#subscribe-form');

subscribeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    console.log(data);
});