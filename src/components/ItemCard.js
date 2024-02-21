import "../blocks/card.css";

const ItemCard = ({ item, onSelectedCard }) => {
  const onCardClick = () => {
    onSelectedCard(item);
  };

  return (
    <div className="card">
      <div>
        <h3 className="card__name">{item.name}</h3>
        <img
          src={item.imageUrl}
          className="card__image"
          onClick={onCardClick}
          alt={item.name}
        />
      </div>
    </div>
  );
};

export default ItemCard;
