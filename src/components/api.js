const baseUrl = 'https://nomoreparties.co/v1/pwff-cohort-1';
const headers = {
  authorization: 'cfe0ed0c-4524-49f2-826d-b9561571abd4',
  'Content-Type': 'application/json'
}

// Функция позволяет обрабатывать ответы от сервера и возвращать данные в формате JSON,
// в случае успешного запроса или сообщение об ошибке в случае неудачного запроса.
function checkResponse(res) {
  if (res.ok) {
    return res.json(); // Преобразовали данные в формат JSON
  }
  return Promise.reject(`Что-то пошло не так: ${res.status}`);
}

// Метод fetch создаёт запрос на сервер и возвращает его ответ. На вход fetch принимает два аргумента. 
// Первый — обязательный — URL запрашиваемого ресурса.
// Второй аргумент — необязательный. Это объект опций. 
// Чаще всего нужны опции method, headers и body — они отвечают за метод запроса, его заголовки и тело.

// Отправляет GET запрос на сервер для загрузки данных о текущем пользователе.
function loadUser() {
  // Метод fetch сделал запрос по адресу baseUrl
  return fetch(baseUrl + '/users/me', { 
    // POST Получение данных на сервер
    method: 'GET',
    headers: headers
    // Обработка ответа от сервера с помощью функции checkResponse
  }).then(checkResponse);
}

// Отправляет GET запрос на сервер для загрузки карточек с сервера.
function loadCards() {
  return fetch(baseUrl + '/cards', {
    // GET Получение данных от сервера
    method: 'GET',
    headers: headers
  }).then(checkResponse);
}

// Загружает данные о пользователе и карточках.
function loadData() {
  return Promise.all([loadUser(), loadCards()]);
}

// Отправляет POST запрос на сервер для создания новой карточки с указанным названием и ссылкой.
function postNewCard(cardName, cardLink) {
  return fetch(baseUrl + '/cards', {
    // POST Отправка данных на сервер
    method: 'POST',
    headers: headers,

    // Метод JSON.stringify делает из объекта строку JSON
    body: JSON.stringify({
      name: cardName,
      link: cardLink
    })
  }).then(checkResponse);
}

// Отправляет DELETE запрос на сервер для удаления карточки по её ID.
function deleteCardRequest(cardDataToDelete) {
  return fetch(`${baseUrl}/cards/${cardDataToDelete['_id']}`, {
    method: 'DELETE', // DELETE — для удаления карточки с сервера.
    headers: headers
  }).then(checkResponse);
}

// Отправляет PATCH запрос на сервер для обновления имени и описания пользователя.
function changeUser(userName, userDescription) {
  return fetch(baseUrl + '/users/me', {
    method: 'PATCH', // PATCH — для частичного обновления ресурса. Например, при обновлении профиля пользователя;
    headers: headers,
    body: JSON.stringify({
      name: userName,
      about: userDescription
    })
  }).then(checkResponse);
}

// Отправляет PATCH запрос на сервер для обновления аватара пользователя.
function changeUserAvatar(link) {
  return fetch(baseUrl + '/users/me/avatar', {
    method: 'PATCH', // PATCH — для частичного обновления ресурса. Например, при обновлении профиля пользователя;
    headers: headers,
    body: JSON.stringify({
      avatar: link
    })
  }).then(checkResponse);
}

// Отправляет PUT запрос на сервер для добавления лайка карточке по её ID.
function addLike(cardData) {
  return fetch(`${baseUrl}/cards/likes/${cardData['_id']}`, {
    method: 'PUT', // PUT предназначен для полного обновления указанного ресурса
    headers: headers    
  }).then(checkResponse);
}

// Отправляет DELETE запрос на сервер для удаления лайка с карточки по её ID.
function removeLike(cardData) {
  return fetch(`${baseUrl}/cards/likes/${cardData['_id']}`, {
    method: 'DELETE', // DELETE — для удаления ресурса с сервера.
    headers: headers
  }).then(checkResponse);
}

export {
  checkResponse,
  loadData,
  postNewCard,
  deleteCardRequest,
  changeUser,
  changeUserAvatar,
  addLike,
  removeLike
}