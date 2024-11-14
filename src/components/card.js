
import { openModal } from './modal';

// Создание карточки
export function createCard(data, handleLikeClick, handleCardRemove) {
    const template = document.querySelector('#card-template').content.querySelector('.card');
    const cardElement = template.cloneNode(true);

    const image = cardElement.querySelector('.card__image');
    const title = cardElement.querySelector('.card__title');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const likeButton = cardElement.querySelector('.card__like-button');

    image.src = data.link;
    image.alt = data.name;
    title.textContent = data.name;

    deleteButton.addEventListener('click', () => handleCardRemove(cardElement));
    likeButton.addEventListener('click', handleLikeClick);
    image.addEventListener('click', () => openImagePopup(data));

    return cardElement;
}

// Функция удаления карточки
export function handleCardRemove(cardElement) {
    cardElement.remove();
}

// Функция лайка карточки
export function handleLikeClick(event) {
    event.target.classList.toggle('card__like-button_is-active');
}

// Открытие попапа изображения
export function openImagePopup(cardData) {
    const imagePopup = document.querySelector('.popup_type_image');
    const popupImage = imagePopup.querySelector('.popup__image');
    const caption = imagePopup.querySelector('.popup__caption');

    popupImage.src = cardData.link;
    popupImage.alt = cardData.name;
    caption.textContent = cardData.name;

    openModal(imagePopup);
}
