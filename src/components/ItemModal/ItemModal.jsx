import "./ItemModal.css";
import closeButton from "../../assets/closeButton.png";

function ItemModal({ activeModal, onClose, card }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button onClick={onClose} type="button" className="modal__close_button">
          <img
            className="modal__close_image"
            src={closeButton}
            alt="close button"
          />
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <p className="modal__caption">{card.name}</p>
          <p className="modal__weather">Weather: {card.weather}</p>
          <p className="modal__delete">Delete Item</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
