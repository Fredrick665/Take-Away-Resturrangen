import "./cartList.css";
import CartListItem from "./CartListItem/CartListItem";
import { CartItem } from "../../types/interface";
import useAnimationStore from "../../stores/AnimationStore";
import { motion } from "motion/react";
interface CartListProps {
  items: CartItem[];
  onAdd: (id: string) => void;
  onSubtract: (id: string) => void;
  onNotesChange: (id: string, notes: string) => void;
}

function CartList({ items, onAdd, onSubtract, onNotesChange }: CartListProps) {
  const { staggeredFadeIn, fadeInUp } = useAnimationStore();

  return (
    <motion.section
      className="product-list"
      variants={staggeredFadeIn}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ staggerChildren: 0.15 }}
    >
      {items.map((item, index) => (
        <motion.article
          key={item.itemId}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{
            delay: index * 0.2,
            duration: 0.5,
          }}
        >
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
        </motion.article>
      ))}
    </motion.section>
  );
}

export default CartList;
// Förtfattare Katerina
// Miklós ändrarde koden för att kunna lägga maträtt till och hantera varukorg med hjälp av zustand
// Ändringar av Fredrick. Har typat om en hel del.
// Ändring av Fredrick. Animation Animation och åter Animation
