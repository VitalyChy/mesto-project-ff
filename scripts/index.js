// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const content = document.querySelector('.content');
const cardList = content.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(card, cardDelete) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true); // Клонировал шаблон

  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  
  cardTitle.textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;  

  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', (evt) => { // обработчик события
    cardDelete(cardElement);
  });
  
  return cardElement  
}

// @todo: Функция удаления карточки
function deleteCard(cardElement) {  // Передал карточку
  cardElement.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function(card) {
  const item = createCard(card, deleteCard);
  cardList.append(item);
});
