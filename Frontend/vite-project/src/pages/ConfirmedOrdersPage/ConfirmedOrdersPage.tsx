import { Link } from "react-router-dom";
import "./confirmedOrdersPage.css";
import Logo from "../../assets/logo.png";
import Receipt from "../../components/Receipt/Receipt";

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
      <Receipt />
      <Link to="/homepage">
        <button className="confirmed-orders-page__back-button">
          Tillbaka till Homepage
        </button>
      </Link>
    </main>
  );
}

export default ConfirmedOrdersPage;
// Författare Fredrick.
