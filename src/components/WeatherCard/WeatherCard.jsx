import React, { useContext } from "react";
import sunny from "../../assets/sunny.png";
import cloudy from "../../assets/cloudy.png";
import fog from "../../assets/fog.png";
import rain from "../../assets/rain.png";
import snow from "../../assets/snow.png";
import storm from "../../assets/storm.png";
import "./WeatherCard.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const weatherImages = {
  clear: sunny,
  clouds: cloudy,
  fog: fog,
  mist: fog,
  rain: rain,
  snow: snow,
  thunderstorm: storm,
  default: sunny,
};

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temperature =
    currentTemperatureUnit === "F" ? weatherData.temp.F : weatherData.temp.C;

  const getWeatherImage = (condition) => {
    return weatherImages[condition] || weatherImages.default;
  };

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {temperature} &deg; {currentTemperatureUnit}
      </p>
      <img
        src={getWeatherImage(weatherData.condition)}
        alt={weatherData.condition}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
