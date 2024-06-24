export {
  checkResponse,
  loadData,
  postNewCard,
  deleteCardRequest,
  changeUserData,
  changeUserAvatar,
  addLike,
  removeLike
}

const baseUrl = 'https://nomoreparties.co/v1/pwff-cohort-1';
const headers = {
  authorization: 'cfe0ed0c-4524-49f2-826d-b9561571abd4',
  'Content-Type': 'application/json'
};

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Не удалось получить данные: ${res.status}`);
}

function loadUserData() {
  return fetch(baseUrl + '/users/me', {
    method: 'GET',
    headers: headers
  }).then(checkResponse);
}

function loadCardsData() {
  return fetch(baseUrl + '/cards', {
    method: 'GET',
    headers: headers
  }).then(checkResponse);
}

function loadData() {
  return Promise.all([loadUserData(), loadCardsData()]);
}

function postNewCard(cardName, cardLink) {
  return fetch(baseUrl + '/cards', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      name: cardName,
      link: cardLink
    })
  }).then(checkResponse);
}

function deleteCardRequest(cardDataToDelete) {
  return fetch(`${baseUrl}/cards/${cardDataToDelete['_id']}`, {
    method: 'DELETE',
    headers: headers
  }).then(checkResponse);
}

function changeUserData(userName, userDescription) {
  return fetch(baseUrl + '/users/me', {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify({
      name: userName,
      about: userDescription
    })
  }).then(checkResponse);
}

function changeUserAvatar(link) {
  return fetch(baseUrl + '/users/me/avatar', {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify({
      avatar: link
    })
  }).then(checkResponse);
}

function addLike(cardData) {
  return fetch(`${baseUrl}/cards/likes/${cardData['_id']}`, {
    method: 'PUT',
    headers: headers
  }).then(checkResponse);
}

function removeLike(cardData) {
  return fetch(`${baseUrl}/cards/likes/${cardData['_id']}`, {
    method: 'DELETE',
    headers: headers
  }).then(checkResponse);
}

