// Подключение сторонних файлов
import "../styles/index.css";
import { initialCards } from "./cards.js";
import { createCard, deleteCardButton, likeButton } from "./card.js";
import { openModal, closeModal, popupAnimated } from "./modal.js";
import {  
  placesList, 
  profileEditButton, 
  profileAddButton,   
  popupTypeEdit,   
  popupTypeNewCard, 
  popupTypeImage,
  modalWindows, 
  popupForm,
  popupInputTypeName,
  popupInputTypeDescription,  
  formElementTypeNewCard,
  cardName,
  cardLink,
  profileTitle,
  profileDescription
} from "./constants.js";

function handleFormSubmit(evt) {
  evt.preventDefault(); // Отменяет стандартную отправку формы, убирает перезагрузку страницы
  const inputName = popupInputTypeName.value; // Параметр value хранит значение
  const inputJob = popupInputTypeDescription.value; // Параметр value хранит значение  
  profileTitle.textContent = inputName;  
  profileDescription.textContent = inputJob;
  closeModal(popupTypeEdit);
}

// Функция для записи новых значений для полей форм
function formEdit() {
  const profileTitle = document.querySelector(".profile__title").textContent;
  const profileDescription = document.querySelector(".profile__description").textContent;
  popupInputTypeName.value = profileTitle;
  popupInputTypeDescription.value = profileDescription;
}

// Функция открытия картинки
function openImage(cardLink, cardName, cardTitle) {
  popupTypeImage.querySelector(".popup__image").src = cardLink;
  popupTypeImage.querySelector(".popup__image").alt = cardName;
  popupTypeImage.querySelector(".popup__caption").textContent = cardTitle;
  openModal(popupTypeImage)
}

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
}

// Функция закрытия Модальных окон через "click" или "click" Вне окна
function handleCloseModal(popup) {   
  popup.addEventListener('click', (evt) => { // Обработчик события
    if (evt.currentTarget === evt.target) {
      closeModal(popup)
    }    
  });
  popup.querySelector(".popup__close").addEventListener('click', (event) => {
    closeModal(popup);
  });
}

// Вывести карточки на страницу
initialCards.forEach(function(item) {
  placesList.append(createCard(item, deleteCardButton, openImage, likeButton));  
});

// Вызов кнопки "Редактироввать" окно, Nickname
profileEditButton.addEventListener('click', function () {
  openModal(popupTypeEdit);
});

// Вызов Модального окна Добавления карточки
profileAddButton.addEventListener('click', function () {
  openModal(popupTypeNewCard);
});

popupForm.addEventListener('submit', handleFormSubmit);
formElementTypeNewCard.addEventListener('submit', handleCardSubmit);
profileEditButton.addEventListener('click', formEdit);

modalWindows.forEach((item) => {    
  handleCloseModal(item);
  popupAnimated(item);
});

