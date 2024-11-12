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
import CurrentUserContext from "../../contexts/CurrentUserContext/CurrentUserContext";
import {
  getItems,
  addItem,
  deleteItem,
  editUserProfile,
  addCardLike,
  removeCardLike,
} from "../../utils/api";
import AddItemModal from "../AddItemModal/AddItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { signin, signup, checkToken } from "../../utils/auth";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleRegisterModal = (e) => {
    e.preventDefault();
    setActiveModal("register");
  };

  const openEditProfileModal = (e) => {
    e.preventDefault();
    setActiveModal("edit-profile");
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
    const token = localStorage.getItem("jwt");
    if (token) {
      addItem(item, token)
        .then((newItem) => {
          setClothingItems([newItem, ...clothingItems]);
          closeActiveModal();
          //resetForm(); // Reset the form after submission
        })
        .catch(console.error);
    }
  };

  const handleDeleteItem = (id) => {
    const token = localStorage.getItem("jwt");
    if (token) {
      deleteItem(id, token)
        .then(() => {
          setClothingItems((clothingItems) =>
            clothingItems.filter((item) => item._id !== id)
          );
          closeActiveModal();
        })
        .catch(console.error);
    }
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const handleEditProfileModal = (newUserData) => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      console.error("User is not authenticated");
      return;
    }
    editUserProfile(newUserData, token)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        closeActiveModal();
      })
      .catch((error) => {
        console.error("Failed to update profile", error);
      });
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      console.error("User is not authenticated.");
      return;
    }
    const apiAction = isLiked ? removeCardLike : addCardLike;

    apiAction(id, token)
      .then((updatedCard) => {
        setClothingItems((items) =>
          items.map((item) => (item._id === id ? updatedCard : item))
        );
      })
      .catch((error) => console.log("Error updating like status:", error));
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

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((userData) => {
          setIsLoggedIn(true);
          setCurrentUser(userData);
          navigate("/profile");
        })
        .catch((err) => {
          console.error("token validation failed:", err);
          localStorage.removeItem("jwt");
          setIsLoggedIn(false);
        });
    }
  }, [navigate]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
                      openEditProfileModal={openEditProfileModal}
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
          <EditProfileModal
            isOpen={activeModal === "edit-profile"}
            onClose={closeActiveModal}
            onSubmit={handleEditProfileModal}
          />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
