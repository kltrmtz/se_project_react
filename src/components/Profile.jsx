import "../blocks/profile.css";
import SideBar from "./SideBar.js";
import ClothesSection from "./ClothesSection.js";

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
