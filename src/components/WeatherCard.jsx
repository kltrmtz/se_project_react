import "../blocks/weather.css";
import { weatherOptions } from "../utils/constants.js";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";

const WeatherCard = ({ day = true, type = "", weatherTemp = "" }) => {
  const weatherOption = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const weatherOptionUrl = weatherOption.url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather__info">
        {weatherTemp} °{currentTemperatureUnit}
      </div>
      <img
        url={weatherOptionUrl}
        className="weather__image"
        alt="weather bar"
      />
    </section>
  );
};

export default WeatherCard;
