// import "../blocks/loginModal.css";
import ModalWithForm from "./ModalWithForm.jsx";
import React, { useEffect, useState } from "react";

const LoginModal = ({ handleCloseModal, onLogin, isOpen }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
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
    // onLogin({ email, password });
    onLogin(data);
  };

  return (
    <ModalWithForm
      buttonText="Log In"
      title="Log In"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onLogin={handleSubmit}
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
            value={data.email}
            onChange={handleChange}
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
            value={data.password}
            onChange={handleChange}
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
//     <div className="login">
//       <Logo title={"CryptoDucks"} />
//       <p className="login__welcome">
//         This app contains highly sensitive information. Please sign in or
//         register to access CryptoDucks.
//       </p>
//       <form className="login__form">
//         <label htmlFor="username">Login:</label>
//         <input
//           id="username"
//           required
//           name="username"
//           type="text"
//           value={data.username}
//           onChange={handleChange}
//         />
//         <label htmlFor="password">Password:</label>
//         <input
//           id="password"
//           required
//           name="password"
//           type="password"
//           value={data.password}
//           onChange={handleChange}
//         />
//         <div className="login__button-container">
//           <button type="submit" className="login__link">
//             Log in
//           </button>
//         </div>
//       </form>

//       <div className="login__signup">
//         <p>Not a member yet?</p>
//         <Link to="/register" className="signup__link">
//           Sign up here
//         </Link>
//       </div>
//     </div>
//   );
// };

export default LoginModal;
