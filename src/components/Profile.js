import "../blocks/profile.css";
import SideBar from "./SideBar.js";
import ClothesSection from "./ClothesSection.js";

const Profile = ({
  clothingItems,
  onSelectedCard,
  onCreateModal,
  onCardDelete,
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
        //     onCardDelete={onCardDelete}
      />
    </section>
  </div>
);

export default Profile;
