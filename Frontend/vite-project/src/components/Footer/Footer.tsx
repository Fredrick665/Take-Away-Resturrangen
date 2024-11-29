import "./footer.css";
import Logo from "../../assets/logo.png";
import FacebookBtn from "./../../assets/facebook-logo.svg";
import InstagramBtn from "./../../assets/instagram-logo.svg"

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__logo">
      <img src={Logo} alt="Logga" />
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
          src={FacebookBtn}
          alt="facebook button"
        />
        <img
          className="footer__social-media-icon"
          src={InstagramBtn}
          alt="instagram button"
        />
      </section>
    </footer>
  );
}

export default Footer;

// Författare: Miklós
// Ändring av Fredrick: La till en länk till cartpage för att kunna navigera runt sidan i samband med handledning. Tas bort senare.