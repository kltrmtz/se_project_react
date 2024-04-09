import "../blocks/modalwithform.css";

const ModalWithForm = ({
  children,
  buttonText,
  title,
  name,
  onClose,
  onSubmit,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <form onSubmit={onSubmit}>
          <h3 className="modal__heading">{title}</h3>
          <button
            className="modal__close-button"
            type="button"
            onClick={onClose}
          />
          {children}
          {/* <button
            className="modal__button modal__button_disabled"
            type="submit"
          >
            {buttonText}
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
