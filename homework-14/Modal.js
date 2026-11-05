export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById("overlay");
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.#initOpen(buttonId);
  }

  open() {
    this.modal.classList.add("modal-showed");
    this.overlay.classList.add("overlay-showed");
    this.#initClose();
  }

  close() {
    this.modal.classList.remove("modal-showed");
    this.overlay.classList.remove("overlay-showed");
    this.#removeCloseListeners();
  }

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);

    button.addEventListener("click", () => {
      this.open();
    });
  }

  #initClose() {
    this.closeButton = this.modal.querySelector("#modal-close-button");
    this.closeButton.addEventListener("click", this.closeHandler);

    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener("click", this.overlayHandler);
    }
  }

  #removeCloseListeners() {
    this.closeButton.removeEventListener("click", this.closeHandler);
    this.overlay.removeEventListener("click", this.overlayHandler);
  }

  closeHandler = () => {
    this.close();
  };

  overlayHandler = (event) => {
    if (event.target === this.overlay) {
      this.close();
    }
  };
}
