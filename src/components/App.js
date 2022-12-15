import React, { useEffect, useState } from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        submitValue="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          className="popup__input popup__input_personal-data_name"
          name="personal-data_name"
          placeholder="Имя"
          required minLength="2"
          maxLength="40"
        />
        <span className="popup__span-error popup__span-error_personal-data_name"></span>
        <input
          type="text"
          className="popup__input popup__input_personal-data_about-me"
          name="personal-data_about-me"
          placeholder="О себе"
          required minLength="2"
          maxLength="200"
        />
        <span className="popup__span-error popup__span-error_personal-data_about-me"></span>
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        submitValue="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="url"
          className="popup__input popup__input_avatar_link"
          name="avatar_link"
          placeholder="Укажите ссылку"
          required
        />
        <span className="popup__span-error popup__span-error_avatar_link"></span>
      </PopupWithForm>

      <PopupWithForm
        name="gallery"
        title="Новое место"
        submitValue="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          className="popup__input popup__input_card_name"
          name="card_name" placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__span-error popup__span-error_card_name"></span>
        <input
          type="url"
          className="popup__input popup__input_card_link"
          name="card_link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__span-error popup__span-error_card_link"></span>
      </PopupWithForm>

      <PopupWithForm
        name="delete-card"
        title="Вы уверены?"
        submitValue="Да"
        onClose={closeAllPopups}
      >
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
