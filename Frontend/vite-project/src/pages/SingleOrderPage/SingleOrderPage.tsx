import "./singleOrderPage.css";

function SingleOrderPage() {
  return (
    <main className="single-order-page">
      <span className="single-order-page__hbmenu"></span>
      <h1 className="single-order-page__heading">Beställning 1</h1>
      <section className="single-order-page__details">
        <p className="single-order-page__order-title">Beställning 1</p>
        <ul className="single-order-page__order-list">
          <li className="single-order-page__order-item">
            <label className="single-order-page__order-item-label">
              Lorem ipsum dolor sit amet
            </label>
          </li>
          <li className="single-order-page__order-item">
            <label className="single-order-page__order-item-label">
              Integer at ornare nibh
            </label>
          </li>
          <li className="single-order-page__order-item">
            <label className="single-order-page__order-item-label">
              Suspendisse venenatis elit
            </label>
          </li>
          <li className="single-order-page__order-item">
            <label className="single-order-page__order-item-label">
              Maecenas id dui egestas
            </label>
          </li>
        </ul>
        <h4 className="single-order-page__wishlist-title">
          Eventuella Önskemål:
        </h4>
        <p className="single-order-page__wishlist-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          deserunt ut velit dignissimos aliquam officiis magni cupiditate nulla
          rerum, impedit at laborum architecto, repellat numquam illum, quo
          temporibus officia pariatur!
        </p>
        <p className="single-order-page__total">Totalsumma: 600kr</p>
      </section>
    </main>
  );
}

export default SingleOrderPage;
