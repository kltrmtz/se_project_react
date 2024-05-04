import daySunny from "../images/day/day-sunny.svg";
import dayFog from "../images/day/day-fog.svg";
import dayCloudy from "../images/day/day-cloudy.svg";
import dayRain from "../images/day/day-rain.svg";
import dayStorm from "../images/day/day-storm.svg";
import daySnow from "../images/day/day-snow.svg";
import nightSunny from "../images/night/night-sunny.svg";
import nightFog from "./images/night/night-fog.svg";
import nightCloudy from "../images/night/night-cloudy.svg";
import nightRain from "../images/night/night-rain.svg";
import nightStorm from "../images/night/night-storm.svg";
import nightSnow from "../images/night/night-snow.svg";

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
    alt: "Cap",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
    alt: "Hoodie",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
    alt: "Jacket",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
    alt: "Sneakers",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
    alt: "T-Shirt",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
    alt: "Winter coat",
  },
];

// export const baseUrl =
//   process.env.NODE_ENV === "production"
//     ? "https://api.wtwr.pakasak.com"
//     : "http://localhost:3001";

// import daySunny from "./images/day/day-sunny.svg";
// import dayFog from "./images/day/day-fog.svg";
// import dayCloudy from "./images/day/day-cloudy.svg";
// import dayRain from "./images/day/day-rain.svg";
// import dayStorm from "./images/day/day-storm.svg";
// import daySnow from "./images/day/day-snow.svg";
// import nightSunny from "./images/night/night-sunny.svg";
// import nightFog from "./images/night/night-fog.svg";
// import nightCloudy from "./images/night/night-cloudy.svg";
// import nightRain from "../images/night/night-rain.svg";
// import nightStorm from "../images/night/night-storm.svg";
// import nightSnow from "../images/night/night-snow.svg";

export const weatherOptions = [
  {
    url: daySunny,
    day: true,
    type: "sunny",
    alt: "day-sunny",
  },
  {
    url: dayFog,
    day: true,
    type: "fog",
    alt: "day-fog",
  },
  {
    url: dayCloudy,
    day: true,
    type: "cloudy",
    alt: "day-cloudy",
  },
  {
    url: dayRain,
    day: true,
    type: "rain",
    alt: "day-rain",
  },
  {
    url: dayStorm,
    day: true,
    type: "storm",
    alt: "day-storm",
  },
  {
    url: daySnow,
    day: true,
    type: "snow",
    alt: "day-snow",
  },
  {
    url: nightSunny,
    day: false,
    type: "sunny",
    alt: "night-sunny",
  },
  {
    url: nightFog,
    day: false,
    type: "fog",
    alt: "night-fog",
  },
  {
    url: nightCloudy,
    day: false,
    type: "cloudy",
    alt: "night-cloudy",
  },
  {
    url: nightRain,
    day: false,
    type: "rain",
    alt: "night-rain",
  },
  {
    url: nightStorm,
    day: false,
    type: "storm",
    alt: "night-storm",
  },
  {
    url: nightSnow,
    day: false,
    type: "snow",
    alt: "night-snow",
  },
];

// export const weatherOptions = [
//   {
//     url: "/src/images/day/day-sunny.svg",
//     day: true,
//     type: "sunny",
//     alt: "day-sunny",
//   },
//   {
//     url: "/src/images/day/day-fog.svg",
//     day: true,
//     type: "fog",
//     alt: "day-fog",
//   },
//   {
//     url: "/src/images/day/day-cloudy.svg",
//     day: true,
//     type: "cloudy",
//     alt: "day-cloudy",
//   },
//   {
//     url: "/src/images/day/day-rain.svg",
//     day: true,
//     type: "rain",
//     alt: "day-rain",
//   },
//   {
//     url: "/src/images/day/day-storm.svg",
//     day: true,
//     type: "storm",
//     alt: "day-storm",
//   },
//   {
//     url: "/src/images/day/day-snow.svg",
//     day: true,
//     type: "snow",
//     alt: "day-snow",
//   },
//   {
//     url: "/src/images/night/night-sunny.svg",
//     day: false,
//     type: "sunny",
//     alt: "night-sunny",
//   },
//   {
//     url: "/src/images/night/night-fog.svg",
//     day: false,
//     type: "fog",
//     alt: "night-fog",
//   },
//   {
//     url: "/src/images/night/night-cloudy.svg",
//     day: false,
//     type: "cloudy",
//     alt: "night-cloudy",
//   },
//   {
//     url: "/src/images/night/night-rain.svg",
//     day: false,
//     type: "rain",
//     alt: "night-rain",
//   },
//   {
//     url: "/src/images/night/night-storm.svg",
//     day: false,
//     type: "storm",
//     alt: "night-storm",
//   },
//   {
//     url: "/src/images/night/night-snow.svg",
//     day: false,
//     type: "snow",
//     alt: "night-snow",
//   },
// ];
