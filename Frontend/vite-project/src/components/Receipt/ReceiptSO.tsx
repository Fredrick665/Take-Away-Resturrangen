import "./receipt.css";
import { Order } from "../../types/interface";
import { motion } from "motion/react";
import useAnimationStore from "../../stores/AnimationStore";
interface ReceiptSOProps {
  order: Order;
}

function ReceiptSO({ order }: ReceiptSOProps) {
  const { fadeInUp, fadeInDown, scaleFade } = useAnimationStore();
  return (
    <motion.section
      className="receipt-page__details"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.p
        className="receipt-page__order-title"
        variants={fadeInDown}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {order.id}
      </motion.p>
      <motion.ul
        className="receipt-page__order-list"
        variants={scaleFade}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {order.orderItems.map((item) => (
          <motion.li
            className="receipt-page__order-item"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: "easeOut" }}
            key={item.id}
          >
            <label className="receipt-page__order-item-label">
              {item.name} - {item.quantity} st
            </label>
          </motion.li>
        ))}
      </motion.ul>
      <h4 className="receipt-page__wishlist-title">Eventuella Önskemål:</h4>
      <motion.p className="receipt-page__wishlist-text">
        {order.message || "Inga särskilda önskemål."}
      </motion.p>
      <motion.p className="receipt-page__total">
        Status: {order.status}
      </motion.p>
    </motion.section>
  );
}

export default ReceiptSO;

// Författare Fredrick.
// Ändring av Fredrick. Animation Animation och åter Animation
