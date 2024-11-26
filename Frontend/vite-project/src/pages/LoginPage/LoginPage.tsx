
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import logo from "../../assets/logo.svg";
import closeIcon from "../../assets/closeIcon.svg";
import "./loginPage.css";
import { useState } from "react";

function LoginPage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await fetch("https://sextvrjaie.execute-api.eu-north-1.amazonaws.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        // Spara JWT i localStorage
        localStorage.setItem("token", data.token);

        console.log("Token saved:", data.token);
        window.alert('You are logged in!');

        navigate('/homepage');
      } else {
        // Hanterar ärendet när svaret från servern inte är OK
        console.log("Login failed:", data.message);

        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Login request error:", error);
      setErrorMessage("Failed to contact the server. Please try again later.");
    }
  };

  return (
    <div className="login-page">
      <div className="icons-container">
        <img src={logo} alt="Logo" className="logo" />
        <Link to="/start">
          <img src={closeIcon} alt="close" className="close-icon" />
        </Link>
      </div>
      <LoginForm onSubmit={handleLogin} />
      {/* Om det finns ett fel, visa det */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}

export default LoginPage;






//Författare Katarina

// Ändrat av Fredrick. Lagt till routing så man hamnar på startsidan när man klickar på krysset
