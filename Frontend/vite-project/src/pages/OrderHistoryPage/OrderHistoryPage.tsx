import { Link } from "react-router-dom";
import "./orderHistoryPage.css";
import Hamburgericon from "../../components/HamburgerIcon/HamburgerIcon";

function OrderHistoryPage() {
  return (
    <main className="order-history-page">
      <Hamburgericon />
      <h1 className="order-history-page__title">Min orderhistorik</h1>
      <ul className="order-history-page__order-list">
        <li className="order-history-page__order-item">
          <label className="order-history-page__order-item-label">
            <Link to="/singleorder">Beställning 1</Link>
          </label>
        </li>
        <li className="order-history-page__order-item">
          <label className="order-history-page__order-item-label">
            <Link to="/singleorder">Beställning 2</Link>
          </label>
        </li>
        <li className="order-history-page__order-item">
          <label className="order-history-page__order-item-label">
            <Link to="/singleorder">Beställning 3</Link>
          </label>
        </li>
        <li className="order-history-page__order-item">
          <label className="order-history-page__order-item-label">
            <Link to="/singleorder">Beställning 4</Link>
          </label>
        </li>
      </ul>
    </main>
  );
}

export default OrderHistoryPage;
// Författare Fredrick.
