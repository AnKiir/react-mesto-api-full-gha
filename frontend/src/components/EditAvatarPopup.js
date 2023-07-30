import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import { useRef } from "react";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const ref = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: ref.current.value
        });
    }

    return (
        <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            btnText="Обновить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}>
            <input
            ref={ref}
                type="url"
                name="avatar"
                id="avatar"
                className="popup__info popup__info_type_link"
                minLength="2"
                placeholder="Ссылка на картинку"
                required></input>
            <span className="popup__info-error avatar-error" />
        </PopupWithForm>
    )
}
