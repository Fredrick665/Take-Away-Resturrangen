import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import logo from "../../assets/logo.svg";
import closeIcon from "../../assets/closeIcon.svg";
import "./loginPage.css";

function LoginPage() {
  const handleLogin = (username: string, password: string) => {
    console.log("Login data:", username, password);
  };

  return (
    <div className="login-page">
      <div className="icons-container">
        <Link to="homepage">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <Link to="/start">
          <img src={closeIcon} alt="close" className="close-icon" />
        </Link>
      </div>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}

export default LoginPage;

//Författare Katerina

// Ändrat av Fredrick. Lagt till routing så man hamnar på startsidan när man klickar på krysset. Ändrat igen och lagt till routing så man hamnar på homepage om man klickar på loggan.
