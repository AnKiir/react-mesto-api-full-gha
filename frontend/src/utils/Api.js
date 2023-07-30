class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  // errors
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getData() {
    return Promise.all([this.getUserData(), this.getInitialCards()]);
  }

  // пользователь
  getUserData() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })
      .then((res) => this._checkResponse(res))
  }

  // профиль пользователя
  setUserInfo({ name, about }) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name, about
      })
    })
      .then((res) => this._checkResponse(res))
  }

  // аватарка пользователя
  editAvatar({ avatar }) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar
      })
    })
      .then((res) => this._checkResponse(res))
  }

  // карточки
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    })
      .then((res) => this._checkResponse(res))
  }

  // добавление карточки
  addCard(name, link) {
    console.log(name, link);
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name, link
      })
    })
      .then((res) => this._checkResponse(res))
  }

  // лайк карточки
  setLike(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers,
    })
      .then((res) => this._checkResponse(res))
  }

  deleteLike(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then((res) => this._checkResponse(res))
  }

  toggleLike(cardId, isLiked) {
    return isLiked ? this.deleteLike(cardId) : this.setLike(cardId)
  }

  // удаление карточки
  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then((res) => this._checkResponse(res))
  }

}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-63',
  headers: {
    authorization: '46df0b53-e88b-4480-800a-7a7df875992f',
    'Content-Type': 'application/json',
  },
});

export default api
