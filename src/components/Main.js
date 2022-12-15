import React, { useEffect, useState } from "react";
import editIconBig from '../images/edit-icon_big.svg';
import editIcon from '../images/edit-icon.svg';
import addIcon from '../images/add-icon.svg';
import api from '../utils/api';
import Card from './Card';

export default function Main({
    onEditProfile,
    onAddPlace,
    onEditAvatar,
    onCardClick,
}) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);


    useEffect(() => {
        api.getUserData()
            .then(data => {
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar);
            });

        api.getInitialCards()
            .then(data => {
                setCards(data);
            })
    })

    return (
        <main className="content">
            <section className="profile">
                <img src={userAvatar} alt={"Аватар"} className="profile__avatar" />
                <div className="profile__avatar-hover" onClick={onEditAvatar}>
                    <img src={editIconBig} alt={"Редактировать"} className="profile__avatar-change" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button
                        type="button"
                        className="profile__edit-button button-hover"
                        onClick={onEditProfile}
                    >
                        <img src={editIcon} alt={"Редактировать"} className="profile__edit-icon" />
                    </button>
                    <p className="profile__about-me">{userDescription}</p>
                </div>
                <button
                    type="button"
                    className="profile__add-button button-hover"
                    onClick={onAddPlace}
                >
                    <img src={addIcon} alt={"Добавить"} className="profile__add-icon" />
                </button>
            </section>
            <section className="gallery">
                {cards.map(card => (
                    <Card
                        card={card}
                        onCardClick={onCardClick}
                        key={card._id}
                    />
                ))}
            </section>
        </main>
    )
}