// Подключение сторонних файлов
import "../styles/index.css";
import { initialCards } from "./cards.js";
import { createCard, deleteCardButton, likeButton, openImage } from "./card.js";
import { openModal, closeModal, popupAnimated, handleCloseModal, handleButtonLoading } from "./modal.js";
import { 
  placesList, 
  profileEditButton, 
  profileAddButton,   
  popupTypeEdit,   
  popupTypeNewCard, 
  popupTypeImage,
  modalWindows, 
  formElement,
  popupInputTypeName,
  popupInputTypeDescription,  
  formElementTypeNewCard,
  cardName,
  cardLink,
  profileTitle,
  profileDescription,
  formEditProfile,
  formEditAvatar,
  formNewCard
} from "./constants.js";

import { enableValidation, clearValidation, validationConfig } from "./validation.js";
// import {  } from './api.js';

function handleFormSubmit(evt) {
  evt.preventDefault(); // Отменяет стандартную отправку формы, убирает перезагрузку страницы
  const inputName = popupInputTypeName.value; // Параметр value хранит значение
  const inputJob = popupInputTypeDescription.value; // Параметр value хранит значение  
  profileTitle.textContent = inputName;  
  profileDescription.textContent = inputJob;
  closeModal(popupTypeEdit);
  
};

// Функция для записи новых значений для полей форм Редактирования имени
function formEdit() {
  const profileTitle = document.querySelector(".profile__title").textContent;
  const profileDescription = document.querySelector(".profile__description").textContent;
  popupInputTypeName.value = profileTitle;
  popupInputTypeDescription.value = profileDescription;  
};

// Функция добавления новых карточек
function handleCardSubmit(evt) {
  evt.preventDefault(); // Отменяет стандартную отправку формы

  const Card = {
    name: cardName.value, // Параметр value хранит значение, и передает методу
    link: cardLink.value,
  };  
  placesList.prepend(createCard(Card, deleteCardButton, openImage, likeButton)) // prepend Добавляет элементы в начало
  closeModal(popupTypeNewCard); 
    
  formElementTypeNewCard.reset(); // Сброс к дефолтным значениям всех полей формы  
  handleButtonLoading(evt.target.querySelector('.popup__button')); 
};

// Вывести карточки на страницу
initialCards.forEach(function(item) {
  placesList.append(createCard(item, deleteCardButton, openImage, likeButton));  
});

// Функция вызова кнопки "Редактироввать" окно, Nickname
profileEditButton.addEventListener('click', function () {
  openModal(popupTypeEdit);
  clearValidation(formEditProfile, validationConfig);  
});

// Вызов Модального окна Добавления карточки
profileAddButton.addEventListener('click', function () {
  openModal(popupTypeNewCard);
  formElement.reset();
  clearValidation(formNewCard, validationConfig); 
});

formElement.addEventListener('submit', handleFormSubmit);
formElementTypeNewCard.addEventListener('submit', handleCardSubmit);
profileEditButton.addEventListener('click', formEdit);

modalWindows.forEach((item) => {    
  handleCloseModal(item);
  popupAnimated(item);
});

enableValidation(validationConfig);







