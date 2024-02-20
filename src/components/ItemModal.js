import "../blocks/modalwithform.css";

const ItemModal = ({ selectedCard, onClose, onCreateModal }) => {
  // console.log("item modal");

  return (
    <div className={`modal`}>
      <div className="modal__preview">
        <button
          className="modal__preview-close-button"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="modal__preview-image"
          src={selectedCard.link}
          alt="prieview image"
        ></img>
        <div className="modal__preview-text">
          <div>{selectedCard.name}</div>
          <div>Weather: {selectedCard.weather}</div>
        </div>
        <button
          className="modal__preview-delete"
          type="button"
          onClick={onCreateModal}
        >
          Delete item
        </button>
      </div>
    </div>
  );
};

export default ItemModal;
