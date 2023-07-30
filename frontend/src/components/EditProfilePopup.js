import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import { useContext, useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen]);

    function handleNameChange({ target }) {
        const text = target.value;
        setName(text);
    }

    function handleDescriptionChange({ target }) {
        const text = target.value;
        setDescription(text);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            name="profile"
            title="Редактировать профиль"
            btnText="Обновить"
            onSubmit={handleSubmit}
            isOpen={isOpen}
            onClose={onClose}
            children={<>
                <input type="text"
                    required
                    name="name"
                    id="name-input"
                    className="popup__info popup__info_type_name"
                    maxLength="40"
                    minLength="2"
                    placeholder="Имя Профиля"
                    value={name || ''}
                    onChange={handleNameChange} />
                <span className="popup__info-error name-input-error" />
                <input type="text"
                    required
                    name="about"
                    id="intro-input"
                    className="popup__info popup__info_type_intro"
                    maxLength="200"
                    minLength="2"
                    placeholder="Описание Профиля"
                    value={description || ''}
                    onChange={handleDescriptionChange} />
                <span className="popup__info-error intro-input-error" /> </>}
        />
    )
}