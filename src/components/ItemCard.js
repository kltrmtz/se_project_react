import "../blocks/card.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card">
      <div>
        <div className="card__name">{item.name}</div>
        <img
          src={item.link}
          className="card__image"
          onClick={() => onSelectCard(item)}
          alt="card-image"
        />
      </div>
    </div>
  );
};

export default ItemCard;
