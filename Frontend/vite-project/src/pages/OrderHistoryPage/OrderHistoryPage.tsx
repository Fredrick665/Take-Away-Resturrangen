import "./orderHistoryPage.css";

function OrderHistoryPage() {
  return (
    <main className="order-history-page">
      <span className="order-history-page__hbmenu"></span>
      <h1 className="order-history-page__title">Min orderhistorik</h1>
      <ul className="order-history-page__order-list">
        <li className="order-history-page__order-item">
          <label className="order-history-page__order-item-label">
            Lorem ipsum dolor sit amet
          </label>
        </li>
        <li className="order-history-page__order-item">
          <label className="order-history-page__order-item-label">
            Integer at ornare nibh
          </label>
        </li>
        <li className="order-history-page__order-item">
          <label className="order-history-page__order-item-label">
            Suspendisse venenatis elit
          </label>
        </li>
        <li className="order-history-page__order-item">
          <label className="order-history-page__order-item-label">
            Maecenas id dui egestas
          </label>
        </li>
      </ul>
    </main>
  );
}

export default OrderHistoryPage;
