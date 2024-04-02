import "../blocks/header.css";
import logo from "../images/logo.svg";
import avatar from "../images/avatar.svg";
import ToggleSwitch from "./ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";

const Header = ({ onCreateModal, isLoggedIn }) => {
  console.log("Header");
  let { name, avatar } = useContext(CurrentUserContext);
  name = name || "";

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img className="header__logo-image" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header__date-location">{currentDate}, New York</div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        {isLoggedIn && (
          <div>
            <button
              className="header__add-clothes-button"
              type="text"
              onClick={onCreateModal}
            >
              + Add Clothes
            </button>
          </div>
        )}
        {!isLoggedIn && (
          <div>
            <button
              className="header__signup-button"
              type="text"
              onClick={onCreateModal}
            >
              Sign Up
            </button>
            <button
              className="header__login-button"
              type="text"
              onClick={onCreateModal}
            >
              Log In
            </button>
          </div>
        )}
        {isLoggedIn && (
          <div>
            <Link className="header__name" to="/profile">
              <div>Name</div>
            </Link>
            <div>
              <img className="header__avatar-image" src={avatar} alt="avatar" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

export default Header;
