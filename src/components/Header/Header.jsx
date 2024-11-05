import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

function Header({
  handleRegisterModal,
  isLoggedIn,
  username,
  handleAddClick,
  weatherData,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <div className="header__logo-date">
        <div>
          <Link to="/">
            <img className="header__logo" src={logo} alt="logo" />
          </Link>
        </div>
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />

        {isLoggedIn ? (
          <>
            <button
              onClick={handleAddClick}
              type="button"
              className="header__add-clothes-btn"
            >
              + Add Clothes
            </button>
            <Link to="/profile" className="header__link">
              <div className="header__user-container">
                <p className="header__username">{username}</p>
                <img src={avatar} alt="avatar" className="header__avatar" />
              </div>
            </Link>
          </>
        ) : (
          <div className="header__auth-buttons">
            <Link
              to="/signup"
              className="header__auth-link"
              onClick={handleRegisterModal}
            >
              Sign Up
            </Link>
            <Link to="/login" className="header__auth-link">
              Log In
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
