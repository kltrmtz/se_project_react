import React, { useState } from "react";
import "../blocks/modalwithform.css";
import ModalWithForm from "./ModalWithForm.js";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [link, setUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const [weather, setRadio] = useState("");
  const handleRadioChange = (e) => {
    console.log(e.target.value);
    setRadio(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, link, weather });
  };

  return (
    <ModalWithForm
      title="New Garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <div className="modal__form">
        <label>
          Name
          <input
            className="modal__form-input"
            type="text"
            name="name"
            id="modal-name-input"
            placeholder="Name"
            minLength="1"
            maxLength="30"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label>
          Image
          <input
            className="modal__form-input"
            type="url"
            name="link"
            id="modal-url-input"
            placeholder="Image URL"
            minLength="1"
            maxLength="30"
            value={link}
            onChange={handleUrlChange}
          />
        </label>
      </div>
      <p>Select the weather type:</p>
      <div className="modal__radio">
        <div>
          <label className="modal__input">
            <input
              className="modal__input-radio"
              type="radio"
              name="weather"
              id="hot"
              value="hot"
              onChange={handleRadioChange}
            />
            Hot
          </label>
        </div>
        <div>
          <label className="modal__input">
            <input
              className="modal__input-radio"
              type="radio"
              name="weather"
              id="warm"
              value="warm"
              onChange={handleRadioChange}
            />
            Warm
          </label>
        </div>
        <div>
          <label className="modal__input">
            <input
              className="modal__input-radio"
              type="radio"
              name="weather"
              id="cold"
              value="cold"
              onChange={handleRadioChange}
            />
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;