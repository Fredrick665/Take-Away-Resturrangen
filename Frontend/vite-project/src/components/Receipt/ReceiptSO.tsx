import "./receipt.css";
import { Order } from "../../types/interface";

interface ReceiptSOProps {
  order: Order;
}

function ReceiptSO({ order }: ReceiptSOProps) {
  return (
    <section className="receipt-page__details">
      <p className="receipt-page__order-title"> {order.id}</p>
      <ul className="receipt-page__order-list">
        {order.orderItems.map((item) => (
          <li className="receipt-page__order-item" key={item.id}>
            <label className="receipt-page__order-item-label">
              {item.name} - {item.quantity} st
            </label>
          </li>
        ))}
      </ul>
      <h4 className="receipt-page__wishlist-title">Eventuella Önskemål:</h4>
      <p className="receipt-page__wishlist-text">
        {order.message || "Inga särskilda önskemål."}
      </p>
      <p className="receipt-page__total">Status: {order.status}</p>
    </section>
  );
}

export default ReceiptSO;

// Författare Fredrick.
