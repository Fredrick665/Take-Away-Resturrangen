
import './registerPage.css';
import logo from '../../assets/logo.svg';
import closeIcon from '../../assets/closeIcon.svg';
import { Link, useNavigate } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { RegisterFormData } from '../../types/interfaceReg';
import axios from 'axios';
import { useState } from 'react';

function RegisterPage() {
  const navigate = useNavigate();
  const [statusMessage, setStatusMessage] = useState('');

  const handleRegisterSubmit = async (formData: RegisterFormData) => {
    try {

      const response = await axios.post('https://sextvrjaie.execute-api.eu-north-1.amazonaws.com/register', formData);
      console.log('User registered:', response.data);

      navigate('/homepage');

      setStatusMessage('User registered successfully!');
    } catch (error) {
      console.error('Error registering user:', error);

      // Om felet kommer från backend
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const backendMessage = error.response.data?.message || 'An error occurred with the backend.';

          setStatusMessage(backendMessage);  // meddelande till användaren
        } else if (error.request) {

          console.error("No response received from backend:", error.request);
          setStatusMessage('Network error. Please try again later.');
        } else {

          console.error("Error setting up the request:", error.message);
          setStatusMessage("An error occurred. Please try again.");
        }
      } else {

        console.error("Unknown error:", error);
        setStatusMessage("An unknown error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="register-page">
      <div className="icons-container">
        <img src={logo} alt="Logo" className="logo" />
        {statusMessage && (
          <div className={`status-message ${statusMessage.includes('success') ? 'success' : 'error'}`}>
            {statusMessage}
          </div>
        )}
        <Link to="/start">
          <img src={closeIcon} alt="close" className="close-icon" />
        </Link>
      </div>

      <RegisterForm onSubmit={handleRegisterSubmit} />
    </div>
  );
}

export default RegisterPage;




// Författare Katarina

// Ändring av Fredrick. Lagt till routing så man hamnar på start när man klickar på close icon
