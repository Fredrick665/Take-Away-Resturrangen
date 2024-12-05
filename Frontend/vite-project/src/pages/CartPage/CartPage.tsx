import "./cartPage.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import CartList from "../../components/CartList/CartList";
import { useCartStore } from "../../stores/cartStore";
import CartCounter from "../../components/CartCounter/CartCounter";
import HamburgerIcon from "../../components/HamburgerIcon/HamburgerIcon";
import axios from "axios";
import { useState } from "react";
import useAnimationStore from "../../stores/AnimationStore";
import { motion } from "motion/react";

function CartPage() {
  const { items, addItem, subtractItem, updateNotes } = useCartStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleAdd = (itemId: string) => {
    const item = items.find((item) => item.itemId === itemId);
    if (item) {
      addItem(item);
    } else {
      console.error("Item with id ${itemId} not found in cart.");
    }
  };

  const handleSubtract = subtractItem;
  const handleNotesChange = updateNotes;

  const totalPrice = items.reduce(
    (sum: number, item) => sum + item.price * item.quantity,
    0
  );

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const orderItems = items.map((item) => ({
        id: item.itemId,
        name: item.title,
        quantity: item.quantity,
        notes: item.notes,
      }));

      const response = await axios.post(
        "https://4qvo7pgicf.execute-api.eu-north-1.amazonaws.com/order",
        { orderItems }
      );

      console.log("Order skapad:", response.data);
    } catch (error) {
      console.error("Fel vid skapande av order:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  const { staggeredFadeIn, scaleUp, buttonHover } = useAnimationStore();
  return (
    <div className="cart-page">
      <div className="header-cart">
        <HamburgerIcon />
        <Link to="/homepage">
          <img src={logo} alt="logo" className="logo-icon" />
        </Link>
        <CartCounter />
      </div>

      <div className="main-cart">
        <p className="main-text">Total: {totalPrice} kr</p>
        <motion.section variants={staggeredFadeIn} className="main-filter">
          <h2 className="main-heading">Cart</h2>
          <motion.button
            className="btn-pris"
            variants={scaleUp}
            {...buttonHover}
          >
            Price
          </motion.button>
          <motion.button className="btn-az" variants={scaleUp} {...buttonHover}>
            A-Z
          </motion.button>
          <div className="main-line"></div>
        </motion.section>
        <CartList
          items={items}
          onAdd={handleAdd}
          onSubtract={handleSubtract}
          onNotesChange={handleNotesChange}
        />
      </div>

      <div className="footer-cart">
        <Link
          to="/confirmedorders"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit().then(() => {
              navigate("/confirmedorders");
            });
          }}
        >
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Skickar..." : "Bekräfta beställning"}
          </button>
        </Link>
        ;
      </div>
    </div>
  );
}

export default CartPage;

// Förtfattare Katerina
// Ändringar av Fredrick. Har typat om en del.
// Ändring av Fredrick. Animation Animation och åter Animation
