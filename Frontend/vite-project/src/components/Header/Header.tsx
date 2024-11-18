import "./header.css";
import { Link } from "react-router-dom";
import Hamburgericon from "../HamburgerIcon/HamburgerIcon";

function Header() {
  return (
    <header className="header">
      <img
        className="header__img"
        src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="header image"
      />
      <Link to="/start">
        <Hamburgericon />
      </Link>
      <img
        className="header__logo"
        src="/src/assets/restaurant-logo.png"
        alt=""
      />
      <h1>SwiftDeluxe Restaruant</h1>
    </header>
  );
}

export default Header;
// Miklos författare till denna component
// Ändring av Fredrick. La till hamburgaricon.
