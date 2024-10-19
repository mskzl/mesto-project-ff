// @todo: DOM узлы

const cardsContainer = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');

// @todo: Функция создания карточки
function createCard(data, handleDelete) {

    const cardElement = cardTemplate.cloneNode(true);
    
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const deleteButton = cardElement.querySelector('.card__delete-button');

    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardTitle.textContent = data.name;

    deleteButton.addEventListener('click', handleDelete);

    return cardElement;
}

// @todo: Функция удаления карточки

function handleDelete(event) {
    const cardElement = event.target.closest('.card');
    cardElement.remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach(cardData => {
    const cardElement = createCard(cardData, handleDelete);
    cardsContainer.append(cardElement);
});
