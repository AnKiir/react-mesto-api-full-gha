import { useState } from "react"
import { Link } from "react-router-dom";

export default function Register({ registerUser }) {
    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    })

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormValue({ ...formValue, [name]: value });
    }

    const { email, password } = formValue;

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (!formValue.email || !formValue.password) {
            return;
        }
        registerUser({ email, password });
    }

    return (
        <div>
            <h2 className="login__title">Регистрация</h2>
            <form action="#" className="login__form" onSubmit={handleSubmit}>
                <input
                    className="login__input"
                    required
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    onChange={handleChange}
                    value={formValue.email} />

                <input
                    className="login__input"
                    required
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    onChange={handleChange}
                    value={formValue.password} />
                <button className="login__button" type="submit">Зарегистрироваться</button>
            </form>
            <Link to="/signin" className="login__link">Уже зарегистрированы? Войти</Link>
        </div>
    )
}