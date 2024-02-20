import "../blocks/card.css";

const ItemCard = ({ clothingItem, onSelectedCard }) => {
  return (
    <div className="card">
      <div>
        <h3 className="card__name">{clothingItem.name}</h3>
        <img
          src={clothingItem.link}
          className="card__image"
          onClick={() => onSelectedCard(clothingItem)}
          alt={clothingItem.name}
        />
      </div>
    </div>
  );
};

export default ItemCard;
