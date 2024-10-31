import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

const RegisterModal = ({ isOpen, onClose }) => {
  const [userEmail, setUserEmail] = useState("");

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <label htmlFor="email">
        Email*
        <input
          type="email"
          name="email"
          className="modal__input"
          placeholder="Email"
          value={userEmail}
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
