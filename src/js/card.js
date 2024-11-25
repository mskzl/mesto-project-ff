import { removeCardById, setCardLike, removeCardLike } from "./api.js";

// Обработчик лайка
export function handleLikeClick(countLike, likeButton, card) {
  const likeStatus = likeButton.classList.contains("card__like-button_is-active");
  const toggleLikeAction = likeStatus ? removeCardLike : setCardLike;
  toggleLikeAction(card._id)
    .then((res) => {
      likeButton.classList.toggle("card__like-button_is-active");
      countLike.textContent = res.likes.length;
    })
    .catch((err) => console.error("Произошла ошибка при изменении лайка", err));
}

// Функция для открытия модального окна удаления
export function openDeleteModal(card, openModal, deleteCardPopup) {
  window.currentCardToDelete = card;
  openModal(deleteCardPopup);
}

// Создание карточки
export function createCard(data, template, handleLikeClick, handleImageClick, userId, openModal, closeModal, deleteCardPopup) {
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

  // Показываем кнопку удаления, если пользователь владеет карточкой
  if (isOwnedByUser) {
    deleteButton.addEventListener("click", () => openDeleteModal(card, openModal, deleteCardPopup));
  } else {
    deleteButton.style.display = "none";
  }

  // Устанавливаем статус лайка, если пользователь уже лайкал
  const likeStatus = data.likes.some((like) => like._id === userId);
  if (likeStatus) {
    likeButton.classList.add("card__like-button_is-active");
  }

  // Обработчик нажатия лайка
  likeButton.addEventListener("click", () => handleLikeClick(likeCounter, likeButton, data));
  
  // Обработчик нажатия на изображение для открытия его в полноэкранном режиме
  image.addEventListener("click", () => handleImageClick(data));

  // Метод удаления карточки, который будет вызываться из index.js при подтверждении
  card.removeCard = () => {
    return removeCardById(cardId) // Возвращаем Promise
      .then(() => {
        card.remove(); // Удаление карточки из DOM
      })
      .catch((err) => {
        console.error("Ошибка при удалении карточки", err);
        throw err; // Пробрасываем ошибку, чтобы она обработалась в `catch`
      });
  };

  return card;
}