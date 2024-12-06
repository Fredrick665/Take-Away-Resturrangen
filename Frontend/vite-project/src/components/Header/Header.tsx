import "./header.css";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import CartCounter from "../CartCounter/CartCounter";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img
        className="header__img"
        src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="header image"
      />

      <HamburgerIcon />
      <Link to="/homepage">
        <img
          className="header__logo"
          src={Logo}
          alt="restaurant logo"
        />
      </Link>
      <h1>SwiftDeluxe Restaurant</h1>
      <CartCounter />
    </header>
  );
}

export default Header;

// Miklos författare till denna component
// Ändring av Fredrick. La till hamburgaricon.
// Ändring av Fredrick. Löste en bugg som Fredrick introducerat
