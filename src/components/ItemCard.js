import "../blocks/card.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card">
      <div>
        <h3 className="card__name">{item.name}</h3>
        <img
          src={item.link}
          className="card__image"
          onClick={() => onSelectCard(item)}
          alt={item.name}
        />
      </div>
    </div>
  );
};

export default ItemCard;
