import "../blocks/main.css";
import { defaultClothingItems } from "../utils/constants.js";
import WeatherCard from "./WeatherCard.js";
import ItemCard from "./ItemCard.js";
import { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";

function Main({ weatherTemp, onSelectedCard }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  console.log(currentTemperatureUnit);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;

  const weatherType = (() => {
    //   if (temp >= 86) {
    //     return "hot";
    //   } else if (temp >= 66 && temp <= 85) {
    //     return "warm";
    //   } else if (temp <= 65) {
    //     return "cold";
    //   }
    // }, [weatherTemp]);

    // console.log(weatherType);
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

  const filteredCards = defaultClothingItems.filter((clothingItem) => {
    return clothingItem.weather.toLowerCase() === weatherType;
  });
  // const filteredCards = clothingItems.filter((clothingItem) => {
  //   console.log(clothingItems);
  //   return clothingItem.weather.toLowerCase() === weatherType;
  // });

  // console.log(filteredCards);

  return (
    <main className="main">
      <WeatherCard day={false} type="sunny" weatherTemp={temp} />
      <section className="card__section" id="card-section">
        Today is {temp}°{currentTemperatureUnit} / You may want to wear:
        <div className="card__items">
          {filteredCards.map((clothingItem) => (
            <ItemCard
              key={clothingItem._id}
              clothingItem={clothingItem}
              onSelectedCard={onSelectedCard}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
