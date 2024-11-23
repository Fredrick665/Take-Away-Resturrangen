import "./cartList.css";
import CartListItem from "../CartList/CartListItem/CartListItem";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  notes: string;
}

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
