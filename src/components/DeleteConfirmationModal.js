import "../blocks/deleteConfirmationModal.css";
import ModalWithForm from "./ModalWithForm.js";

const deleteConfirmationModal = ({ onClose, handleCardDelete }) => {
  return (
    <div className="delete__modal">
      <div className="delete__modal-content">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        />
        <div className="delete__modal-heading">
          Are you sure you want to delete this item?
        </div>
        This action is irreverisble.
        <div className="delete__modal_button">
          <button
            className="delete__modal_button"
            type="submit"
            onClick={handleCardDelete}
          >
            Yes, delete item
          </button>
          <button
            className="delete__modal_button-cancel"
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default deleteConfirmationModal;
