import "./singleOrderPage.css";
import Hamburgericon from "../../components/HamburgerIcon/HamburgerIcon";
import Receipt from "../../components/Receipt/Receipt";

function SingleOrderPage() {
  return (
    <main className="single-order-page">
      <Hamburgericon />
      <h1 className="single-order-page__heading">Beställning 1</h1>
      <Receipt />
    </main>
  );
}

export default SingleOrderPage;
// Författare Fredrick
