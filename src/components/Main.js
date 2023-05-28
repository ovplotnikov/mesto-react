import React, { useEffect, useState } from "react";
import pencil from "../images/pencil.svg";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  // Объявить новые переменные состояния
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  // Добавить эффект для вызова API
  useEffect(() => {
    api
      .getUserData()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((error) => {
        console.log(error);
      });

    api
      .getInitialCards()
      .then((cardData) => {
        setCards(cardData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={userAvatar} // Применить аватар пользователя как img src
            alt="Аватар"
            className="profile__avatar-image"
          />
          <div className="profile__avatar-overlay" onClick={props.onEditAvatar}>
            <img
              src={pencil}
              alt="Редактировать аватар"
              className="profile__avatar-edit-icon"
            />
          </div>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            className="profile__edit-button button-opacity-hover"
            type="button"
            aria-label="edit profile"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button
          className="profile__add-button button-opacity-hover"
          type="button"
          aria-label="add picture"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={props.onCardClick} /> // Добавили обработчик клика по карточке
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
