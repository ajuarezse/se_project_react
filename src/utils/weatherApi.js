import { checkResponse } from "./api";

export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(checkResponse);
};

export const filterWeatherData = (data) => {
  const result = {
    city: data.name,
    temp: {
      F: Math.round(data.main.temp),
      C: Math.round(((data.main.temp - 32) * 5) / 9),
    },
    type: getWeatherType(data.main.temp),
  };

  return result;
};

function getWeatherType(temperature) {
  if (temperature >= 80) {
    return "hot";
  } else if (temperature >= 64) {
    return "warm";
  } else {
    return "cold";
  }
}
