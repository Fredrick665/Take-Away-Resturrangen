
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import logo from "../../assets/logo.svg";
import closeIcon from "../../assets/closeIcon.svg";
import "./loginPage.css";
import { useState } from "react";

function LoginPage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogin = async (username: string, password: string) => {
    console.log("Sending login request with:", { username, password });

    try {
      const response = await fetch("https://sextvrjaie.execute-api.eu-north-1.amazonaws.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log("Response data:", data);

      if (response.ok) {
        const token = data?.token || data?.data?.token;

        if (token) {
          console.log("Token received:", token);
          localStorage.setItem('token', token); // Sparar token i localStorage
          console.log("Token saved:", localStorage.getItem("token"));

          navigate("/homepage");
        } else {

          setErrorMessage("Token is missing in the response.");
          console.error("Token is missing in the response:", data);
        }
      } else {
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
        <Link to="homepage">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <Link to="/start">
          <img src={closeIcon} alt="close" className="close-icon" />
        </Link>
      </div>
      <LoginForm onSubmit={handleLogin} />

      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}

export default LoginPage;



//Författare Katerina
// Ändrat av Fredrick. Lagt till routing så man hamnar på startsidan när man klickar på krysset. Ändrat igen och lagt till routing så man hamnar på homepage om man klickar på loggan.
