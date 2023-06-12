import React, { useState, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "./contexts/CurrentUserContext";
import api from "../utils/Api";

function EditAvatarPopup({ isOpen, onClose }) {
  const [avatar, setAvatar] = useState("");
  const currentUser = useContext(CurrentUserContext);

  function handleChange(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // обновление аватара пользователя
    api
      .setUserAvatar(avatar)
      .then((res) => {
        currentUser.setUserAvatar(res.avatar);
        onClose();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <PopupWithForm
      name="change-avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        name="link"
        className="popup__input popup__input_value_link"
        placeholder="Ссылка на картинку"
        required
        id="avatar-link-input"
        value={avatar || ""}
        onChange={handleChange}
      />
      <span
        className="popup__error popup__input-error avatar-link-input-error"
        id="avatar-link-input-error"
      ></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
