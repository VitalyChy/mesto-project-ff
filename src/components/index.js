// Подключение сторонних файлов
import "../styles/index.css";
import { createCard, handleLikeButton, deleteCard, openImage } from "./card.js";
import { openModal, closeModal, popupAnimated, handleCloseModal, handleButtonLoading } from "./modal.js";
import { 
  placesList, 
  profileEditButton, 
  profileAddButton,   
  popupTypeEdit,   
  popupTypeNewCard,   
  modalWindows,  
  popupInputTypeName,
  popupInputTypeDescription,   
  cardName,
  cardLink,
  popupTypeEditAvatar,
  profileImageEditButton,
  profileTitle,
  profileImage,
  profileDescription,
  formEditProfile,
  formEditAvatar,
  formNewCard
} from "./constants.js";

import { enableValidation, clearValidation, validationConfig } from "./validation.js";
import { loadData, postNewCard, changeUser, changeUserAvatar } from './api.js';

// Функция для отображения данных пользователя с сервера
function setUserData(userData) {
  profileTitle.textContent = userData.name;
  profileDescription.textContent = userData.about;
  profileImage.style.backgroundImage = `url(${userData.avatar})`;
}

// Функция для отображения карточек с сервера
function cards(initialsCard, userId) {
  initialsCard.forEach(initialCard => {
    const cardToAdd = createCard(initialCard, deleteCard, handleLikeButton, openImage, userId);
    placesList.append(cardToAdd); // Добавляет в начало карточки с сервера
  });
}

// Функция загрузки данных Пользователь/Карточка
function dataLoading() {
  loadData()
    .then(([userData, initialsCard]) => {
      setUserData(userData);
      cards(initialsCard, userData['_id']);
    })
    .catch(err => console.log(err)); // Вывод ошибки в консоль
}

// Функция для редактирования аватара
function handleFormEditAvatar(evt) {
  evt.preventDefault; // Отменяет стандартную отправку формы 

  // извлекается значение ссылки на аватар из элемента ввода формы
  const EditAvatar = formEditAvatar.querySelector('.popup__input_type_url');
  const link = EditAvatar.value;
  
  handleButtonLoading(evt.target.querySelector(validationConfig.submitButtonSelector));

  // Отправляет запрос на сервер для обновления аватара пользователя с новой ссылкой
  changeUserAvatar(link)
    .then(data => {
      profileImage.style.backgroundImage = `url(${data.avatar})`;

      closeModal(popupTypeEditAvatar); // Закрывает модальное окно
    })
    .catch(err => console.log(err)) // Вывод ошибки в консоль
    .finally(() => {
      handleButtonLoading(evt.target.querySelector(validationConfig.submitButtonSelector));
    });
}
formEditAvatar.addEventListener('submit', handleFormEditAvatar);

// Функция для редактирования профиля
function handleFormEditProfile(evt) {
  evt.preventDefault(); // Отменяет стандартную отправку формы 
  handleButtonLoading(evt.target.querySelector(validationConfig.submitButtonSelector));

  // Запрос на сервер для обновления данных пользователя с новым именем и описанием
  changeUser(popupInputTypeName.value, popupInputTypeDescription.value)
    .then(userData => {
      profileTitle.textContent = userData.name;
      profileDescription.textContent = userData.about;

      closeModal(popupTypeEdit); // Закрывает модальное окно
    })
    .catch(err => console.log(err)) // Вывод ошибки в консоль
    .finally(() => {
      handleButtonLoading(evt.target.querySelector(validationConfig.submitButtonSelector));
    });
}
formEditProfile.addEventListener('submit', handleFormEditProfile);

// Функция добавления новых карточек
function handleCardSubmit(evt) {
  evt.preventDefault(); // Отменяет стандартную отправку формы
  handleButtonLoading(evt.target.querySelector(validationConfig.submitButtonSelector));

  // Отправка запроса на сервер для создания новой карточки с помощью функции
  postNewCard(cardName.value, cardLink.value)
    .then(initialCard => {
      const newCard = createCard(initialCard, deleteCard, handleLikeButton, openImage, initialCard.owner['_id']);

      placesList.prepend(newCard); // Добавляет карточку в начало

      closeModal(popupTypeNewCard); // Закрывает модальное окно
    })
    .catch(err => console.log(err)) // Вывод ошибки в консоль
    .finally(() => {
      handleButtonLoading(evt.target.querySelector(validationConfig.submitButtonSelector));
    });
}

// Слушатели на открытие Модальных окон
// Редактировать Аватар
profileImageEditButton.addEventListener('click', function () {
  clearValidation(formEditAvatar, validationConfig);
  openModal(popupTypeEditAvatar); // Открывает модальное окно
});

// Редактировать Имя/Занятие
profileEditButton.addEventListener('click', function () {
  clearValidation(formEditProfile, validationConfig); // Функция вызывает для очистки сообщений об ошибках валидации в форме
  popupInputTypeName.value = profileTitle.textContent;
  popupInputTypeDescription.value = profileDescription.textContent;
  openModal(popupTypeEdit); // Открывает модальное окно
});

// Добавить карточку
profileAddButton.addEventListener('click', function () {
  clearValidation(formNewCard, validationConfig); 
  openModal(popupTypeNewCard); // Открывает модальное окно
});

// Вызов функции Закрыть модальные окна 
modalWindows.forEach((item) => {    
  handleCloseModal(item);
  popupAnimated(item); // Эффект плавного закрытия модального окна
});

formNewCard.addEventListener('submit', handleCardSubmit);

enableValidation(validationConfig);
dataLoading();






