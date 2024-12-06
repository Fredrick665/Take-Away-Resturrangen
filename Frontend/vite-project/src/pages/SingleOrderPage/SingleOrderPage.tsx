import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./singleOrderPage.css";
import Hamburgericon from "../../components/HamburgerIcon/HamburgerIcon";
import ReceiptSO from "../../components/Receipt/ReceiptSO";
import { Order } from "../../types/interface";
import useAnimationStore from "../../stores/AnimationStore";
import { motion } from "motion/react";

function SingleOrderPage() {
  const { orderId } = useParams<{ orderId: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [editingOrder, setEditingOrder] = useState<Order | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const { fadeInUp, staggerChildren, inputFocusStyle } = useAnimationStore();

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

  const handleEditOrder = () => {
    if (order) {
      setEditingOrder({ ...order });
      setIsEditing(true);
    }
  };

  const handleChangeStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (editingOrder) {
      setEditingOrder({
        ...editingOrder,
        status: event.target.value as "Locked" | "Pending" | "Cancelled",
      });
    }
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (editingOrder) {
      setEditingOrder({
        ...editingOrder,
        message: event.target.value,
      });
    }
  };

  const handleQuantityChange = (itemId: string, quantity: number) => {
    if (editingOrder) {
      const updatedOrderItems = editingOrder.orderItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      );
      setEditingOrder({
        ...editingOrder,
        orderItems: updatedOrderItems,
      });
    }
  };

  const handleSaveChanges = async () => {
    if (editingOrder) {
      try {
        if (
          editingOrder.orderItems.some(
            (item) => isNaN(item.quantity) || item.quantity <= 0
          )
        ) {
          setError(
            "Det går inte ta bort beställningar genom att ändra antalet av maträtten till 0. Ta bort hela beställningen istället."
          );
          return;
        }

        await axios.put(
          `https://4qvo7pgicf.execute-api.eu-north-1.amazonaws.com/order`,
          {
            id: editingOrder.id,
            orderItems: editingOrder.orderItems,
            message: editingOrder.message || "",
            status: editingOrder.status,
          }
        );
      } catch (error) {
        console.error("Kunde inte spara ändringar:", error);
        setError("Något gick fel vid sparandet. Försök igen senare.");
      }
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingOrder(null);
  };

  return (
    <main className="single-order-page">
      <Hamburgericon />
      <motion.h1
        className="single-order-page__title"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        Din valda beställning
      </motion.h1>

      {error ? (
        <p className="single-order-page__error">{error}</p>
      ) : (
        order && (
          <>
            {!isEditing ? (
              <motion.article
                className="single-order-page__details"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
              >
                <ReceiptSO order={order} />
                <section className="single-order-page__actions">
                  <motion.button
                    className="single-order-page__button single-order-page__button--delete"
                    onClick={deleteOrder}
                    disabled={loading}
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                  >
                    {loading ? "Tar bort..." : "Ta bort beställning"}
                  </motion.button>
                  <motion.button
                    className="single-order-page__button single-order-page__button--edit"
                    onClick={handleEditOrder}
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                  >
                    {loading ? "Ändrar..." : "Ändra beställning"}
                  </motion.button>
                </section>
              </motion.article>
            ) : (
              <motion.section
                className="single-order-page__edit"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
              >
                <h2 className="single-order-page__edit-title">
                  Redigera Beställning
                </h2>
                <motion.article
                  className="single-order-page__edit-section"
                  variants={staggerChildren}
                  initial="hidden"
                  animate="visible"
                >
                  <label className="single-order-page__edit-label">
                    Status
                  </label>
                  <select
                    className="single-order-page__edit-input"
                    value={editingOrder?.status}
                    onChange={handleChangeStatus}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Locked">Locked</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </motion.article>
                <motion.article
                  className="single-order-page__edit-section"
                  variants={staggerChildren}
                  initial="hidden"
                  animate="visible"
                >
                  <label className="single-order-page__edit-label">
                    Meddelande
                  </label>
                  <motion.input
                    className="single-order-page__edit-input"
                    type="text"
                    value={editingOrder?.message}
                    onChange={handleMessageChange}
                    variants={inputFocusStyle}
                    whileFocus="whileFocus"
                  />
                </motion.article>
                <motion.article
                  className="single-order-page__edit-section"
                  variants={staggerChildren}
                  initial="hidden"
                  animate="visible"
                >
                  <label className="single-order-page__edit-label">
                    Beställningsvaror
                  </label>
                  {editingOrder?.orderItems.map((item) => (
                    <motion.section
                      className="single-order-page__edit-item"
                      key={item.id}
                      variants={fadeInUp}
                      initial="hidden"
                      animate="visible"
                    >
                      <label className="single-order-page__edit-item-label">
                        {item.name}
                      </label>
                      <input
                        className="single-order-page__edit-item-input"
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            item.id,
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </motion.section>
                  ))}
                </motion.article>
                <section className="single-order-page__edit-actions">
                  <motion.button
                    className="single-order-page__button single-order-page__button--save"
                    onClick={handleSaveChanges}
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                  >
                    Spara Ändringar
                  </motion.button>
                  <motion.button
                    className="single-order-page__button single-order-page__button--cancel"
                    onClick={handleCancelEdit}
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                  >
                    Avbryt
                  </motion.button>
                </section>
              </motion.section>
            )}
          </>
        )
      )}
    </main>
  );
}

export default SingleOrderPage;

// Författare Fredrick
// Ändring av Fredrick. Animation Animation och åter Animation
