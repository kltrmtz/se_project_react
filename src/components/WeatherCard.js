const weatherOptions = [
  { url: "./images/day/day-sunny.svg", day: true, type: "sunny" },
  { url: "./images/day/day-fog.svg", day: true, type: "fog" },
  { url: "./images/day/day-cloudy.svg", day: true, type: "cloudy" },
  { url: "./images/day/day-rain.svg", day: true, type: "rain" },
  { url: "./images/day/day-storm.svg", day: true, type: "storm" },
  { url: "./images/day/day-snow.svg", day: true, type: "snow" },
  { url: "./images/night/night-sunny.svg", day: false, type: "sunny" },
  { url: "./images/night/night-fog.svg", day: false, type: "fog" },
  { url: "./images/night/night-cloudy.svg", day: false, type: "cloudy" },
  { url: "./images/night/night-rain.svg", day: false, type: "rain" },
  { url: "./images/night/night-storm.svg", day: false, type: "storm" },
  { url: "./images/night/night-snow.svg", day: false, type: "snow" },
];

const WeatherCard = ({ day, type }) => {
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
      <div className="weather_info">65°F</div>
      <img src={imageSrcUrl} className="weather_image" />
    </section>
  );
};

export default WeatherCard;
