import "../blocks/weather.css";
import { weatherOptions } from "../utils/constants.js";

const WeatherCard = ({ day = true, type = "sunny", weatherTemp = "" }) => {
  console.log("weather card");
  const imageSrc = weatherOptions.filter((i) => {
    console.log(i);
    return i.day === day && i.type === type;
  });
  console.log(imageSrc);
  console.log(imageSrc[0].url);

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather__info">{weatherTemp}°F</div>
      <img src={imageSrcUrl} className="weather__image" alt="weather image" />
    </section>
  );
};

export default WeatherCard;
