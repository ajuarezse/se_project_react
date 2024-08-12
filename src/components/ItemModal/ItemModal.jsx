import "./ItemModal.css";
import closeButton from "../../assets/closeButton.png";

function ItemModal({ activeModal, onClose, card }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image"></div>
      <button onClick={onClose} type="button" className="modal__close">
        <img
          className="modal__close_button"
          src={closeButton}
          alt="close button"
        />
      </button>
      <img src={card.link} alt={card.name} className="modal__image" />
      <div className="modal__footer">
        <h2 className="modal__caption">{card.name}</h2>
        <p className="modal__weather">Weather: {card.weather}</p>
      </div>
    </div>
  );
}

export default ItemModal;
