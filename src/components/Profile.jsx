import "../blocks/profile.css";
import SideBar from "./SideBar.jsx";
import ClothesSection from "./ClothesSection.jsx";

const Profile = ({
  clothingItems,
  onSelectedCard,
  onCreateModal,
  handleCardDelete,
  isLoggedIn,
  onCardLike,
  onChangeProfileData,
  onLogOut,
}) => (
  <div className="profile">
    <section className="profile__sidebar">
      <SideBar onChangeProfileData={onChangeProfileData} onLogOut={onLogOut} />
    </section>
    <section className="profile__clothes">
      <ClothesSection
        clothingItems={clothingItems}
        onCreateModal={onCreateModal}
        onSelectedCard={onSelectedCard}
        handleCardDelete={handleCardDelete}
        isLoggedIn={isLoggedIn}
        onCardLike={onCardLike}
      />
    </section>
  </div>
);

export default Profile;
