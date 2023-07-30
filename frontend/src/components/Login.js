import React, { useState } from "react"

export default function Login({ onLogin }) {
    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    })

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormValue({ ...formValue, [name]: value });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (!formValue.email || !formValue.password) {
            return;
        }
        onLogin({
            email: formValue.email, 
            password: formValue.password});
    }

    return (
        <div className="login">
            <h2 className="login__title">Вход</h2>
            <form action="#" className="login__form" onSubmit={handleSubmit}>
                <input
                    className="login__input"
                    id="email"
                    required
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formValue.email}
                    onChange={handleChange} />

                <input
                    className="login__input"
                    id="password"
                    required
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={formValue.password}
                    onChange={handleChange} />

                <button className="login__button" type="submit">Войти</button>
            </form>
        </div>
    )
}