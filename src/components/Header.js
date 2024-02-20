import "../blocks/header.css";
import logo from "../images/logo.svg";
import avatar from "../images/avatar.svg";
import ToggleSwitch from "./ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Header = ({ onCreateModal }) => {
  console.log("Header");

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
        <div>
          <button
            className="header__add-clothes-button"
            type="text"
            onClick={onCreateModal}
          >
            + Add Clothes
          </button>
        </div>
        <Link className="header__name" to="/profile">
          Name
        </Link>
        <div>
          <img className="header__avatar-image" src={avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

export default Header;
