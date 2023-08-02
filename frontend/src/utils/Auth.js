// export const BASE_URL = "http://localhost:3000"
// export const BASE_URL = "https://kirkero.nomoreparties.co"
export const BASE_URL = "https://api.kirkero.nomoreparties.nomoreparties.co"

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = ({email, password}) => {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password}),
    })
    .then((res) => {
        return checkResponse(res);
    })
}

export const authorize = ({email, password}) => {
    return fetch(`${BASE_URL}/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password}),
    })
    .then((res) => {
        return checkResponse(res);
    })
}

export const getContent = () => {
    const token = localStorage.getItem("jwt");
    return fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    })
    .then((res) => {
        return checkResponse(res);
    })
}