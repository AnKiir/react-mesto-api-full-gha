import React from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Card from "./Card";

export default function Main({ onEditAvatar, onEditProfile, onAddCard, onCardClick, onCardLike, onCardDelete, cards}) {

        const currentUser = useContext(CurrentUserContext);
        const cardElements = cards.map(card => (
            <Card key={card._id}
             card ={card}
             onCardClick={onCardClick}
             onCardLike={onCardLike}
             onCardDelete={onCardDelete}
            />
        ))

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar" onClick={onEditAvatar}>
                    <img src={currentUser.avatar}
                        alt="Аватарка"
                        className="profile__image"
                        onClick={onEditAvatar} />
                </div>

                <div className="profile__data">
                    <div className="profile__info">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <p className="profile__intro">{currentUser.about}</p>
                    </div>
                    <button className="profile__edit-button"
                        type="button"
                        title="Редактировать профиль"
                        onClick={onEditProfile} />
                </div>
                <button className="profile__add-button"
                    type="button"
                    title="Загрузить фотографию"
                    onClick={onAddCard} />
            </section>

            <div className="elements">
                {cardElements}
            </div>
        </main>
    )
}
