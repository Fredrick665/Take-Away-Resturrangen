import "./allOrdersPage.css";
import Hamburgericon from "../../components/HamburgerIcon/HamburgerIcon";
function AllOrdersPage() {
  return (
    <main className="all-orders-page">
      <Hamburgericon />
      <h1 className="all-orders-page__title">Alla Beställningar</h1>
      <section className="all-orders-page_contentwrapper">
        <button className="all-orders-page__button--edit-order">
          Redigera Specifik beställning
        </button>
        <button className="all-orders-page__button--special-requests">
          Lägga till Speciella Önskemål
        </button>
      </section>
      <section className="all-orders-page_contentwrapper_2">
        <button className="all-orders-page__button--az">A-Z</button>
        <button className="all-orders-page__button--price">Price</button>
        <button className="all-orders-page__button--locked-orders">
          Låsta Beställningar
        </button>
      </section>
      <ul className="all-orders-page__list">
        <li className="all-orders-page__list-item">
          <label className="all-orders-page__list-item-label">
            Lorem ipsum dolor sit amet
          </label>
          <input
            type="checkbox"
            className="all-orders-page__checkbox"
            id="item1"
          />
        </li>
        <li className="all-orders-page__list-item">
          <label className="all-orders-page__list-item-label">
            Integer at ornare nibh
          </label>
          <input
            type="checkbox"
            className="all-orders-page__checkbox"
            id="item2"
          />
        </li>
        <li className="all-orders-page__list-item">
          <label className="all-orders-page__list-item-label">
            Suspendisse venenatis elit
          </label>
          <input
            type="checkbox"
            className="all-orders-page__checkbox"
            id="item3"
          />
        </li>
        <li className="all-orders-page__list-item">
          <label className="all-orders-page__list-item-label">
            Maecenas id dui egestas
          </label>
          <input
            type="checkbox"
            className="all-orders-page__checkbox"
            id="item4"
          />
        </li>
      </ul>
    </main>
  );
}

export default AllOrdersPage;
// Författare Fredrick.
