import "../blocks/card.css";
import React, { useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectedCard, isLoggedIn, onCardLike }) => {
  // Check if the item was liked by the current user
  // The likes array should be an array of ids
  const isLiked = item.likes.some((id) => id === currentUser._id);

  // Create a variable which you then set in `className` for the like button
  // const itemLikeButtonClassName = `...`;

  const itemLikeButtonClassName = () => {
    if (isLiked) {
      return "card__like-button_active";
    } else {
      return "";
    }
  };

  const onCardClick = () => {
    onSelectedCard(item);
  };

  // const handleLike = () => {
  //   onCardLike();
  // };

  const handleLike = () => {
    onCardLike({ item, isLiked }).then(() => {
      setIsLiked((prev) => !prev);
    });
  };

  // useEffect(() => {
  //   if (item.likes.includes(_id)) {
  //     setIsLiked(true);
  //   }
  // }, [isLoggedIn]);

  return (
    <div className="card">
      <div className="card__content">
        <div className="card__name">{item.name}</div>
        {isLoggedIn && (
          <button
            className={`card__like-button ${itemLikeButtonClassName()}`}
            onClick={handleLike}
          ></button>
        )}
      </div>
      <img
        src={item.imageUrl}
        className="card__image"
        onClick={onCardClick}
        alt={item.name}
      />
      {/* </div> */}
    </div>
  );
};

export default ItemCard;
