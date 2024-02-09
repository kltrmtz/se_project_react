const Header = ({ onCreateModal }) => {
  console.log("Header");

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img
            className="header__logo-image"
            src={require("../Images/logo.svg").default}
            alt="logo"
          />
        </div>
        <div className="header__date-location">{currentDate}, New York</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
            className="header__add-clothes-button"
            type="text"
            onClick={onCreateModal}
          >
            + Add Clothes
          </button>
        </div>
        <div className="header__name">Name</div>
        <div>
          <img
            className="header__avatar-image"
            src={require("../Images/avatar.svg").default}
            alt="avatar"
          />
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
