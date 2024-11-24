// Импорты
import "../src/index.css";
import {openModal, closeModal} from "./components/modal";
import {createCard, handleLikeClick} from "./components/card";
import {clearValidation, enableValidation} from "./components/validation";
import {getCardList, getCurrentUser, modifyUserDetails, createNewCard, changeUserAvatar} from "./components/api";

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

const avatarInput = document.forms["new-avatar_img"];
const avatarUrlInput = avatarInput.link;
const avatarImgBlock = document.querySelector(".profile__image");

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
      const newCard = createCard(card,template,handleLikeClick,handleImageClick,card.owner._id);
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
  const popupImageElement = popupImage.querySelector(".popup__image");
  const caption = popupImage.querySelector(".popup__caption");
  popupImageElement.alt = cardInfo.name;
  popupImageElement.src = cardInfo.link;
  caption.textContent = cardInfo.name;
  openModal(popupImage);
}

function drawCards(cards, userId) {
  cards.forEach((item) => {
    const card = createCard(item, template, handleLikeClick, handleImageClick, userId);
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
