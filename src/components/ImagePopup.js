import React from "react";

function ImagePopup(props) {
  return (
    <div className="popup popup_type_image">
      <div className="popup__container popup__container_type_image">
        <button
          className="popup__close-button button-opacity-hover"
          type="button"
        ></button>
        <img src={props.src} alt={props.alt} className="popup__image" />
        <p className="popup__image-title">{props.title}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
