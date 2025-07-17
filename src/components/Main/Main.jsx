import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useContext, useState, useEffect } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

function Main({
  weatherData,
  handleCardClick,
  clothingItems,
  onCardLike,
  isLoggedIn,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smoother UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is{" "}
          {currentTemperatureUnit === "F"
            ? weatherData.temp.F
            : weatherData.temp.C}{" "}
          &deg; {currentTemperatureUnit} / You may want to wear:
        </p>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <ul className="cards__list">
            {clothingItems.filter((item) => item.weather === weatherData.type)
              .length === 0 ? (
              <div className="cards__empty">
                <p className="cards__empty-text">
                  {isLoggedIn
                    ? "No items added yet. Click + to add your first clothing item!"
                    : "Please log in or sign up to start adding clothing items."}
                </p>
              </div>
            ) : (
              clothingItems
                .filter((item) => item.weather === weatherData.type)
                .map((item) => (
                  <ItemCard
                    key={item._id}
                    item={item}
                    onCardClick={handleCardClick}
                    onCardLike={onCardLike}
                    isLoggedIn={isLoggedIn}
                  />
                ))
            )}
          </ul>
        )}
      </section>
    </main>
  );
}

export default Main;
