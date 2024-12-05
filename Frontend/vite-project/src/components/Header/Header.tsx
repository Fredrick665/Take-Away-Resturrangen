import "./header.css";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import CartCounter from "../CartCounter/CartCounter";
import { Link } from "react-router-dom";
import useAnimationStore from "../../stores/AnimationStore";
import { motion } from "motion/react";

function Header() {
  const { scaleUp, fadeInDown } = useAnimationStore();
  return (
    <motion.header
      className="header"
      variants={fadeInDown}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <motion.img
        className="header__img"
        src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="header image"
        variants={scaleUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />

      <HamburgerIcon />
      <Link to="/homepage">
        <motion.img
          className="header__logo"
          src="/src/assets/restaurant-logo.png"
          alt="Restaurant Logo"
          variants={scaleUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </Link>
      <motion.h1
        variants={fadeInDown}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.1, ease: "easeInOut" }}
      >
        SwiftDeluxe Restaurant
      </motion.h1>
      <CartCounter />
    </motion.header>
  );
}

export default Header;

// Miklos författare till denna component
// Ändring av Fredrick. La till hamburgaricon.
// Ändring av Fredrick. Löste en bugg som Fredrick introducerat
// Ändring av Fredrick. Animation Animation och åter Animation
