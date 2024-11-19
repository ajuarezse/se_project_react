import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect, useRef } from "react";

const RegisterModal = ({ isOpen, onClose, onSignUp, onLoginClick }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassWord, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [avatar, setAvatarUrl] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const avatarRef = useRef();
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

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

  const validateForm = () => {
    const emailValid =
      emailRef.current?.validity.valid && userEmail.trim().length > 0;
    const passwordValid = passwordRef.current?.value.trim().length > 0;
    const nameValid =
      nameRef.current?.validity.valid && userName.trim().length > 0;
    const avatarValid =
      avatarRef.current?.validity.valid && avatar.trim().length > 0;
    setIsButtonEnabled(emailValid && passwordValid && nameValid && avatarValid);
  };

  function resetForm() {
    setUserEmail("");
    setUserName("");
    setUserPassword("");
    setAvatarUrl("");
    if (emailRef.current) emailRef.current.value = "";
    if (passwordRef.current) passwordRef.current.value = "";
    if (nameRef.current) nameRef.current.value = "";
    if (avatarRef.current) avatarRef.current.value = "";
  }

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  useEffect(() => {
    validateForm();
  }, [userEmail, userPassWord, userName, avatar]);

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
          ref={emailRef}
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
          ref={passwordRef}
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
          ref={nameRef}
          type="text"
          name="name"
          className="modal__input"
          placeholder="Name"
          value={userName}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="avatar">
        Avatar URL*
        <input
          ref={avatarRef}
          type="url"
          //id="avatar"
          name="avatar"
          placeholder="Avatar URL"
          className="modal__input"
          value={avatar}
          onChange={handleAvatarChange}
        />
      </label>
      <div className="modal__button-container">
        <button
          type="submit"
          className={`modal__submit ${
            isButtonEnabled ? "modal__submit_enabled" : ""
          }`}
        >
          Sign Up
        </button>
        <button
          type="button"
          className="modal__switch-button"
          onClick={onLoginClick}
        >
          or Log In
        </button>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
