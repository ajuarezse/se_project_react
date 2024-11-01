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
    setUserPassword(e.target.vaule);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(user);
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
    </ModalWithForm>
  );
};

export default LoginModal;
