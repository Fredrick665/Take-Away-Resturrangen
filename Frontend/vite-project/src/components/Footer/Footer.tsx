import { motion } from "motion/react";
import "./footer.css";
import Logo from "../../assets/logo.png";
import FacebookBtn from "./../../assets/facebook-logo.svg";
import InstagramBtn from "./../../assets/instagram-logo.svg";
import useAnimationStore from "../../stores/AnimationStore";

function Footer() {
  const { fadeInUp, scaleFade } = useAnimationStore();

  return (
    <footer className="footer">
      <motion.section
        className="footer__logo"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7 }}
      >
        <img src={Logo} alt="Logga" />
        <h1>SwiftDeluxe Restaurant</h1>
      </motion.section>
      <motion.ul
        className="footer__contacts"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7 }}
      >
        <li>SwiftDeluxeRestaurant@gmail.com</li>
        <li>Tel.: 073-251-739</li>
        <li>Sweden, Karlstad, Någonstans-Gata 6</li>
      </motion.ul>
      <motion.section
        className="footer__social-media"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7 }}
      >
        <motion.img
          className="footer__social-media-icon"
          src={FacebookBtn}
          alt="facebook button"
          variants={scaleFade}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.01 }}
        />
        <motion.img
          className="footer__social-media-icon"
          src={InstagramBtn}
          alt="instagram button"
          variants={scaleFade}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.01 }}
        />
      </motion.section>
    </footer>
  );
}

export default Footer;

// Författare: Miklós
// Ändring av Fredrick: La till en länk till cartpage för att kunna navigera runt sidan i samband med handledning. Tas bort senare.
// Ändring av Fredrick. Animation Animation och åter Animation
