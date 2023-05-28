import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  // Состояния попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null); // Новое состояние

  // Обработчики
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    // Новый обработчик
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null); // Сброс selectedCard
  }

  return (
    <div className="app-container">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick} // Пропс для обработчика клика по карточке
        />
        <Footer />

        <PopupWithForm
          name="edit-profile"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
          <input
            type="text"
            name="name"
            className="popup__input popup__input_value_name"
            placeholder="Имя"
            minlength="2"
            maxlength="40"
            required
            id="name-input"
          />
          <span
            className="popup__error popup__input-error name-input-error"
            id="name-input-error"
          ></span>
          <input
            type="text"
            name="about"
            className="popup__input popup__input_value_about"
            placeholder="О себе"
            minlength="2"
            maxlength="200"
            required
            id="about-input"
          />
          <span
            className="popup__error popup__input-error about-input-error"
            id="about-input-error"
          ></span>
        </PopupWithForm>

        <PopupWithForm
          name="add-card"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
          <input
            type="text"
            name="name"
            className="popup__input popup__input_value_place"
            placeholder="Название"
            minlength="2"
            maxlength="30"
            required
            id="place-input"
          />
          <span
            className="popup__error popup__input-error place-input-error"
            id="place-input-error"
          ></span>
          <input
            type="url"
            name="link"
            className="popup__input popup__input_value_link"
            placeholder="Ссылка на картинку"
            required
            id="link-input"
          />
          <span
            className="popup__error popup__input-error link-input-error"
            id="link-input-error"
          ></span>
        </PopupWithForm>

        <PopupWithForm name="confirm" title="Вы уверены?">
          <button className="popup__save-button" type="submit">
            Да
          </button>
        </PopupWithForm>

        <PopupWithForm
          name="change-avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
          <input
            type="url"
            name="link"
            className="popup__input popup__input_value_link"
            placeholder="Ссылка на картинку"
            required
            id="avatar-link-input"
          />
          <span
            className="popup__error popup__input-error avatar-link-input-error"
            id="avatar-link-input-error"
          ></span>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
