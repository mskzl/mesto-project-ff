export function openModal(popup) {
  popup.classList.add("popup_is-opened");
  popup.addEventListener("click", handleOverlayClick);
  document.addEventListener("keydown",handleEscClose);
  }
  
export function closeModal(popup) {
  popup.classList.remove("popup_is-opened");
  popup.removeEventListener("click", handleOverlayClick);
  document.removeEventListener("keydown",handleEscClose);
}

export function handleEscClose(event) {
  if (event.key === "Escape") {
    const popup = document.querySelector(".popup_is-opened");
    if (popup) {
      closeModal(popup);
      console.log("Escape");
    }
  }
}

export function handleOverlayClick(event) {
  if (event.target === event.currentTarget) {
      closeModal(event.currentTarget);
  }
}