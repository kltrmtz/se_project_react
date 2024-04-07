import "../blocks/main.css";
import { defaultClothingItems } from "../utils/constants.js";
import WeatherCard from "./WeatherCard.jsx";
import ItemCard from "./ItemCard.jsx";
import { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";

function Main({
  weatherTemp,
  onSelectedCard,
  clothingItems,
  onCardLike,
  isLoggedIn,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;

  const weatherType = (() => {
    if (currentTemperatureUnit === "F") {
      if (temp >= 86) {
        return "hot";
      } else if (temp >= 66 && temp <= 85) {
        return "warm";
      } else if (temp <= 65) {
        return "cold";
      }
    } else {
      if (currentTemperatureUnit === "C") {
        if (temp >= 86) {
          return "hot";
        } else if (temp >= 66 && temp <= 85) {
          return "warm";
        } else if (temp <= 65) {
          return "cold";
        }
      }
    }
  })();

  const filteredCards = clothingItems.filter(
    (item) => {
      return item.weather.toLowerCase() === weatherType;
    },
    [weatherTemp]
  );

  return (
    <main className="main">
      <WeatherCard day={false} type={"sunny"} weatherTemp={temp} />
      <section className="card__section" id="card-section">
        Today is {temp} °{currentTemperatureUnit} / You may want to wear:
        <div className="card__items">
          {filteredCards.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onSelectedCard={onSelectedCard}
              onCardLike={onCardLike}
              isLoggedIn={isLoggedIn}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
