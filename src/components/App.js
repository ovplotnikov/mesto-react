import Cousteau from "../images/Cousteau.jpg";
import pencil from "../images/pencil.svg";
import React from "react";
import Header from "./Header";

function App() {
  return (
    <div className="app-container">
      <div className="page">
        <Header />
        <main className="content">
          <section className="profile">
            <div className="profile__avatar-container">
              <img
                src={Cousteau}
                alt="Аватар"
                className="profile__avatar-image"
              />
              <div className="profile__avatar-overlay">
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
              ></button>
              <p className="profile__about">Исследователь океана</p>
            </div>
            <button
              className="profile__add-button button-opacity-hover"
              type="button"
              aria-label="add picture"
            ></button>
          </section>
          <section className="elements">
            <ul className="elements__list"></ul>
          </section>
        </main>
        <footer className="footer">
          <p className="footer__text">&copy; 2023 Mesto Russia</p>
        </footer>
        <div className="popup popup_type_edit-profile">
          <div className="popup__container">
            <button
              className="popup__close-button button-opacity-hover"
              type="button"
            ></button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <form
              className="popup__form"
              name="edit-profile"
              id="popup__form_type_edit-profile"
              noValidate
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
              <button
                className="popup__save-button popup__save-button_disabled"
                type="submit"
                aria-label="save button"
                disabled
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_add-card">
          <div className="popup__container">
            <button
              className="popup__close-button button-opacity-hover"
              type="button"
            ></button>
            <h2 className="popup__title">Новое место</h2>
            <form
              className="popup__form"
              name="add-card"
              id="popup__form_type_add-card"
              noValidate
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
              <button
                className="popup__save-button popup__save-button_disabled"
                type="submit"
                aria-label="save button"
                disabled
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>

        <div className="popup popup_type_confirm" id="popup_confirm">
          <div className="popup__container">
            <button
              className="popup__close-button button-opacity-hover"
              type="button"
            ></button>
            <form
              className="popup__form"
              name="confirm_form"
              id="place_confirm"
              noValidate
            >
              <h2 className="popup__title">Вы уверены?</h2>
              <button className="popup__save-button" type="submit">
                Да
              </button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_change-avatar" id="popup_avatar">
          <div className="popup__container">
            <button
              className="popup__close-button button-opacity-hover"
              type="button"
            ></button>
            <form
              className="popup__form"
              name="change-avatar"
              id="popup__form_type_change-avatar"
              noValidate
            >
              <h2 className="popup__title">Обновить аватар</h2>
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
              <button
                className="popup__save-button popup__save-button_disabled"
                type="submit"
                disabled
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="popup popup_type_image">
        <div className="popup__container popup__container_type_image">
          <button
            className="popup__close-button button-opacity-hover"
            type="button"
          ></button>
          <img src="#" alt="-" className="popup__image" />
          <p className="popup__image-title"></p>
        </div>
      </div>
      <template class="elements-template">
        <li class="elements__item">
          <button
            class="elements__delete-button button-opacity-hover"
            type="button"
            aria-label="delete picture"
          ></button>
          <img src="#" alt="#" class="elements__image" />
          <div class="elements__info">
            <h2 class="elements__title"></h2>
            <div class="elements__like-container">
              <button
                class=" elements__like-button"
                type="button"
                aria-label="like button"
              ></button>
              <p class="elements__like-counter" data-likes="0">
                0
              </p>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
