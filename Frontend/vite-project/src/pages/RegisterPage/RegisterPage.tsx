import "./registerPage.css";
import logo from "../../assets/logo.svg";
import closeIcon from "../../assets/closeIcon.svg";
import { Link } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { RegisterFormData } from "../../types/interfaceReg";

function RegisterPage() {
  const handleRegisterSubmit = (formData: RegisterFormData) => {
    console.log("Registrering med följande data:", formData);
  };

  return (
    <div className="register-page">
      <div className="icons-container">
        <Link to="/homepage">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <Link to="/start">
          <img src={closeIcon} alt="close" className="close-icon" />
        </Link>
      </div>
      <RegisterForm onSubmit={handleRegisterSubmit} />
    </div>
  );
}

export default RegisterPage;

// Författare Katerina

// Ändring av Fredrick. Lagt till routing så man hamnar på start när man klickar på close icon
// En till ändring av Fredrick. Lagt till routing så man hamnar på homepage när man klickar på loggan.
