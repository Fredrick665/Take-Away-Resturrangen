import "./footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <section className="footer__logo">
        <img src="/src/assets/restaurant-logo.png" alt="" />
        <h1>SwiftDeluxe Restaruant</h1>
      </section>
      <ul className="footer__contacts">
        <li>SwiftDeluxeRestaurant@gmail.com</li>
        <li>Tel.: 073-251-739</li>
        <li>Sweden, Karlstad, Någonstans-Gata 6</li>
      </ul>
      <section className="footer__social-media">
        <img
          className="footer__social-media-icon"
          src="/src/assets/facebook-logo.svg"
          alt=""
        />
        <img
          className="footer__social-media-icon"
          src="/src/assets/instagram-logo.svg"
          alt=""
        />
      </section>
      <Link to="/cart">
        <button>Till Cartpage</button>
      </Link>
    </footer>
  );
}

export default Footer;

//Författare Miklos
// Ändring av Fredrick: La till en länk till cartpage för att kunna navigera runt sidan i samband med handledning. Tas bort senare.
