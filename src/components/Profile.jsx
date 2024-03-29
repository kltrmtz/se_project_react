import "../blocks/profile.css";
import SideBar from "./SideBar.jsx";
import ClothesSection from "./ClothesSection.jsx";

const Profile = ({
  clothingItems,
  onSelectedCard,
  onCreateModal,
  handleCardDelete,
}) => (
  <div className="profile">
    <section className="profile__sidebar">
      <SideBar />
    </section>
    <section className="profile__clothes">
      <ClothesSection
        clothingItems={clothingItems}
        onCreateModal={onCreateModal}
        onSelectedCard={onSelectedCard}
        handleCardDelete={handleCardDelete}
      />
    </section>
  </div>
);

export default Profile;
