
import './cartList.css';
import CartListItem from "./CartListItem/CartListItem";
import { CartItem } from "../../types/interface";

interface CartListProps {
  items: CartItem[];
  onAdd: (id: number) => void;
  onSubtract: (id: number) => void;
  onNotesChange: (id: number, notes: string) => void;
}

function CartList({ items, onAdd, onSubtract, onNotesChange }: CartListProps) {
  return (
    <section className="product-list">
      {items.map((item) => (
        <CartListItem
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          notes={item.notes}
          onAdd={() => onAdd(item.id)}
          onSubtract={() => onSubtract(item.id)}
          onNotesChange={(e) => onNotesChange(item.id, e.target.value)}
        />
      ))}
    </section>
  );
}

export default CartList;
        
// Förtfattare Katerina
// Miklós ändrarde koden för att kunna lägga maträtt till och hantera varukorg med hjälp av zustand