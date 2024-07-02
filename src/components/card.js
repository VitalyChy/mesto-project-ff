import { popupTypeImage } from "./constants.js";
import { openModal } from "./modal.js";
import { deleteCardRequest, addLike, removeLike } from './api.js';

export { createCard, handleLikeButton, deleteCard, openImage } 

// Функция открытия картинки
function openImage(cardLink, cardName, cardTitle) {
  popupTypeImage.querySelector(".popup__image").src = cardLink;
  popupTypeImage.querySelector(".popup__image").alt = cardName;
  popupTypeImage.querySelector(".popup__caption").textContent = cardTitle;
  openModal(popupTypeImage);
}

// Функция создания карточки
function createCard(initialCard, deleteCard, likeButton, pictureShow, userId) { 
  // Темплейт карточки
  const cardTemplate = document.querySelector("#card-template").content; 
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  const cardTitle = cardElement.querySelector('.card__title');
  const cardImage = cardElement.querySelector('.card__image');
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  const cardLikeButton = cardElement.querySelector('.card__like-button');
  const cardLikeNumber = cardElement.querySelector('.card__like-number');

  cardImage.src = initialCard.link;
  cardImage.alt = initialCard.name;
  cardTitle.textContent = initialCard.name;
  cardLikeNumber.textContent = initialCard.likes.length; // Обновляет отображаемое количество лайков для карточки на веб-странице


  // Блок условий проверяет, является ли пользователь (userId) владельцем карточки (initialCard). 
  // Если пользователь является владельцем, то добавляется обработчик события на кнопку удаления карточки.
  if (initialCard.owner['_id'] === userId) {
    cardDeleteButton.addEventListener('click', () => {
      deleteCard(cardElement, initialCard);
    });
    // В противном случае кнопка удаления карточки удаляется из DOM
  } else {
    cardDeleteButton.remove();
  }

  // Проверяет, есть ли лайк текущего пользователя (userId) на карточке.
  if (initialCard.likes.some(like => like['_id'] === userId)) {
    cardLikeButton.classList.add('card__like-button_is-active');
  }

  cardLikeButton.addEventListener('click', evt =>
    likeButton(evt, initialCard, cardLikeNumber)
  );
  cardImage.addEventListener('click', () =>
    pictureShow(initialCard.link, initialCard.name)
  );

  return cardElement;
}

// Функция для удаления карточки
function deleteCard(cardElement, cardDataToDelete) {
  deleteCardRequest(cardDataToDelete)
    .then(() => {
      cardElement.remove();
    })
    .catch(err => console.log(err)); // Вывод ошибки в консоль
}

// Функции для работы кнопки лайка
function updateLikesNumber(initialCard, likeNumberElement) {
  likeNumberElement.textContent = initialCard.likes.length;
}

// Функция определяет, был ли уже поставлен лайк на карточку, 
// проверяя наличие класса card__like-button_is-active у цели события (evt.target). 
// Если класс присутствует, то переменной changeLikeNumber присваивается функция removeLike, 
// иначе — функция addLike.
function handleLikeButton(evt, initialCard, likeNumberElement) {
  const changeLikeNumber = evt.target.classList.contains(
    'card__like-button_is-active'
  )
    ? removeLike
    : addLike;

  changeLikeNumber(initialCard)
    .then(cardDataUpdated => {
      // Функция updateLikesNumber, обновляет отображение числа лайков на странице,
      updateLikesNumber(cardDataUpdated, likeNumberElement);
      evt.target.classList.toggle('card__like-button_is-active'); // Изменяется состояние кнопки лайка 
    })
    .catch(err => console.log(err)); // Вывод ошибки в консоль
}