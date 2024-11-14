export function initializePopups() {
    const popups = document.querySelectorAll('.popup');
    popups.forEach((popup) => {
        popup.classList.add('popup_is-animated');
    });
}

export function openModal(popup) {
    popup.classList.add("popup_is-opened");
    popup.addEventListener("click", handleOverlayClick);
    document.addEventListener("keydown", handleEscClose);
}

export function closeModal(popup) {
    popup.classList.remove("popup_is-opened");
    popup.removeEventListener("click", handleOverlayClick);
    document.removeEventListener("keydown", handleEscClose);
}

export function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
        closeModal(event.currentTarget);
    }
}

export function handleEscClose(event) {
    if (event.key === "Escape") {
        const activePopup = document.querySelector(".popup_is-opened");
        if (activePopup) {
            closeModal(activePopup);
        }
    }
}
