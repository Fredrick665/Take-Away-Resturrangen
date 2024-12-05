import { Link } from "react-router-dom";
import { useCartStore } from "../../stores/cartStore";
import { motion } from "motion/react";
import "./cartCounter.css";
import cart from "../../assets/cart.svg";
import useAnimationStore from "../../stores/AnimationStore";

function CartCounter() {
  const totalQuantity = useCartStore((state) => state.totalQuantity);
  const { buttonHover, scaleFade } = useAnimationStore();

  return (
    <div className="cart-counter-container">
      <motion.span
        className="cart-counter"
        variants={scaleFade}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3 }}
      >
        {totalQuantity}
      </motion.span>
      <Link to="/cart">
        <motion.img
          src={cart}
          alt="cart"
          className="cart-icon"
          variants={buttonHover}
          whileHover="whileHover"
          whileTap="whileTap"
        />
      </Link>
    </div>
  );
}

export default CartCounter;

// Författare Katerina
// Ändring av Fredrick. Lagt routing på kundvagnen så man hamnar på cart page.
// Ändring av Fredrick. Fick ändra lite css så att siffran i kundvagnen syntes på homepage.
// Ändring av Fredrick. Animation Animation och åter Animation
