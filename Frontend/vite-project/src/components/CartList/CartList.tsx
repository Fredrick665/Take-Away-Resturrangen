import "./cartList.css";
import CartListItem from "./CartListItem/CartListItem";
import { CartItem } from "../../types/interface";

interface CartListProps {
  items: CartItem[];
  onAdd: (id: string) => void;
  onSubtract: (id: string) => void;
  onNotesChange: (id: string, notes: string) => void;
}

function CartList({ items, onAdd, onSubtract, onNotesChange }: CartListProps) {
  return (
    <section className="product-list">
      {items.map((item) => (
        <CartListItem
          key={item.itemId}
          name={item.title}
          price={item.price}
          quantity={item.quantity}
          notes={item.notes}
          imageUrl={item.imageurl}
          onAdd={() => onAdd(item.itemId)}
          onSubtract={() => onSubtract(item.itemId)}
          onNotesChange={(e) => onNotesChange(item.itemId, e.target.value)}
        />
      ))}
    </section>
  );
}

export default CartList;
// Förtfattare Katerina
// Miklós ändrarde koden för att kunna lägga maträtt till och hantera varukorg med hjälp av zustand
// Ändringar av Fredrick. Har typat om en hel del.
