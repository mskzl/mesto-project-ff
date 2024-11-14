// Создание карточки
export function createCard(data, handleLikeClick, handleCardRemove, handleImageClick) {
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
    image.addEventListener('click', () => handleImageClick(data));

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
