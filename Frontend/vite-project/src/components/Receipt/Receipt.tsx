import "./receipt.css";
function Receipt() {
  return (
    <>
      <section className="receipt-page__details">
        <p className="receipt-page__order-title">Beställning 1</p>
        <ul className="receipt-page__order-list">
          <li className="receipt-page__order-item">
            <label className="receipt-page__order-item-label">
              Lorem ipsum dolor sit amet
            </label>
          </li>
          <li className="receipt-page__order-item">
            <label className="receipt-page__order-item-label">
              Integer at ornare nibh
            </label>
          </li>
          <li className="receipt-page__order-item">
            <label className="receipt-page__order-item-label">
              Suspendisse venenatis elit
            </label>
          </li>
          <li className="receipt-page__order-item">
            <label className="receipt-page__order-item-label">
              Maecenas id dui egestas
            </label>
          </li>
        </ul>
        <h4 className="receipt-page__wishlist-title">Eventuella Önskemål:</h4>
        <p className="receipt-page__wishlist-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          deserunt ut velit dignissimos aliquam officiis magni cupiditate nulla
          rerum, impedit at laborum architecto, repellat numquam illum, quo
          temporibus officia pariatur!
        </p>
        <p className="receipt-page__total">Totalsumma: 600kr</p>
      </section>
    </>
  );
}

export default Receipt;

// Författare Fredrick.
