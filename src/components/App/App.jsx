import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { getItems, addItem, deleteItem } from "../../utils/api";
import AddItemModal from "../AddItemModal/AddItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { signin, signup } from "../../utils/auth";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({ name: "", link: "" });
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  // set up isLoggedIn state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleRegisterModal = (e) => {
    e.preventDefault();
    setActiveModal("register");
  };

  const navigate = useNavigate();

  const handleRegister = (newUser) => {
    signup(newUser)
      .then(() => {
        handleLogIn(newUser.email, newUser.password);
        // logged in logic may have to move? should be handled only in handleLogIn?
        //setIsLoggedIn(true);
        closeActiveModal();
      })
      .catch((error) => {
        console.error("Registration Error:", error);
      });
  };

  const onLoginClick = () => {
    setActiveModal("login");
  };
  /*
  const handleLogIn = (newUser) => {
    console.log("Login Data:", newUser);
    if (!newUser.email || !newUser.password) {
      return;
    }
    signin(newUser.email, newUser.password)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setIsLoggedIn(true);
        closeActiveModal();
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };
*/

  const handleLogIn = (email, password) => {
    if (!email || !password) return;

    signin(email, password)
      .then((data) => {
        // Only set isLoggedIn to true if signin is successful
        localStorage.setItem("jwt", data.token);
        setIsLoggedIn(true);
        navigate("/profile"); // Redirect to profile
        closeActiveModal();
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  const handleLogInModal = (e) => {
    e.preventDefault();
    setActiveModal("login");
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleAddItemSubmit = (item /*resetForm*/) => {
    addItem(item)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        closeActiveModal();
        //resetForm(); // Reset the form after submission
      })
      .catch(console.error);
  };

  const handleDeleteItem = (id) => {
    deleteItem(id)
      .then(() => {
        setClothingItems((clothingItems) =>
          clothingItems.filter((item) => item._id !== id)
        );
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        //console.log(filteredData.temp.F);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);
  //console.log(CurrentTemperatureUnitContext);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
        //console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page__content">
          <Header
            handleAddClick={handleAddClick}
            weatherData={weatherData}
            handleToggleSwitchChange={handleToggleSwitchChange}
            handleRegisterModal={handleRegisterModal}
            handleLogInModal={handleLogInModal}
            isLoggedIn={isLoggedIn}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  clothingItems={clothingItems}
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    handleAddClick={handleAddClick}
                  />
                </ProtectedRoute>
              }
            />
          </Routes>

          <Footer />
        </div>
        <AddItemModal
          onClose={closeActiveModal}
          isOpen={activeModal === "add-garment"}
          onAddItem={handleAddItemSubmit}
        />
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          onClose={closeActiveModal}
          onDelete={handleDeleteItem}
        />
        <RegisterModal
          onClose={closeActiveModal}
          isOpen={activeModal === "register"}
          onSignUp={handleRegister}
          onLoginClick={onLoginClick}
        />
        <LoginModal
          onClose={closeActiveModal}
          isOpen={activeModal === "login"}
          onLogin={handleLogIn}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
