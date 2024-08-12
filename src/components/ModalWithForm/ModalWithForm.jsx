import "./ModalWithForm.css";
import closeButton from "../../assets/closeButton.png";

function ModalWithForm({ children, buttonText, title, activeModal }) {
  return (
    <div className={`modal ${activeModal === "add-garment" && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button type="button" className="modal__close">
          <img
            className="modal__close_button"
            src={closeButton}
            alt="close button"
          />
        </button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
