import "../blocks/sideBar.css";
import avatar from "../images/avatar.svg";
import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const SideBar = ({ onChangeProfileData, onLogOut }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="profile__user">
        <img
          className="sidebar__avatar-image"
          src={currentUser.avatar}
          alt="avatar"
        />
        <div className="sidebar__name">{currentUser.name}</div>
      </div>
      {currentUser && (
        <div className="profile__sidebar">
          <button
            className="profile__change-data"
            type="text"
            onClick={onChangeProfileData}
          >
            Change profile data
          </button>
          <button className="profile__logout" type="text" onClick={onLogOut}>
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default SideBar;
