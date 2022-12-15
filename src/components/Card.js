import React, { useEffect, useState } from "react";
import api from '../utils/api';

export default function Card({ card, onCardClick }) {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getInitialCards()
            .then(data => {
                setCards(data);
            })
    })

    function handleClick(card) {
        onCardClick(card);
    }

    return (
        <>
            {cards.map(card => (
                <div className="gallery__item" key={card._id}>
                    <div className="gallery__img-placeholder">
                        <img
                            src={card.link}
                            alt={card.name}
                            className="gallery__photo"
                            onClick={() => {
                                handleClick(card);
                            }}
                        />
                    </div>
                    <button type="button" className="gallery__del-button button-hover"></button>
                    <div className="gallery__caption">
                        <h2 className="gallery__item-descr">{card.name}</h2>
                        <div className="gallery__like">
                            <button type="button" className="gallery__like-button button-hover"></button>
                            <p className="gallery__like-counter">{card.likes.length}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}