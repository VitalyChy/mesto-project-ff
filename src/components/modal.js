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
  if (evt.key === 'Escape') {
      const openedPopup = document.querySelector(".popup_is-opened");
      closeModal(openedPopup);
  }
}

function setPopupAnimated(popupElement) {
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

export { openModal, closeModal, setPopupAnimated, handleCloseModal }