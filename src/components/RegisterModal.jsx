// import "../blocks/registerModal.css";
import ModalWithForm from "./ModalWithForm.jsx";
import React, { useEffect, useState } from "react";

const RegisterModal = ({ onSignUp, isOpen, onClose }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
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
    onSignUp({ email, password, name, avatarUrl });
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
      buttonText="Sign Up"
      title="Sign Up"
      onClose={onClose}
      isOpen={isOpen}
      onSignUp={handleSubmit}
      className="register"
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
            value={data.email}
            onChange={handleChange}
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
            value={data.password}
            onChange={handleChange}
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
            value={data.name}
            onChange={handleChange}
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
            value={data.avatarUrl}
            onChange={handleChange}
          />
        </label>
        {/* <Link to="/login" className="login__link">
          // or Log In? //{" "}
        </Link> */}
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
