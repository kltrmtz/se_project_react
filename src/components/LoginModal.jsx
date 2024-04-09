// import "../blocks/loginModal.css";
import ModalWithForm from "./ModalWithForm.jsx";
import React, { useEffect, useState } from "react";

const LoginModal = ({ isOpen, onClose, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      buttonText="Log In"
      title="Log In"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      className="login"
    >
      <div className="modal__form">
        <label>
          Email
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
          Password
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
        <Link to="/register" className="signup__link">
          // or Sign Up? //{" "}
        </Link>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
