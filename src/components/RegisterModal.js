// import "../blocks/registerModal.css";
import ModalWithForm from "./ModalWithForm.js";

const RegisterModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  // The inputs are controlled via a single piece of state: an object
  // object called `data`. This lets us avoid writing separate change
  // handlers for each input.
  //   const [data, setData] = useState({
  //     username: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   });

  // const [name, setName] = useState("");
  // const handleNameChange = (e) => {
  //   console.log(e.target.value);
  //   setName(e.target.value);
  // };
  const [data, setData] = useState({
    data: { email: "", password: "", name: "", avatarURL: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ email, password, name, avatarURL });
  };

  useState(() => {
    if (isOpen) {
      setData("");
    }
  }, [isOpen]);

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   };

  return (
    <ModalWithForm
      buttonText="Next"
      title="Sign up"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <div className="modal__form">
        <label>
          Email
          <input
            className="modal__form-input"
            type="text"
            name="email"
            id="modal-email-input"
            placeholder="Email"
            minLength="1"
            maxLength="30"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            className="modal__form-input"
            type="text"
            name="password"
            id="modal-password-input"
            placeholder="Password"
            minLength="1"
            maxLength="30"
            value={password}
            onChange={handleChange}
          />
        </label>
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
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          Avatar URL
          <input
            className="modal__form-input"
            type="url"
            name="link"
            id="modal-url-input"
            placeholder="Avatar URL"
            minLength="1"
            maxLength="600"
            value={imageUrl}
            onChange={handleUrlChange}
          />
        </label>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
