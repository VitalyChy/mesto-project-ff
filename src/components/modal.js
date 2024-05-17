export { openModal, closeModal, popupAnimated } // Экспорт Функций

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

// Функция добавляет класс
function popupAnimated(popupElement) {
  popupElement.classList.add("popup_is-animated");
}

