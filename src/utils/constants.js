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

export const weatherOptions = [
  {
    url: require("../images/day/day-sunny.svg").default,
    day: true,
    type: "sunny",
    alt: "day-sunny",
  },
  {
    url: require("../images/day/day-fog.svg").default,
    day: true,
    type: "fog",
    alt: "day-fog",
  },
  {
    url: require("../images/day/day-cloudy.svg").default,
    day: true,
    type: "cloudy",
    alt: "day-cloudy",
  },
  {
    url: require("../images/day/day-rain.svg").default,
    day: true,
    type: "rain",
    alt: "day-rain",
  },
  {
    url: require("../images/day/day-storm.svg").default,
    day: true,
    type: "storm",
    alt: "day-storm",
  },
  {
    url: require("../images/day/day-snow.svg").default,
    day: true,
    type: "snow",
    alt: "day-snow",
  },
  {
    url: require("../images/night/night-sunny.svg").default,
    day: false,
    type: "sunny",
    alt: "night-sunny",
  },
  {
    url: require("../images/night/night-fog.svg").default,
    day: false,
    type: "fog",
    alt: "night-fog",
  },
  {
    url: require("../images/night/night-cloudy.svg").default,
    day: false,
    type: "cloudy",
    alt: "night-cloudy",
  },
  {
    url: require("../images/night/night-rain.svg").default,
    day: false,
    type: "rain",
    alt: "night-rain",
  },
  {
    url: require("../images/night/night-storm.svg").default,
    day: false,
    type: "storm",
    alt: "night-storm",
  },
  {
    url: require("../images/night/night-snow.svg").default,
    day: false,
    type: "snow",
    alt: "night-snow",
  },
];
