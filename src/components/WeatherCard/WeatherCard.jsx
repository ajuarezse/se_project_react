import React, { useContext } from "react";
import sunny from "../../assets/sunny.png";
import "./WeatherCard.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temperature =
    currentTemperatureUnit === "F" ? weatherData.temp.F : weatherData.temp.C;

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {temperature} &deg; {currentTemperatureUnit}
      </p>
      <img src={sunny} alt="sunny" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
