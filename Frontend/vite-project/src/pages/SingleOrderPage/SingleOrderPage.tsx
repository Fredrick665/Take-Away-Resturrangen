import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./singleOrderPage.css";
import Hamburgericon from "../../components/HamburgerIcon/HamburgerIcon";
import ReceiptSO from "../../components/Receipt/ReceiptSO";
import { Order } from "../../types/interface";

function SingleOrderPage() {
  const { orderId } = useParams<{ orderId: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get<Order>(
          `https://4qvo7pgicf.execute-api.eu-north-1.amazonaws.com/order/${orderId}`
        );
        setOrder(response.data);
      } catch (err) {
        console.error("Fel vid hämtning av order:", err);
        setError("Kunde inte hämta orderns detaljer.");
      }
    };

    if (orderId) {
      fetchOrderDetails();
    }
  }, [orderId]);

  const deleteOrder = async () => {
    if (!orderId) return;

    try {
      setLoading(true);
      await axios.delete(
        `https://4qvo7pgicf.execute-api.eu-north-1.amazonaws.com/delete/${orderId}`
      );
      setLoading(false);
      alert("Beställningen har tagits bort!");
      navigate("/orderhistory");
    } catch (err) {
      console.error("Fel vid borttagning av order:", err);
      setError("Kunde inte ta bort ordern.");
      setLoading(false);
    }
  };

  return (
    <main className="single-order-page">
      <Hamburgericon />
      <h1 className="single-order-page__heading">Din valda beställning</h1>
      {error ? (
        <p className="single-order-page__error">{error}</p>
      ) : (
        order && (
          <>
            <ReceiptSO order={order} />
            <button onClick={deleteOrder} disabled={loading}>
              {loading ? "Tar bort..." : "Ta bort beställning"}
            </button>
          </>
        )
      )}
    </main>
  );
}

export default SingleOrderPage;

// Författare Fredrick
