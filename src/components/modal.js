export { openModal, closeModal, popupAnimated, handleCloseModal, handleButtonLoading } // Экспорт Функций

function openModal(popupElement) {
  popupElement.classList.add("popup_is-opened");
  document.addEventListener('keydown', closeOnEsc);
}

function closeModal(popupElement) {
  popupElement.classList.remove("popup_is-opened");
  document.removeEventListener('keydown', closeOnEsc)
}

// Функция закрытия окна редактирования с помощью кнопки "Esc"
function closeOnEsc(evt) {
  const OpenedPopup = document.querySelector(".popup_is-opened");
  if (evt.key === 'Escape') {
      closeModal(OpenedPopup);
  }
}

function popupAnimated(popupElement) {
  popupElement.classList.add("popup_is-animated");
}

// Функция закрытия Модальных окон через "click" или "click" Вне окна
function handleCloseModal(popup) {   
  popup.addEventListener('click', (evt) => { // Обработчик события
    if (evt.currentTarget === evt.target) {
      closeModal(popup);      
    }    
  });
  popup.querySelector(".popup__close").addEventListener('click', (event) => {
    closeModal(popup);    
  });  
}

// Функция изменения вида кнопки Сохранить в модальном окне
function handleButtonLoading(buttonElement) {
  if (buttonElement.classList.contains('popup__button_loading')) {
    buttonElement.classList.remove('popup__button_loading');
    buttonElement.textContent = 'Сохранить';
  } else {
    buttonElement.classList.add('popup__button_loading');
    buttonElement.textContent = 'Сохранение...';
  }
}