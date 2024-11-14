import './loginPage.css';
import logo from '../../assets/logo.svg';
import closeIcon from '../../assets/closeIcon.svg';

function Login(event: { preventDefault: () => void; }) {
    event.preventDefault();
}

function LoginPage() {
    return (
        <div className="login-page">
            <div className="icons-container">
                <img src={logo} alt="Logo" className="logo" />
                <img src={closeIcon} alt="close" className="close-icon" />
            </div>
            <form className="login-form" onSubmit={Login}>
                <input type="text" id="username" name="username" placeholder="Username" required />
                <input type="password" id="password" name="password" placeholder="Password" required />
                <button type="submit">Log in</button>
            </form>
        </div>
    );
}

export default LoginPage;
