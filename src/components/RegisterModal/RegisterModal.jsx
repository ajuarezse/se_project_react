import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

const RegisterModal = ({ isOpen, onClose, onSignUp }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassWord, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [avatar, setAvatarUrl] = useState("");

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatarUrl(e.target.value);
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

  function resetForm() {
    setUserEmail("");
    setUserName("");
    setUserPassword("");
    setAvatarUrl("");
  }

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

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
          //id="email"
          className="modal__input"
          placeholder="Email"
          value={userEmail}
          onChange={handleEmailChange}
        />
      </label>
      <label htmlFor="password">
        Password*
        <input
          type="password"
          name="password"
          //id="password"
          className="modal__input"
          placeholder="Password"
          value={userPassWord}
          onChange={handlePasswordChange}
        />
      </label>
      <label htmlFor="name">
        Name*
        <input
          type="text"
          name="name"
          //id="name"
          className="modal__input"
          placeholder="Name"
          value={userName}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="avatar">
        Avatar URL*
        <input
          type="url"
          //id="avatar"
          name="avatar"
          placeholder="Avatar URL"
          className="modal__input"
          value={avatar}
          onChange={handleAvatarChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
