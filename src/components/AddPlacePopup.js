import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={onAddPlace}
    >
      <input
        type="text"
        name="name"
        className="popup__input popup__input_value_place"
        placeholder="Название"
        minLength="2"
        maxLength="30"
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
  );
}

export default AddPlacePopup;
