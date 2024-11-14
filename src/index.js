import "../src/index.css";
import { openModal, closeModal } from "./components/modal";
import { initialCards } from './cards';
import { createCard, handleLikeClick, handleCardRemove } from './components/card';

// DOM элементы
const cardsContainer = document.querySelector('.places__list');
const profileEditBtn = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");

const popupEditProfile = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");

const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__description");
const formEditProfile = document.forms["edit-profile"];
const inputName = formEditProfile.name;
const inputJob = formEditProfile.description;

const formAddCard = document.forms["new-place"];
const inputCardTitle = formAddCard["place-name"];
const inputCardLink = formAddCard.link;

// Открытие попапа редактирования профиля
profileEditBtn.addEventListener("click", () => {
    inputName.value = profileTitle.textContent;
    inputJob.value = profileSubtitle.textContent;
    openModal(popupEditProfile);
});

// Сохранение изменений профиля
formEditProfile.addEventListener('submit', (evt) => {
    evt.preventDefault();
    profileTitle.textContent = inputName.value;
    profileSubtitle.textContent = inputJob.value;
    closeModal(popupEditProfile);
});

// Открытие попапа добавления карточки
addCardButton.addEventListener("click", () => {
    openModal(popupNewCard);
});

// Добавление новой карточки
formAddCard.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const newCardData = {
        name: inputCardTitle.value,
        link: inputCardLink.value
    };
    const newCardElement = createCard(newCardData, handleLikeClick, handleCardRemove);
    cardsContainer.prepend(newCardElement);
    closeModal(popupNewCard);
    formAddCard.reset();
});


initialCards.forEach((cardData) => {
    const cardElement = createCard(cardData, handleLikeClick, handleCardRemove);
    cardsContainer.append(cardElement);
});


const closeButtons = document.querySelectorAll('.popup__close');


closeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const currentPopup = event.target.closest('.popup');
        closeModal(currentPopup);
    });
});
