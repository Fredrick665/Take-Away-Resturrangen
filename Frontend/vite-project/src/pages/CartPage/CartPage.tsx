import "./cartPage.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import CartList from "../../components/CartList/CartList";
import { useCartStore } from "../../stores/cartStore";
import CartCounter from "../../components/CartCounter/CartCounter";
import HamburgerIcon from "../../components/HamburgerIcon/HamburgerIcon";
import axios from "axios";
import { useState } from "react";

function CartPage() {
  const { items, addItem, subtractItem, updateNotes } = useCartStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sortBy, setSortBy] = useState<string>("none");

  const handleAdd = (itemId: string) => {
    const item = items.find((item) => item.itemId === itemId);
    if (item) {
      addItem(item);
    } else {
      console.error(`Item with id ${itemId} not found in cart.`);
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

  
  const getSortedItems = () => {
    if (sortBy === "price") {
      return [...items].sort((a, b) => a.price - b.price);
    }
    if (sortBy === "reverse-price") {
      return [...items].sort((a, b) => b.price - a.price);
    }
    if (sortBy === "az") {
      return [...items].sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sortBy === "za") {
      return [...items].sort((a, b) => b.title.localeCompare(a.title));
    }
    return items;
  };

  const handleSortToggle = (criteria: string) => {
    setSortBy((prevSortBy) => {
      if (prevSortBy === criteria) {
        return "none";
      }
      return criteria;
    });
  };

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
        <section className="main-filter">
          <h2 className="main-heading">Cart</h2>
          <button
            className="btn-pris"
            onClick={() =>
              handleSortToggle(sortBy === "price" ? "reverse-price" : "price")
            }
          >
            Price {sortBy === "price" ? "↓" : "↑"}
          </button>
          <button
            className="btn-az"
            onClick={() =>
              handleSortToggle(sortBy === "az" ? "za" : "az")
            }
          >
            {sortBy === "az" ? "A-Z" : "Z-A"}
          </button>
          <div className="main-line"></div>
        </section>
        <CartList
          items={getSortedItems()}
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
              window.location.href = "/confirmedorders";
            });
          }}
        >
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Skickar..." : "Bekräfta beställning"}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CartPage;

// Förtfattare Katerina
// Ändringar av Fredrick. Har typat om en del.
