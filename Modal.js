export default class Modal {
    constructor(id) {
        this.modal = document.getElementById(id);

        this.closeButton = this.modal.querySelector('#closed-login');
        this.closeButtonListener();
    }

    open() {
        this.modal.classList.add('modal-showed');
    }

    close() {
        this.modal.classList.remove('modal-showed');
    }

    closeButtonListener() {
        if (!this.closeButton) return;

        this.closeButton.addEventListener('click', () => {
            this.close();
        });
    }
}