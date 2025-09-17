import React, { useContext } from "react";
// Day images
import sunny from "../../assets/sunny.png";
import cloudy from "../../assets/cloudy.png";
import fog from "../../assets/fog.png";
import rain from "../../assets/rain.png";
import snow from "../../assets/snow.png";
import storm from "../../assets/storm.png";
// Night images
import sunnyDark from "../../assets/sunnyDark.png";
import cloudyDark from "../../assets/cloudyDark.png";
import fogDark from "../../assets/fogDark.png";
import rainDark from "../../assets/rainDark.png";
import snowDark from "../../assets/snowDark.png";
import stormDark from "../../assets/stormDark.png";

import "./WeatherCard.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const dayWeatherImages = {
  clear: sunny,
  clouds: cloudy,
  fog: fog,
  mist: fog,
  rain: rain,
  snow: snow,
  thunderstorm: storm,
  default: sunny,
};

const nightWeatherImages = {
  clear: sunnyDark,
  clouds: cloudyDark,
  fog: fogDark,
  mist: fogDark,
  rain: rainDark,
  snow: snowDark,
  thunderstorm: stormDark,
  default: sunnyDark,
};

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temperature =
    currentTemperatureUnit === "F" ? weatherData.temp.F : weatherData.temp.C;

  const isNighttime = () => {
    const hour = new Date().getHours();
    return hour < 6 || hour >= 18; // Night time between 6 PM and 6 AM
  };

  const getWeatherImage = (condition) => {
    const images = isNighttime() ? nightWeatherImages : dayWeatherImages;
    return images[condition] || images.default;
  };

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {temperature} &deg; {currentTemperatureUnit}
      </p>
      <img
        src={getWeatherImage(weatherData.condition)}
        alt={`${weatherData.condition} ${isNighttime() ? "night" : "day"}`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
