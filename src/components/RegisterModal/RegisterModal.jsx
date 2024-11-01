import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

const RegisterModal = ({ isOpen, onClose, onSignUp }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassWord, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [avatar, setAvatarUrl] = useState("");

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setUserEmail(e.target.value);
  };

  const newUser = {
    email: userEmail,
    password: userPassWord,
    name: userName,
    avatar: avatar,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp(newUser);
  };

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email">
        Email*
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
        Password*
        <input type="password" />
      </label>
      <label htmlFor="name">Name*</label>
      <label htmlFor="avatar">Avatar URL*</label>
    </ModalWithForm>
  );
};

export default RegisterModal;
