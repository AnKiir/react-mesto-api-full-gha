import React from 'react';

export default function PopupWithForm({ name, isOpen, onClose, title, btnText, onSubmit, children }) {
    return (
        <div className={`popup popup__${name} ${isOpen && "popup_opened"}`}>
            <div className="popup__container">
                <h2 className="popup__title">{title}</h2>
                <form className="popup__form"
                    action="#"
                    onSubmit={onSubmit}
                    name={name}
                    noValidate>
                    {children}
                    <button
                        className="popup__button popup__button_type_submit"
                        type="submit">{btnText}</button>
                </form>
                <button
                    onClick={onClose}
                    className="popup__button popup__button_type_close"
                    type="button"></button>
            </div>
        </div>
    )
}