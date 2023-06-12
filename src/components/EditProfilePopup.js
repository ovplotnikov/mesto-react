import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
    >
      <input
        type="text"
        name="name"
        className="popup__input popup__input_value_name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
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
        minLength="2"
        maxLength="200"
        required
        id="about-input"
      />
      <span
        className="popup__error popup__input-error about-input-error"
        id="about-input-error"
      ></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
