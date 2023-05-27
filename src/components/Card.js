import React from "react";

function Card(props) {
  return (
    <li className="elements__item">
      <button
        className="elements__delete-button button-opacity-hover"
        type="button"
        aria-label="delete picture"
      ></button>
      <img
        src={props.card.link}
        alt={props.card.name}
        className="elements__image"
      />
      <div className="elements__info">
        <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__like-container">
          <button
            className="elements__like-button"
            type="button"
            aria-label="like button"
          ></button>
          <p
            className="elements__like-counter"
            data-likes={props.card.likes.length}
          >
            {props.card.likes.length}
          </p>
        </div>
      </div>
    </li>
  );
}

export default Card;
