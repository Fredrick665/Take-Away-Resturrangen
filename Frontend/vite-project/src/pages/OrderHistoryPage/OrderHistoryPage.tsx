import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "motion/react";
import useAnimationStore from "../../stores/AnimationStore";
import "./orderHistoryPage.css";
import Hamburgericon from "../../components/HamburgerIcon/HamburgerIcon";
import { ApiResponse } from "../../types/interface";

function OrderHistoryPage() {
  const [orders, setOrders] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { menuItemVariants } = useAnimationStore();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://4qvo7pgicf.execute-api.eu-north-1.amazonaws.com/order"
        );
        const orderIds = response.data.orders.map((order) => order.id);
        setOrders(orderIds);
      } catch (err) {
        console.error("Fel vid hämtning av ordrar:", err);
        setError("Kunde inte hämta ordrar. Försök igen senare.");
      }
    };

    fetchOrders();
  }, []);

  return (
    <main className="order-history-page">
      <Hamburgericon />
      <h1 className="order-history-page__title">Min orderhistorik</h1>
      {error ? (
        <p className="order-history-page__error">{error}</p>
      ) : (
        <motion.ul
          className="order-history-page__order-list"
          variants={menuItemVariants}
          initial="hidden"
          animate="visible"
        >
          {orders.length === 0 ? (
            <li>Ingen orderhistorik tillgänglig</li>
          ) : (
            orders.map((orderId, index) => (
              <motion.li
                className="order-history-page__order-item"
                key={orderId}
                variants={menuItemVariants}
                custom={index}
                initial="hidden"
                animate="visible"
              >
                <label className="order-history-page__order-item-label">
                  <Link to={`/singleorder/${orderId}`}>
                    Order ID: {orderId}
                  </Link>
                </label>
              </motion.li>
            ))
          )}
        </motion.ul>
      )}
    </main>
  );
}

export default OrderHistoryPage;

// Författare Fredrick.
// Ändring av Fredrick. Animation Animation och åter Animation
