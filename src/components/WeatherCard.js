const weatherOptions = [
  {
    url: require("../images/day/day-sunny.svg").default,
    day: true,
    type: "sunny",
  },
  { url: require("../images/day/day-fog.svg").default, day: true, type: "fog" },
  {
    url: require("../images/day/day-cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../images/day/day-rain.svg").default,
    day: true,
    type: "rain",
  },
  {
    url: require("../images/day/day-storm.svg").default,
    day: true,
    type: "storm",
  },
  {
    url: require("../images/day/day-snow.svg").default,
    day: true,
    type: "snow",
  },
  {
    url: require("../images/night/night-sunny.svg").default,
    day: false,
    type: "sunny",
  },
  {
    url: require("../images/night/night-fog.svg").default,
    day: false,
    type: "fog",
  },
  {
    url: require("../images/night/night-cloudy.svg").default,
    day: false,
    type: "cloudy",
  },
  {
    url: require("../images/night/night-rain.svg").default,
    day: false,
    type: "rain",
  },
  {
    url: require("../images/night/night-storm.svg").default,
    day: false,
    type: "storm",
  },
  {
    url: require("../images/night/night-snow.svg").default,
    day: false,
    type: "snow",
  },
];

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
      <div className="weather_info">{weatherTemp}°F</div>
      <img src={imageSrcUrl} className="weather_image" />
    </section>
  );
};

export default WeatherCard;
