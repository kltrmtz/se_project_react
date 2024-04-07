import "../blocks/sideBar.css";
import avatar from "../images/avatar.svg";
import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const SideBar = ({ onChangeProfileData, onLogout }) => {
  // const currentUser = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <img className="sidebar__avatar-image" src={avatar} alt="avatar" />
      <div className="sidebar__name">Name</div>
      <div className="profile__sidebar">
        <button
          className="profile__change-data"
          type="text"
          onClick={onChangeProfileData}
        >
          Change profile data
        </button>
        <button className="profile__logout" type="text" onClick={onLogout}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
