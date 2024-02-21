import "../blocks/clothesSection.css";
import { defaultClothingItems } from "../utils/constants.js";
import ItemCard from "./ItemCard.js";

const ClothesSection = ({ onCreateModal, clothingItems, onSelectedCard }) => {
  // console.log(ClothesSection);
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
          />
        ))}
      </section>
    </div>
  );
};
export default ClothesSection;
