import React from "react"

export default function ImagePopup({ onClose, card}) {
    return (
        <div className={`popup popup-element ${card.link ? 'popup_opened' : ''}`}>
            <div className="popup__container-element">
                <button 
                className="popup__button popup__button_type_close" 
                onClick={onClose}
                type="button" />
                <img className="popup__image"
                src={card.link} 
                alt={card.name} />
                <p className="popup__subtitle">{card.name}</p>
            </div>
        </div>
    )
}