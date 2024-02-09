import "../blocks/modalwithform.css";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
}) => {
  console.log("ModalWithForm");
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <h3>{title}</h3>
        <form>
          <button
            className="modal__close-button"
            type="button"
            onClick={onClose}
          >
            Close
          </button>
          {children}

          <button className="modal__submit-button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
