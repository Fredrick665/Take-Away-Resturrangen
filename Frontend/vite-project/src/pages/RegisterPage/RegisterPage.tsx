import { Link } from "react-router-dom";
import "./registerPage.css";
import logo from "../../assets/logo.svg";
import closeIcon from "../../assets/closeIcon.svg";

function Register(event: { preventDefault: () => void }) {
  event.preventDefault();
}

function RegisterPage() {
  return (
    <div className="register-page">
      <div className="icons-container">
        <img src={logo} alt="Logo" className="logo" />
        <Link to="/start">
          <img src={closeIcon} alt="close" className="close-icon" />
        </Link>
      </div>
      <form className="register-form" onSubmit={Register}>
        <input
          type="text"
          id="full-name"
          name="fullName"
          placeholder="Name Eftername"
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />
        <input
          type="password"
          id="reapet-password"
          name="reapetPassword"
          placeholder="Reapet password"
          required
        />
        <input
          type="text"
          id="address"
          name="addres"
          placeholder="Address"
          required
        />
        <input
          type="email"
          id="mail"
          name="e-mail"
          placeholder="E-mail"
          required
        />
        <button type="submit">Registera</button>
      </form>
    </div>
  );
}

export default RegisterPage;

// Författare Katarina

// Ändring av Fredrick. Lagt till routing så man hamnar på start när man klickar på close icon
