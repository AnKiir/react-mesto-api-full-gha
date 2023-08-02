class Api {
  constructor(options) {
    this._url = options.baseUrl;
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
    const token = localStorage.getItem("jwt");
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
      .then((res) => this._checkResponse(res))
  }

  // профиль пользователя
  setUserInfo({ name, about }) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        about: about,
      })
    })
      .then((res) => this._checkResponse(res))
  }

  // аватарка пользователя
  editAvatar({ avatar }) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: avatar,
      })
    })
      .then((res) => this._checkResponse(res))
  }

  // карточки
  getInitialCards() {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: `Bearer ${token}`
      },
    })
      .then((res) => this._checkResponse(res))
  }

  // добавление карточки
  addCard(name, link) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name, link
      })
    })
      .then((res) => this._checkResponse(res))
  }

  // лайк карточки
  setLike(cardId) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => this._checkResponse(res))
  }

  deleteLike(cardId) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`
      },
    })
      .then((res) => this._checkResponse(res))
  }

  toggleLike(cardId, isLiked) {
    return isLiked ? this.deleteLike(cardId) : this.setLike(cardId)
  }

  // удаление карточки
  deleteCard(cardId) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`
      },
    })
      .then((res) => this._checkResponse(res))
  }

}

const api = new Api({
  // baseUrl: 'http://localhost:3000',
  baseUrl: 'https://kirkero.nomoreparties.co/',
});

export default api
