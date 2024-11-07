import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const user = {
    email: userEmail,
    password: userPassword,
  };

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    //onLogin(user);
    onLogin(userEmail, userPassword);
  };

  function resetForm() {
    setUserEmail("");
    setUserPassword("");
  }

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          id="email"
          className="modal__input"
          placeholder="Email"
          value={userEmail}
          onChange={handleEmailChange}
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          name="password"
          id="password"
          className="modal__input"
          placeholder="Password"
          value={userPassword}
          onChange={handlePasswordChange}
        />
      </label>
      <div className="modal__button-container">
        <button type="submit" className="modal__submit">
          Log In
        </button>
        <button
          type="button"
          className="modal__switch-button"
          //onClick={onLoginClick}
        >
          or Sign up
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
