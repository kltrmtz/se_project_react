import "../blocks/modalwithform.css";
import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const ItemModal = ({ selectedCard, onClose, onCreateModal, isLoggedIn }) => {
  const currentUser = useContext(CurrentUserContext);
  // Checking if the current user is the owner of the current clothing item
  const isOwn = selectedCard.owner === currentUser._id;

  // Creating a variable which you'll then set in `className` for the delete button
  const itemDeleteButton = `modal__preview-delete ${
    isOwn ? "modal__preview-delete_unhidden" : "modal__preview-delete_hidden"
  }`;

  return (
    <div className={`modal`}>
      <div className="modal__preview">
        <button
          className="modal__preview-close-button"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="modal__preview-image"
          src={selectedCard.imageUrl}
          alt="prieview image"
        ></img>
        <div className="modal__preview-text">
          <div>{selectedCard.name}</div>
          <div>Weather: {selectedCard.weather}</div>
        </div>
        {isOwn && (
          <button
            className={`modal__preview-delete ${itemDeleteButton}`}
            type="button"
            onClick={onCreateModal}
          >
            Delete item
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemModal;
