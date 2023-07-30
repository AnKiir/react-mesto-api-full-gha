import React from 'react';
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
    const currentUser = useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardIsLiked = (`element__like-button ${isLiked && 'element__like-button_active'}`);

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        onCardDelete(card);
    }

    return (
        <div className="element">
            <img className="element__image"
                alt={card.name}
                src={card.link}
                onClick={() => handleClick(card)} />
            {isOwn && <button type="button"
                className="element__delete-button"
                onClick={handleDeleteClick}
                aria-label="Удалить фото" />}
            <div className="element__info">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__like-container">
                    <button className={cardIsLiked}
                        onClick={handleLikeClick}
                        type="button"
                        aria-label="Поставить лайк" />
                    <p className="element__like-counter">{card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}