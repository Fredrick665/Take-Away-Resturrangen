import "./confirmedOrdersPage.css";
import Logo from "../../assets/logo.png";

function ConfirmedOrdersPage() {
  return (
    <main className="confirmed-orders-page">
      <img className="confirmed-orders-page__logo" src={Logo} alt="Logga" />
      <h1 className="confirmed-orders-page__title">
        Kvitto på din beställning
      </h1>
      <p className="confirmed-orders-page__description">
        Ett mail har skickats till den epost du angett för att bekräfta denna
        beställning. Välkommen åter!
      </p>
      <section className="confirmed-orders-page__details">
        <p className="confirmed-orders-page__order-title">
          Du har beställt följande:
        </p>
        <ul className="confirmed-orders-page__order-list">
          <li className="confirmed-orders-page__order-item">
            <label className="confirmed-orders-page__order-item-label">
              Lorem ipsum dolor sit amet
            </label>
          </li>
          <li className="confirmed-orders-page__order-item">
            <label className="confirmed-orders-page__order-item-label">
              Integer at ornare nibh
            </label>
          </li>
          <li className="confirmed-orders-page__order-item">
            <label className="confirmed-orders-page__order-item-label">
              Suspendisse venenatis elit
            </label>
          </li>
          <li className="confirmed-orders-page__order-item">
            <label className="confirmed-orders-page__order-item-label">
              Maecenas id dui egestas
            </label>
          </li>
        </ul>
        <h4 className="confirmed-orders-page__wishlist-title">
          Eventuella Önskemål:
        </h4>
        <p className="confirmed-orders-page__wishlist-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          deserunt ut velit dignissimos aliquam officiis magni cupiditate nulla
          rerum, impedit at laborum architecto, repellat numquam illum, quo
          temporibus officia pariatur!
        </p>
        <p className="confirmed-orders-page__total">Totalsumma: 600kr</p>
      </section>
      <button className="confirmed-orders-page__back-button">
        Tillbaka till Homepage
      </button>
    </main>
  );
}

export default ConfirmedOrdersPage;
