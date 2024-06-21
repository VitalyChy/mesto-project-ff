export { createCard, deleteCardButton, likeButton, openImage } // Экспорт Функций
import { popupTypeImage } from "./constants.js";
import { openModal } from "./modal.js";

// Функция открытия картинки
function openImage(cardLink, cardName, cardTitle) {
  popupTypeImage.querySelector(".popup__image").src = cardLink;
  popupTypeImage.querySelector(".popup__image").alt = cardName;
  popupTypeImage.querySelector(".popup__caption").textContent = cardTitle;
  openModal(popupTypeImage);
};

// Функция создания карточки
function createCard(initialCard, cardDelete, openImage, likeButton) {  
  const cardTemplate = document.querySelector("#card-template").content; // Темплейт карточки
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true); // Клонировал шаблон
  
  const { name: cardName, link: cardLink, name: cardTitle } = initialCard;
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = cardLink;
  cardImage.alt = cardName;
  cardElement.querySelector(".card__title").textContent = cardTitle;    

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener('click', () => { // Обработчик события удаления
    cardDelete(cardElement);
  });  

  const buttonLike = cardElement.querySelector(".card__like-button");
  buttonLike.addEventListener('click', () => {
    likeButton(buttonLike);
  });

  cardImage.addEventListener('click', () => { // Обработчик события открытия
    openImage(cardLink, cardName, cardTitle)
  });
  
  return cardElement  
}

// Функция удаления карточки
function deleteCardButton(cardElement) {  // Передал карточку
  cardElement.remove();
}

// Функция добавления лайка
function likeButton (buttonLike){
  buttonLike.classList.toggle("card__like-button_is-active");
};






