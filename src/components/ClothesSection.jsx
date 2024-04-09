import "../blocks/clothesSection.css";
import { defaultClothingItems } from "../utils/constants.js";
import ItemCard from "./ItemCard.jsx";

const ClothesSection = ({
  onCreateModal,
  clothingItems,
  onSelectedCard,
  isLoggedIn,
  onCardLike,
}) => {
  return (
    <div className="clothesItems">
      <section className="clothesItems__title">
        <div>Your items</div>
        <div>
          <button
            className="clothesItems__add-new-button"
            type="text"
            onClick={onCreateModal}
          >
            + Add new
          </button>
        </div>
      </section>
      <section className="clothesItems__cards">
        {clothingItems.map((item) => (
          <ItemCard
            item={item}
            key={item._id}
            onSelectedCard={onSelectedCard}
            onClick={clothingItems}
            onCardLike={onCardLike}
            isLoggedIn={isLoggedIn}
          />
        ))}
      </section>
    </div>
  );
};
export default ClothesSection;
