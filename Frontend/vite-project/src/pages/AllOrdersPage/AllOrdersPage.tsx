import React, { useState, useEffect } from "react";
import axios from "axios";
import "./allOrdersPage.css";
import Hamburgericon from "../../components/HamburgerIcon/HamburgerIcon";
import { Order, ApiResponse, OrderItem } from "../../types/interface";
import { motion } from "motion/react";
import useAnimationStore from "../../stores/AnimationStore";

const AllOrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingOrder, setEditingOrder] = useState<Order | null>(null);
  const { slideInRight, scaleFade, fadeInUp } = useAnimationStore();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get<ApiResponse>(
          "https://4qvo7pgicf.execute-api.eu-north-1.amazonaws.com/order"
        );
        setOrders(data.orders);
      } catch (err) {
        setError("Fel vid hämtning av beställningar.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleEditOrder = (orderId: string) => {
    const orderToEdit = orders.find((order) => order.id === orderId);
    if (orderToEdit) {
      setEditingOrder({ ...orderToEdit });
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
    if (isNaN(quantity) || quantity < 0) {
      alert("Vänligen ange ett giltigt antal.");
      return;
    }
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
          !editingOrder.message ||
          editingOrder.orderItems.some((item) => item.quantity <= 0)
        ) {
          setError("Fyll i alla fält korrekt.");
          return;
        }

        await axios.put(
          `https://4qvo7pgicf.execute-api.eu-north-1.amazonaws.com/order`,

          {
            id: editingOrder.id,
            orderItems: editingOrder.orderItems,
            message: editingOrder.message,
            status: editingOrder.status,
          }
        );

        const updatedOrders = orders.map((order) =>
          order.id === editingOrder.id ? { ...editingOrder } : order
        );
        setOrders(updatedOrders);
        setIsEditing(false);
        setEditingOrder(null);
      } catch (error) {
        console.error("Fel vid uppdatering av beställning", error);
        setError("Fel vid uppdatering av beställning.");
      }
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingOrder(null);
  };

  if (loading) {
    return <p>Laddar beställningar...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }


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
        <motion.button
          className="all-orders-page__button--az"
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut" }}
        >
          A-Z
        </motion.button>
        <motion.button
          className="all-orders-page__button--price"
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Pris
        </motion.button>
        <motion.button
          className="all-orders-page__button--locked-orders"
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Låsta Beställningar
        </motion.button>
      </section>

      <motion.ul
        variants={scaleFade}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.4 }}
        className="all-orders-page__list"
      >
        {orders.map((order) => (
          <li key={order.id} className="all-orders-page__list-item">
            <label className="all-orders-page__list-item-label">
              <strong>Order ID:</strong> {order.id}
              <br />
              <strong>Status:</strong> {order.status}
              <br />
              <strong>Items:</strong>
              <ul>
                {order.orderItems.map((item: OrderItem) => (
                  <li key={item.id}>
                    {item.name} (x{item.quantity})
                  </li>
                ))}
              </ul>
              <strong>Meddelande:</strong> {order.message}
            </label>
            <input
              type="checkbox"
              className="all-orders-page__checkbox"
              id={`order-${order.id}`}
            />
            <br />
            <button
              onClick={() => handleEditOrder(order.id)}
              className="all-orders-page__button--edit-order"
            >
              Redigera
            </button>
          </li>
        ))}
      </motion.ul>

      {isEditing && editingOrder && (
        <div className="all-orders-page__edit-form">
          <h2>Redigera Beställning</h2>
          <div>
            <label>Status</label>
            <motion.select
              value={editingOrder.status}
              onChange={handleChangeStatus}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <option value="Pending">Pending</option>
              <option value="Locked">Locked</option>
              <option value="Cancelled">Cancelled</option>
            </motion.select>
          </div>

          <label>Meddelande</label>
          <motion.input
            type="text"
            value={editingOrder.message}
            onChange={handleMessageChange}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
          />

          <label>Beställningsvaror</label>
          {editingOrder.orderItems.map((item) => (
            <div key={item.id}>
              <label>{item.name}</label>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(item.id, parseInt(e.target.value))
                }
              />
            </div>
          ))}

          <button onClick={handleSaveChanges}>Spara Ändringar</button>
          <button onClick={handleCancelEdit}>Avbryt</button>
        </div>
      )}
    </main>
  );
};

export default AllOrdersPage;

// Författare Fredrick.
// Ändring av Fredrick. Animation Animation och åter Animation
