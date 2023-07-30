import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import { useEffect, useRef } from "react";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
    const nameRef = useRef();
    const linkRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace(nameRef.current.value, linkRef.current.value);
    }

    useEffect(() => {
        nameRef.current.value = ''
        linkRef.current.value = ''
    }, [isOpen])

    return (
        <PopupWithForm
            name="add-card"
            title="Новое место"
            btnText="Обновить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}>
            <input
                ref={nameRef}
                type="text"
                name="name"
                id="title-input"
                className="popup__info popup__info_type_title"
                maxLength="30"
                minLength="2"
                placeholder="Название"
                required />
            <span className="popup__info-error name-input-error" />
            <input
                ref={linkRef}
                type="url"
                name="link"
                id="link-input"
                className="popup__info popup__info_type_link"
                minLength="2"
                placeholder="Ссылка на картинку"
                required />
            <span className="popup__info-error intro-input-error" />
        </PopupWithForm>
    )
}