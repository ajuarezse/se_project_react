import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, onClose, onAddItem }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setImageUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    console.log(e.target.value);
    setWeather(e.target.value);
  };

  function resetForm() {
    setName("");
    setImageUrl("");
    setWeather("");
  }

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl: imageUrl, weather });
  };
  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      //isOpen={activeModal === "add-garment"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="add-item-name" className="modal__label modal__label_text">
        Name{""}
        <input
          type="text"
          name="name"
          className="modal__input"
          id="add-item-name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label
        htmlFor="add-item-imageURL"
        className="modal__label modal__label_text"
      >
        Image{""}
        <input
          type="text"
          className="modal__input"
          id="add-item-imageURL"
          placeholder="Image URL"
          onChange={handleUrlChange}
          value={imageUrl}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label
          htmlFor="add-item-hot"
          className="modal__label modal__label_type_radio"
        >
          <input
            id="add-item-hot"
            type="radio"
            name="weatherType"
            className="modal__radio-input"
            onChange={handleWeatherChange}
            value="hot"
          />
          Hot
        </label>
        <label
          htmlFor="add-item-warm"
          className="modal__label modal__label_type_radio"
        >
          <input
            id="add-item-warm"
            type="radio"
            name="weatherType"
            className="modal__radio-input"
            onChange={handleWeatherChange}
            value="warm"
          />
          Warm
        </label>
        <label
          htmlFor="add-item-cold"
          className="modal__label modal__label_type_radio"
        >
          <input
            id="add-item-cold"
            type="radio"
            name="weatherType"
            className="modal__radio-input"
            onChange={handleWeatherChange}
            value="cold"
          />
          Cold
        </label>
      </fieldset>
      <div className="modal__button-container">
        <button type="submit" className="modal__submit">
          Add garment
        </button>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
