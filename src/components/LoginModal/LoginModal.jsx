import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

const LoginModal = ({ isOpen, onClose, onLogin }) => {

const [userEmail, setUserEmail] = useState("");
const [userPassword, setUserPassword] = useState("");

  const user = {
    email: userEmail,
    password: userPassword,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(user);
  };

  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email">Email<input 
      type="email"
      name="email"
      id="email"
      className="modal__input"
      placeholder="Email"
      value={userEmail}
      onChange={}
      /></label>
    </ModalWithForm>
  );
};

export default LoginModal;
