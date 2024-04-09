import "../blocks/card.css";
import React, { useContext, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectedCard, isLoggedIn, onCardLike }) => {
  const currentUser = useContext(CurrentUserContext);
  const id = item._id;
  const [isLiked, setIsLiked] = useState(
    item.likes.some((id) => id === currentUser?._id)
  );

  const itemLikeButtonClassName = isLoggedIn
    ? `${isLiked ? "card__like-button_active" : "card__like-button"}`
    : `${isLiked ? "card__like-button_active" : "card__like-button"}`;

  const handeLike = () => {
    onCardLike(id, isLiked, setIsLiked);
  };

  const onCardClick = () => {
    onSelectedCard(item);
  };

  return (
    <div className="card">
      <div className="card__content">
        <div className="card__name">{item.name}</div>
        <button
          className={itemLikeButtonClassName}
          onClick={handeLike}
        ></button>
      </div>
      <img
        src={item.imageUrl}
        className="card__image"
        onClick={onCardClick}
        alt={item.name}
      />
    </div>
  );
};

export default ItemCard;
