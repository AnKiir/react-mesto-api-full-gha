import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import logoPath from '../img/logo/logo_w.svg';

export default function Header({ userName, onLogout }) {
    return (
        <header className="header">
            <img className="header__logo"
                src={logoPath}
                alt="Логотип портала" />

            <div className='header__auth'>
                {userName && <p className="header__mail">{userName}</p>}

                <Routes>

                    <Route path="/"
                        element={<Link to="/signin"
                            className="header__logout"
                            onClick={onLogout}>
                            Выйти
                        </Link>} />

                    <Route path="/signin"
                        element={<Link to="/signup"
                            className="header__link">
                            Регистрация
                        </Link>} />

                    <Route path="/signup"
                        element={<Link to="/signin"
                            className="header__link">
                            Войти
                        </Link>} />

                </Routes>

            </div>
        </header>
    )
}