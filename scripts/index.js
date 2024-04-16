// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const content = document.querySelector('.content');
const cardList = content.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(cardImage, cardTitle, cardDelete) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true); // Клонировал шаблон

  const Img = cardElement.querySelector('.card__image');
  const Title = cardElement.querySelector('.card__title');
  
  Img.alt = cardTitle;
  Img.src = cardImage;   
  Title.textContent = cardTitle;

  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', (evt) => { // обработчик события
    cardDelete(evt);
  });
  
  return cardElement  
}

// @todo: Функция удаления карточки
function deleteCard(event) {
  const item = event.target.closest('.card'); // при нажатии на кнопку удаления срабатывает событие, .closest обращается к классу .card
  item.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function({link, name}) {
  const card = createCard(link, name, deleteCard);
  cardList.append(card);
});
