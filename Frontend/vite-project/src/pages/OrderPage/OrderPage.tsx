import "./orderPage.css";
import Hamburgericon from "../../components/HamburgerIcon/HamburgerIcon";

function OrderPage() {
  return (
    <main className="order-page">
      <Hamburgericon />
      <h1 className="order-page__title">Lagerstatus på ingredienser</h1>
      <ul className="order-page__list">
        <li className="order-page__list-item">
          <label className="order-page__list-item-label">
            Lorem ipsum dolor sit amet
          </label>
          <input type="number" className="order-page__number" id="item1" />
        </li>
        <li className="order-page__list-item">
          <label className="order-page__list-item-label">
            Integer at ornare nibh
          </label>
          <input type="number" className="order-page__number" id="item2" />
        </li>
        <li className="order-page__list-item">
          <label className="order-page__list-item-label">
            Suspendisse venenatis elit
          </label>
          <input type="number" className="order-page__number" id="item3" />
        </li>
        <li className="order-page__list-item">
          <label className="order-page__list-item-label">
            Maecenas id dui egestas
          </label>
          <input type="number" className="order-page__number" id="item4" />
        </li>
      </ul>
    </main>
  );
}

export default OrderPage;
// Författare Fredrick.
