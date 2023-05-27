import React from "react";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <button
          className="popup__close-button button-opacity-hover"
          type="button"
          onClick={props.onClose}
        ></button>

        <h2 className="popup__title">{props.title}</h2>
        <form
          className="popup__form"
          name={props.name}
          id={`popup__form_type_${props.name}`}
          noValidate
        >
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
