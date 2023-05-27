import React, { useEffect, useState } from "react";
import pencil from "../images/pencil.svg";
import api from "./Api";

function Main(props) {
  // Declare new state variables
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  // Add an effect for API call
  useEffect(() => {
    api
      .getUserData() // assuming getUserData is the correct API call
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
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
            src={userAvatar} // Apply the user avatar as an img src
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
        <ul className="elements__list"></ul>
      </section>
    </main>
  );
}

export default Main;
