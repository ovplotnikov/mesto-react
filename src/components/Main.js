import React from "react";
import Cousteau from "../images/Cousteau.jpg";
import pencil from "../images/pencil.svg";

function Main() {
  // Обработчики
  function handleEditAvatarClick() {
    document
      .querySelector(".popup_type_change-avatar")
      .classList.add("popup_opened");
  }

  function handleEditProfileClick() {
    document
      .querySelector(".popup_type_edit-profile")
      .classList.add("popup_opened");
  }

  function handleAddPlaceClick() {
    document
      .querySelector(".popup_type_add-card")
      .classList.add("popup_opened");
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={Cousteau} alt="Аватар" className="profile__avatar-image" />
          <div
            className="profile__avatar-overlay"
            onClick={handleEditAvatarClick}
          >
            <img
              src={pencil}
              alt="Редактировать аватар"
              className="profile__avatar-edit-icon"
            />
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button
            className="profile__edit-button button-opacity-hover"
            type="button"
            aria-label="edit profile"
            onClick={handleEditProfileClick}
          ></button>
          <p className="profile__about">Исследователь океана</p>
        </div>
        <button
          className="profile__add-button button-opacity-hover"
          type="button"
          aria-label="add picture"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list"></ul>
      </section>
    </main>
  );
}

export default Main;