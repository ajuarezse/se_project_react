import "./ItemModal.css";
import closeButton from "../../assets/closeButton.png";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext/CurrentUserContext";

function ItemModal({ activeModal, onClose, card, onDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser?.id;
  const itemDeleteButtonClassName = `item__delete-button ${
    isOwn ? "item__delete-button_visible" : "item__delete-button_hidden"
  }`;
  const handleDelete = () => {
    onDelete(card._id);
  };

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
          <div>
            <p className="modal__caption">{card.name}</p>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <button
            //className="modal__delete"
            className={itemDeleteButtonClassName}
            type="button"
            onClick={handleDelete}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
