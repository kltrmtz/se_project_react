import "../blocks/App.css";
import { useEffect, useState } from "react";
import { getForecastWeather, parseWeatherData } from "../utils/weatherApi.js";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.js";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Profile from "./Profile.jsx";
import Footer from "./Footer.jsx";
import ItemModal from "./ItemModal.jsx";
import AddItemModal from "./AddItemModal.jsx";
import DeleteConfirmationModal from "./DeleteConfirmationModal.jsx";
import RegisterModal from "./RegisterModal.jsx";
import LoginModal from "./LoginModal.jsx";
import api from "../utils/api.js";
import auth from "../utils/auth.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    avatar: "",
    _id: "",
  });

  // new base

  //   const [userData, setUserData] = useState({ username: "", email: "" });
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);

  //   const navigate = useNavigate();

  //   const handleLogin = ({ username, password }) => {
  //     if (!username || !password) {
  //       return;
  //     }

  //     auth
  //       .authorize(username, password)
  //       .then((data) => {
  //         // Verify that a jwt is included before logging the user in.
  //         if (data.jwt) {
  //           setUserData(data.user);  // save user's data to state
  //           setIsLoggedIn(true);    // log the user in
  //           navigate("/ducks");    // send them to /ducks
  //         }
  //       })
  //       .catch(console.error);
  //   };

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleDeleteModal = () => {
    setActiveModal("delete");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const onAddItem = (values) => {
    api
      .addItems(values)
      .then((item) => {
        setClothingItems([item, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCardDelete = () => {
    api
      .deleteItems(selectedCard._id)
      .then(() => {
        setClothingItems((cards) =>
          cards.filter((card) => card._id !== selectedCard._id)
        );
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  // new register & login

  const handleRegisterSubmit = ({ email, password, name, avatarUrl }) => {
    auth.register({ email, password, name, avatarUrl }).then((data) => {
      console.log(data);
      // login();
    });
  };

  //   // in App.jsx

  // function App() {
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);

  //   // New
  //   const handleRegistration = ({
  //     username,
  //     email,
  //     password,
  //     confirmPassword,
  //   }) => {
  //     if (password === confirmPassword) {
  //       auth.register(username, password, email)
  //        .then(() => {
  //           // TODO: handle succesful registration
  //         })
  //         .catch(console.error);
  //     }
  //   };

  const handleLogin = ({ name, email, avatar, _id }) => {
    setIsLoggedIn(true);
    setCurrentUser({ name, email, avatar, _id });
  };

  const handleLoginSubmit = ({ email, password }) => {
    auth.login(email, password).then((data) => {
      // login();
      handleLogin(data);
      localStorage.setItem("jwt", res.token);
    });
  };

  //   // in App.jsx

  // // handleLogin accepts one parameter: an object with two properties.
  // const handleLogin = ({ username, password }) => {
  //   // If username or password empty, return without sending a request.
  //   if (!username || !password) {
  //     return;
  //   }

  //  // We pass the username and password as positional arguments. The
  //  // authorize function is set up to rename `username` to `identifier`
  //  // before sending a request to the server, because that is what the
  //  // API is expecting.
  //  auth
  //    .authorize(username, password)
  //      .then((data) => {
  //        // For now we just log the response data to the console.
  //        // We'll update this soon.
  //        console.log(data);
  //      })
  //      .catch(console.error);
  // };

  useEffect(() => {
    api
      .getItems()
      .then((items) => {
        setClothingItems(items);
      })
      .catch((err) => console.log(err));
  }, []);

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
  console.log(currentTemperatureUnit);

  useEffect(() => {
    // const token = localStorage.getItem("jwt", res.token);
    const token = localStorage.getItem("jwt");
    if (token) {
      getCurrentUser(token)
        .then((data) => {
          handleLogin(data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  // inside of App.jsx

  // useEffect(() => {
  //   const jwt = getToken();

  //   if (!jwt) {
  //     return;
  //   }

  //   // Call the function, passing it the JWT.
  //   api
  //     .getUserInfo(jwt)
  //     .then(({ username, email }) => {
  //       // If the response is successful, log the user in, save their
  //       // data to state, and navigate them to /ducks.
  //       setIsLoggedIn(true);
  //       setUserData({ username, email });
  //       navigate("/ducks");
  //     })
  //     .catch(console.error);
  // }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onCreateModal={handleCreateModal}
            temp={temp}
            isLoggedIn={isLoggedIn}
          />
          <Switch>
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                onSelectedCard={handleSelectedCard}
                handleCardDelete={handleCardDelete}
                clothingItems={clothingItems}
                cards={clothingItems}
              />
            </Route>
            <Route path="/profile">
              <Profile
                onSelectedCard={handleSelectedCard}
                clothingItems={clothingItems}
                onCreateModal={handleCreateModal}
              />
            </Route>
          </Switch>

          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              onAddItem={onAddItem}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              onCreateModal={handleDeleteModal}
              selectedCard={selectedCard}
              onClose={handleCloseModal}
            />
          )}
          {activeModal === "delete" && (
            <DeleteConfirmationModal
              onCreateModal={handleDeleteModal}
              onClose={handleCloseModal}
              isOpen={activeModal === "delete"}
              handleCardDelete={handleCardDelete}
            />
          )}
          {activeModal === "register" && (
            <RegisterModal
              onCreateModal={handleRegisterModal}
              onClose={handleCloseModal}
              isOpen={activeModal === "register"}
              onSignUp={handleRegisterSubmit}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              onCreateModal={handleLoginModal}
              onClose={handleCloseModal}
              isOpen={activeModal === "login"}
              onLogin={handleLoginSubmit}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
