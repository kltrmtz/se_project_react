// import "../blocks/registerModal.css";
import ModalWithForm from "./ModalWithForm.jsx";
import React, { useEffect, useState } from "react";

const RegisterModal = ({ isOpen, onClose, onSubmit, linkToLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatarUrl] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  const handleAvatarUrlChange = (e) => {
    setAvatarUrl(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password, name, avatar });
  };

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setName("");
      setAvatarUrl("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      buttonText="Sign Up"
      title="Sign Up"
      onClose={onClose}
      isOpen={isOpen}
      className="register"
      onSubmit={handleSubmit}
    >
      <div className="modal__form">
        <label>
          Email*
          <input
            className="modal__form-input"
            type="text"
            name="email"
            id="modal-email-input"
            placeholder="Email"
            minLength="1"
            maxLength="30"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <label>
          Password*
          <input
            className="modal__form-input"
            type="text"
            name="password"
            id="modal-password-input"
            placeholder="Password"
            minLength="1"
            maxLength="30"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>
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
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label>
          Avatar URL *
          <input
            className="modal__form-input"
            type="url"
            name="link"
            id="modal-url-input"
            placeholder="Avatar URL"
            minLength="1"
            maxLength="600"
            value={avatar}
            onChange={handleAvatarUrlChange}
          />
        </label>
        {/* <Link to="/login" className="login__link">
          or Log in
        </Link> */}
        <div className="modal__buttons">
          <button className="modal__button" type="submit">
            Sign Up
          </button>
          <button className="modal__link" type="button" onClick={linkToLogin}>
            or Log in
          </button>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
