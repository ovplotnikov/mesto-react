import React, { useEffect, useContext, useState } from "react";
import pencil from "../images/pencil.svg";
import api from "../utils/Api";
import Card from "./Card";
import CurrentUserContext from "./contexts/CurrentUserContext";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  useEffect(() => {
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
            src={currentUser ? currentUser.avatar : ""}
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
          <h1 className="profile__name">
            {currentUser ? currentUser.name : ""}
          </h1>
          <button
            className="profile__edit-button button-opacity-hover"
            type="button"
            aria-label="edit profile"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__about">
            {currentUser ? currentUser.about : ""}
          </p>
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
            <Card key={card._id} card={card} onCardClick={props.onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
