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
        <form>
          <h3 className="modal__heading">{title}</h3>
          <button
            className="modal__close-button"
            type="button"
            onClick={onClose}
          ></button>
          {children}
          <button
            className="modal__button modal__button_disabled"
            type="submit"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
