import React, { useState, useEffect, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext/CurrentUserContext";

const EditProfileModal = ({ isOpen, onClose }) => {
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
};

export default EditProfileModal;
