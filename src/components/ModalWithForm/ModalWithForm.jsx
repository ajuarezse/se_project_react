import "./ModalWithForm.css";
import closeButton from "../../assets/closeButton.png";

function ModalWithForm({
  children,
  buttonText = "Add garment",
  title,
  isOpen,
  onClose,
  onSubmit,
}) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img
            className="modal__close_button"
            src={closeButton}
            alt="close button"
          />
        </button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          {/*<button type="submit" className="modal__submit">
            {buttonText}
          </button> */}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

{
  /*<div className={`modal ${activeModal === "add-garment" && "modal_opened"}`}>*/
}
