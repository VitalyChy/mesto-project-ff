export {  // Экспорт Функций
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
  profileDescription     
}

const content = document.querySelector(".content") // Выбор класса
const placesList = content.querySelector(".places__list"); // Выбор класса для выведения карточки
const popupTypeEdit = document.querySelector(".popup_type_edit"); // Модальное окно редактирования Nickname
const popupTypeNewCard = document.querySelector(".popup_type_new-card"); // Модальное окно добавления карточки
const profileEditButton = document.querySelector(".profile__edit-button"); // Кнопки Редактирования Nickname
const profileAddButton = document.querySelector(".profile__add-button"); // Кнопки "+" добавления новых карточек
const popupTypeImage = document.querySelector(".popup_type_image"); // Модальное окно картинки
const modalWindows = [popupTypeEdit, popupTypeNewCard, popupTypeImage];
const formElement = document.querySelector(".popup__form"); // Выбор класса Формы
const popupInputTypeName = formElement.querySelector(".popup__input_type_name"); // Выбор 1 строка форма "Имя"
const popupInputTypeDescription = formElement.querySelector(".popup__input_type_description"); // Выбор 2 строка форма "Занятие"
const formElementTypeNewCard = popupTypeNewCard.querySelector(".popup__form"); // Выбор класса Формы
const cardName = formElementTypeNewCard.querySelector(".popup__input_type_card-name"); // Обращение к классу в форме
const cardLink = formElementTypeNewCard.querySelector(".popup__input_type_url"); // Обращение к классу в форме
const profileTitle = document.querySelector(".profile__title");  
const profileDescription = document.querySelector(".profile__description");





