import React from 'react';
import good from '../img/style/good.svg';
import nope from '../img/style/nope.svg';

export default function InfoTooltip(props) {
    return (
        <section
            className={`popup ${props.isOpen ? 'popup_opened' : ''}`}
            onClick={({ target }) => {
                if (target.classList.contains('popup_opened') || target.classList.contains('popup__button_type_close')) {
                    props.onClose();
                }
            }}>
            <div className="popup__container">
                <button
                    className="popup__button popup__button_type_close"
                    type="button"
                    onClick={props.onClose}>
                </button>
                <img
                    src={props.tooltip.image ? good : nope}
                    className="info-tooltip__image"
                    alt=""></img>
                <p className="info-tooltip__text">
                    {props.tooltip.message}
                </p>
            </div>

        </section>
    )
}