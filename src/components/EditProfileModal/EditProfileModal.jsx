import React, { useState, useEffect, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext/CurrentUserContext";

const EditProfileModal = ({ isOpen, onClose, onSubmit }) => {
  const currentUser = useContext(CurrentUserContext);
  const [userName, setUserName] = useState(currentUser?.name || "");
  const [userAvatar, setUserAvatar] = useState(currentUser?.avatar || "");

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUserAvatar(e.target.value);
  };

  const newUserData = {
    name: userName,
    avatar: userAvatar,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newUserData);
  };

  return (
    <ModalWithForm
      title="Change profile Data"
      buttonText="Save changes"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label modal__label_text">
        Name *
        <input
          type="text"
          name="name"
          className="modal__input"
          //id="name"
          placeholder={currentUser?.name}
          value={userName}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="imageURL" className="modal__label">
        Avatar URL*
        <input
          type="url"
          className="modal__input modal__label_text"
          name="link"
          placeholder={currentUser?.avatar}
          value={userAvatar}
          onChange={handleUrlChange}
        />
      </label>
      <div className="modal__button-container">
        <button type="submit" className="modal__submit">
          Save changes
        </button>
      </div>
    </ModalWithForm>
  );
};

export default EditProfileModal;
