// import logo from "./logo.svg";
import "../blocks/App.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import ModalWithForm from "./ModalWithForm.js";
import { useEffect, useState } from "react";
import ItemModal from "./ItemModal.js";
import { getForecastWeather, parseWeatherData } from "../utils/weatherApi.js";

function App() {
  const weatherTemp = "";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(temp);

  return (
    <div>
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} temp={temp} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garment" onClose={handleCloseModal}>
          <div className="modal__form">
            <label>
              Name
              <input
                className="modal__form-input"
                type="text"
                name="name"
                id="modal-name-input"
                placeholder="Name"
                minLength="1"
                maxLength="30"
              />
            </label>
            <label>
              Image
              <input
                className="modal__form-input"
                type="url"
                name="link"
                id="modal-url-input"
                placeholder="Image URL"
                minLength="1"
                maxLength="30"
              />
            </label>
          </div>
          <p>Select the weather type:</p>
          <div className="modal__radio">
            <div>
              <label className="modal__input">
                <input
                  className="modal__input-radio"
                  type="radio"
                  id="hot"
                  value="hot"
                  name="weather"
                />
                Hot
              </label>
            </div>
            <div>
              <label className="modal__input">
                <input
                  className="modal__input-radio"
                  type="radio"
                  id="warm"
                  value="warm"
                  name="weather"
                />
                Warm
              </label>
            </div>
            <div>
              <label className="modal__input">
                <input
                  className="modal__input-radio"
                  type="radio"
                  id="cold"
                  value="cold"
                  name="weather"
                />
                Cold
              </label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
