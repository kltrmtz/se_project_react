// import "../blocks/registerModal.css";
import ModalWithForm from "./ModalWithForm.jsx";

const RegisterModal = ({ handleCloseModal, onSignUp, isOpen }) => {
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
    data: { email: "", password: "", name: "", avatarUrl: "" },
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
    // onSignUp({ email, password, name, avatarUrl });
    onSignUp(data);
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
      buttonText="Sign Up"
      title="Sign Up"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSignUp={handleSubmit}
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
            value={data.email}
            onChange={handleChange}
            required
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
            value={data.password}
            onChange={handleChange}
            required
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
            value={data.name}
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
            value={data.avatarUrl}
            onChange={handleChange}
          />
        </label>
        <Link to="/login" className="login__link">
          // or Log In? //{" "}
        </Link>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
