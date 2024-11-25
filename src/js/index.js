// Импорты
import "../webfonts/index.css";
import {openModal, closeModal} from "./modal.js";
import {createCard, handleLikeClick, openDeleteModal} from "./card.js";
import {clearValidation, enableValidation} from "./validation.js";
import {getCardList, getCurrentUser, modifyUserDetails, createNewCard, changeUserAvatar} from "./api.js";

// Константы
const cardsContainer = document.querySelector(".places__list");
const profileEditBtn = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");

const popupEditProfile = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupImage = document.querySelector(".popup_type_image");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const formEditProfile = document.forms["edit-profile"];

const popup = document.querySelectorAll(".popup");
const closeButtons = document.querySelectorAll(".popup__close");

const formAddCard = document.forms["new-place"];
const inputCardTitle = formAddCard["place-name"];
const inputCardLink = formAddCard.link;

const inputName = formEditProfile.name;
const inputJob = formEditProfile.description;

const avatarImg = document.querySelector(".profile__image");
const avatarPopup = document.querySelector(".popup_type_new-avatar");
const template = document.querySelector("#card-template").content;

const deleteCardPopup = document.querySelector(".popup_type_delete-card");
const deleteCardForm = document.forms["delete-card"];
const avatarInput = document.forms["new-avatar_img"];
const avatarUrlInput = avatarInput.link;
const avatarImgBlock = document.querySelector(".profile__image");

const popupImageElement = popupImage.querySelector(".popup__image");
  const caption = popupImage.querySelector(".popup__caption");

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button__disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

// Слушатели событий
profileEditBtn.addEventListener("click", () => handleEditProfileOpen());
addCardButton.addEventListener("click", () => handleNewCardOpen());
avatarImg.addEventListener("click", () => openModal(avatarPopup));

formEditProfile.addEventListener("submit", profileFormHandler);
formAddCard.addEventListener("submit", addCard);
avatarInput.addEventListener("submit", editAvatarInputSubmit);

// Удаление карточки по подтверждению
deleteCardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (window.currentCardToDelete) {
    window.currentCardToDelete
      .removeCard() // Асинхронный запрос на удаление
      .then(() => {
        closeModal(deleteCardPopup); // Закрытие окна только после успешного удаления
      })
      .catch((err) => {
        console.error("Ошибка при удалении карточки", err);
        // Можно показать пользователю сообщение об ошибке
      });
  }
});

closeButtons.forEach((button) =>
  button.addEventListener("click", () => closeModal(button.closest(".popup")))
);

popup.forEach((popup) => popup.classList.add("popup_is-animated"));

// Функции
function handleEditProfileOpen() {
  openModal(popupEditProfile);
  clearValidation(formEditProfile, validationConfig);
  fillProfileForm(profileTitle, profileDescription);
}

function handleNewCardOpen() {
  openModal(popupNewCard);
  clearValidation(formAddCard, validationConfig);
}

function fillProfileForm(title, description) {
  inputName.value = title.textContent;
  inputJob.value = description.textContent;
}

function setButtonLoadingState(isLoading, form) {
  const saveButton = form.querySelector(".popup__button__save");
  saveButton.textContent = isLoading ? "Сохранение..." : "Сохранить";
}

function profileFormHandler(event) {
  event.preventDefault();
  setButtonLoadingState(true, formEditProfile);
  modifyUserDetails(inputJob.value, inputName.value)
    .then((res) => {
      profileTitle.textContent = res.name;
      profileDescription.textContent = res.about;
      closeModal(popupEditProfile);
    })
    .catch((err) => console.error(`Ошибка: ${err}`))
    .finally(() => setButtonLoadingState(false, formEditProfile));
}

function addCard(event) {
  event.preventDefault();
  setButtonLoadingState(true, formAddCard);
  createNewCard(inputCardTitle.value, inputCardLink.value)
    .then((card) => {
      const newCard = createCard(
        card,
        template,
        handleLikeClick,
        handleImageClick,
        card.owner._id,
        openModal,
        closeModal,
        deleteCardPopup,
        openDeleteModal
      );
      cardsContainer.prepend(newCard);
      formAddCard.reset();
      closeModal(popupNewCard);
    })
    .catch((err) => console.error(`Ошибка: ${err}`))
    .finally(() => setButtonLoadingState(false, formAddCard));
}

function editAvatarInputSubmit(event) {
  event.preventDefault();
  setButtonLoadingState(true, avatarInput);
  changeUserAvatar(avatarUrlInput.value)
    .then((data) => {
      avatarImgBlock.style.backgroundImage = `url(${data.avatar})`;
      avatarInput.reset();
      closeModal(avatarPopup);
    })
    .catch((err) => console.error(`Ошибка: ${err}`))
    .finally(() => setButtonLoadingState(false, avatarInput));
}

function handleImageClick(cardInfo) {
  popupImageElement.alt = cardInfo.name;
  popupImageElement.src = cardInfo.link;
  caption.textContent = cardInfo.name;
  openModal(popupImage);
}

function drawCards(cards, userId) {
  cards.forEach((item) => {
    const card = createCard(item, template, handleLikeClick, handleImageClick, userId, openModal, closeModal, deleteCardPopup, openDeleteModal);
    cardsContainer.append(card);
  });
}

enableValidation(validationConfig);

Promise.all([getCurrentUser(), getCardList()])
  .then(([user, cards]) => {
    profileTitle.textContent = user.name;
    profileDescription.textContent = user.about;
    avatarImgBlock.style.backgroundImage = `url(${user.avatar})`;
    drawCards(cards, user._id);
  })
  .catch((err) => console.error(`Ошибка: ${err}`));

