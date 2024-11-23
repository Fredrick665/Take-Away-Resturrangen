import { Link } from "react-router-dom";
import { useCartStore } from "../../stores/cartStore";
import "./cartCounter.css";
import cart from "../../assets/cart.svg";

function CartCounter() {
  const totalQuantity = useCartStore((state) => state.totalQuantity);

  console.log("Total Quantity in CartCounter:", totalQuantity);

  return (
    <div className="cart-counter-container">
      <span className="cart-counter">{totalQuantity}</span>
      <Link to="/cart">
        <img src={cart} alt="cart" className="cart-icon" />
      </Link>
    </div>
  );
}

export default CartCounter;
// Författare ?
// Ändring av Fredrick. Lagt routing på kundvagnen så man hamnar på cart page
