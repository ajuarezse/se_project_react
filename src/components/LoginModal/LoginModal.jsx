import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect, useRef } from "react";
import RegisterModal from "../RegisterModal/RegisterModal";

const LoginModal = ({ isOpen, onClose, onLogin, handleRegisterModal }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const passwordRef = useRef();

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setUserPassword(password);

    if (password.length >= 4) {
      setIsPasswordValid(true);
      setPasswordErrorMessage("");
    } else {
      setIsPasswordValid(false);
      setPasswordErrorMessage("Incorrect Password");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(userEmail, userPassword);
  };

  const validateForm = () => {
    const passwordValid = userPassword.trim().length >= 4;
    setIsButtonEnabled(passwordValid);
  };

  useEffect(() => {
    validateForm();
  }, [userPassword]);

  const resetForm = () => {
    setUserEmail("");
    setUserPassword("");
    setIsPasswordValid(true);
    setPasswordErrorMessage("");
    setIsButtonEnabled(false);
  };

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
      <label htmlFor="login-email">
        Email
        <input
          type="email"
          name="email"
          id="login-email"
          required
          className="modal__input"
          placeholder="Email"
          value={userEmail}
          onChange={handleEmailChange}
        />
      </label>
      <label
        htmlFor="login-password"
        className={`modal__label ${
          !isPasswordValid ? "modal__label_error" : ""
        }`}
      >
        {isPasswordValid ? "Password" : passwordErrorMessage}
        <input
          ref={passwordRef}
          type="password"
          name="password"
          id="login-password"
          className={`modal__input ${
            !isPasswordValid ? "modal__input_error" : ""
          }`}
          placeholder="Password"
          value={userPassword}
          onChange={handlePasswordChange}
        />
      </label>
      <div className="modal__button-container">
        <button
          type="submit"
          className={`modal__submit ${
            isButtonEnabled ? "modal__submit_enabled" : ""
          }`}
          disabled={!isButtonEnabled}
        >
          Log In
        </button>
        <button
          type="button"
          className="modal__switch-button"
          onClick={handleRegisterModal}
        >
          or Sign up
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
