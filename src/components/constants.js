const content = document.querySelector(".content") // Выбор класса
const placesList = content.querySelector(".places__list"); // Выбор класса для выведения карточки
const popupTypeEdit = document.querySelector(".popup_type_edit"); // Модальное окно редактирования Nickname
const popupTypeNewCard = document.querySelector(".popup_type_new-card"); // Модальное окно добавления карточки
const profileEditButton = document.querySelector(".profile__edit-button"); // Кнопки Редактирования Nickname
const profileAddButton = document.querySelector(".profile__add-button"); // Кнопки "+" добавления новых карточек
const popupTypeImage = document.querySelector(".popup_type_image"); // Модальное окно картинки
const popupImage = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__caption');
const modalWindows = document.querySelectorAll('.popup'); //  Закрыть модальные окна
const formElement = document.querySelector(".popup__form"); // Выбор класса Формы
const popupInputTypeName = formElement.querySelector(".popup__input_type_name"); // Выбор 1 строка форма "Имя"
const popupInputTypeDescription = formElement.querySelector(".popup__input_type_description"); // Выбор 2 строка форма "Занятие"
const popupForm = popupTypeNewCard.querySelector(".popup__form"); 
const cardName = popupForm.querySelector(".popup__input_type_card-name");
const cardLink = popupForm.querySelector(".popup__input_type_url");
const popupTypeEditAvatar = document.querySelector('.popup_type_edit-avatar');
const profileImageEditButton = document.querySelector('.profile__image-edit-button');
const profileTitle = document.querySelector(".profile__title");
const profileImage = document.querySelector('.profile__image');  
const profileDescription = document.querySelector(".profile__description");

// Поиск формы по имени в HTML
const formEditProfile = document.forms['edit-profile']; 
const formEditAvatar = document.forms['edit-avatar'];
const formNewCard = document.forms['new-place'];

export { 
  placesList, 
  profileEditButton, 
  profileAddButton,   
  popupTypeEdit,   
  popupTypeNewCard, 
  popupTypeImage,
  popupImage,
  popupImageCaption,
  modalWindows, 
  formElement,
  popupInputTypeName,
  popupInputTypeDescription,  
  popupForm,
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
}