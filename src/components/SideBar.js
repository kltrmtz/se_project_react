import "../blocks/sideBar.css";
import avatar from "../images/avatar.svg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div>
        <img className="sidebar__avatar-image" src={avatar} alt="avatar" />
      </div>
      <div>
        {/* This will be a drop down button */}
        <button className="sidebar__name" type="text">
          Name
        </button>
      </div>
    </div>
  );
};

export default SideBar;
