import "../blocks/App.css";
import { useEffect, useState } from "react";
import { getForecastWeather, parseWeatherData } from "../utils/weatherApi.js";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.js";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Profile from "./Profile.jsx";
import EditProfileModal from "./EditProfileModal.jsx";
import Footer from "./Footer.jsx";
import ItemModal from "./ItemModal.jsx";
import AddItemModal from "./AddItemModal.jsx";
import DeleteConfirmationModal from "./DeleteConfirmationModal.jsx";
import RegisterModal from "./RegisterModal.jsx";
import LoginModal from "./LoginModal.jsx";
import api from "../utils/api.js";
import auth from "../utils/auth.js";
import ProtectedRoute from "./ProtectedRoute.jsx";
import { setToken, getToken } from "../utils/token.js";

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

  const handleEditProfileModal = () => {
    setActiveModal("edit__profile");
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
    auth
      .register(email, password, name, avatarUrl)
      .then((data) => {
        setIsLoggedIn(true);
        console.log(data);
        // login();
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Login attempt

  // const handleLogin = ({ name, email, avatar, _id }) => {
  //   setIsLoggedIn(true);
  //   setCurrentUser({ name, email, avatar, _id });
  // };

  // const handleLoginSubmit = ({ email, password }) => {
  //   auth.login(email, password).then((userData) => {
  //     // login();
  //     handleLogin(userData);
  //     // localStorage.setItem("jwt", res.token);
  //     localStorage.setItem("jwt", userData.token);
  //   });
  //   handleCloseModal();
  // };

  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }

    auth
      .login(email, password)
      .then((data) => {
        if (data.jwt) {
          // Save the token to local storage
          setToken(data.jwt);
          setCurrentUser(data.user);
          setIsLoggedIn(true);
          handleCloseModal();
        }
      })
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);

    setCurrentUser({});

    localStorage.removeItem("jwt");
  };

  const handleEditProfile = ({ name, avatarUrl }) => {
    api
      .updateUserData(name, avatarUrl, token)
      .then((userData) => {
        setCurrentUser({ userData });
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // new card like dislike

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    !isLiked
      ? api
          .addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : api
          .removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
  };

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

  // Token

  // useEffect(() => {
  //   // const token = localStorage.getItem("jwt", res.token);
  //   const token = localStorage.getItem("jwt");
  //   if (token) {
  //     getCurrentUser(token)
  //       .then((data) => {
  //         handleLogin(data);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, []);

  useEffect(() => {
    const jwt = getToken();
    if (!jwt) {
      return;
    }
    auth
      .getCurrentUser(jwt)
      .then(({ email, name, avatar, _id }) => {
        setIsLoggedIn(true);
        setCurrentUser({ name, avatar, email, _id });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onCreateModal={handleCreateModal}
            onCreateRegisterModal={handleRegisterModal}
            onCreateLoginModal={handleLoginModal}
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
                onCardLike={handleCardLike}
              />
            </Route>
            <Route path="/profile">
              <ProtectedRoute isLoggedIn={isLoggedIn} path="/profile">
                <Profile
                  onSelectedCard={handleSelectedCard}
                  clothingItems={clothingItems}
                  onCreateModal={handleCreateModal}
                  currentUser={currentUser}
                  isLoggedIn={isLoggedIn}
                  onChangeProfile={handleEditProfileModal}
                  onCardLike={handleCardLike}
                  onLogOut={handleLogout}
                />
              </ProtectedRoute>
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
              // onSignUp={handleRegisterSubmit}
              onSubmit={handleRegisterSubmit}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              onCreateModal={handleLoginModal}
              onClose={handleCloseModal}
              isOpen={activeModal === "login"}
              // onLogin={handleLogin}
              onSubmit={handleLogin}
            />
          )}
          {activeModal === "edit__profile" && (
            <EditProfileModal
              onCreateModal={handleLoginModal}
              onClose={handleCloseModal}
              isOpen={activeModal === "edit__profile"}
              onSaveChange={handleEditProfile}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
