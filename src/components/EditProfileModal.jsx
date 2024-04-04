// import "../blocks/editProfileModal.css";
import ModalWithForm from "./ModalWithForm.jsx";
import React, { useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const EditProfileModal = ({ onSaveChange, isOpen, onClose }) => {
  const { name, avatarUrl } = React.useContext(CurrentUserContext);
  const [data, setData] = useState({
    name: "",
    avatarUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveChange({ name, avatarUrl });
    // onSignUp(data);
  };

  // useState(() => {
  //   if (isOpen) {
  //     setData("");
  //   }
  // }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setData("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      buttonText="Save Changes"
      title="Change profile data"
      onClose={onClose}
      isOpen={isOpen}
      onSaveChange={handleSubmit}
      className="edit__profile"
    >
      <div className="modal__form">
        <label>
          Name *
          <input
            className="modal__form-input"
            type="text"
            name="name"
            id="modal-name-input"
            placeholder="Name"
            minLength="1"
            maxLength="30"
            value={data.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Avatar *
          <input
            className="modal__form-input"
            type="url"
            name="link"
            id="modal-url-input"
            placeholder="Avatar URL"
            minLength="1"
            maxLength="600"
            value={data.avatarUrl}
            onChange={handleChange}
          />
        </label>
      </div>
    </ModalWithForm>
  );
};

export default EditProfileModal;
