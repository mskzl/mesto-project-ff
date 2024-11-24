import { removeCardById, setCardLike, removeCardLike } from "./api";
import { openModal, closeModal } from "./modal";

// Обработчик лайка
export function handleLikeClick(countLike, likeButton, card) {
  const likeStatus = likeButton.classList.contains("card__like-button_is-active");
  const toggleLikeAction  = likeStatus ? removeCardLike : setCardLike;
  toggleLikeAction (card._id)
    .then((res) => {
      likeButton.classList.toggle("card__like-button_is-active");
      countLike.textContent = res.likes.length;
    })
    .catch((err) => console.error("Произошла ошибка при изменении лайка", err));
}

// Модальное окно для удаления
const deleteCardPopup = document.querySelector(".popup_type_delete-card");
const deleteCardForms = document.forms["delete-card"];
let cardDeleteModal, cardDeleteId;

function openDeleteModal(card, cardId) {
  openModal(deleteCardPopup);
  cardDeleteModal = card;
  cardDeleteId = cardId;
}

deleteCardForms.addEventListener("submit", () => {
  if (cardDeleteModal && cardDeleteId) {
    removeCardById(cardDeleteId)
      .then(() => {
        cardDeleteModal.remove();
      })
      .catch((err) => console.error("Ошибка при удалении", err));
  }
  closeModal(deleteCardPopup);
});

// Создание карточки
export function createCard(data, template, handleLikeClick, handleImageClick, userId) {
  const card = template.querySelector(".card").cloneNode(true);
  const image = card.querySelector(".card__image");
  const title = card.querySelector(".card__title");
  const deleteButton = card.querySelector(".card__delete-button");
  const likeButton = card.querySelector(".card__like-button");
  const likeCounter = card.querySelector(".card__likes-counter");

  image.src = data.link;
  image.alt = data.name;
  title.textContent = data.name;
  likeCounter.textContent = data.likes.length;

  const cardId = data._id;
  const isOwnedByUser = data.owner._id === userId;
  if (isOwnedByUser) {
    deleteButton.addEventListener("click", () => openDeleteModal(card, cardId));
  } else {
    deleteButton.style.display = "none";
  }

  const likeStatus = data.likes.some((like) => like._id === userId);
  if (likeStatus) {
    likeButton.classList.add("card__like-button_is-active");
  }

  likeButton.addEventListener("click", () => handleLikeClick(likeCounter, likeButton, data));
  image.addEventListener("click", () => handleImageClick(data));

  return card;
}
