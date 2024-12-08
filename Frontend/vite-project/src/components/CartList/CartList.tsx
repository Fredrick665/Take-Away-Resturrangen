import "./cartList.css";
import CartListItem from "./CartListItem/CartListItem";
import { CartItem } from "../../types/interface";
import useAnimationStore from "../../stores/AnimationStore";
import { motion } from "motion/react";

interface CartListProps {
  items: CartItem[];
  onAdd: (id: string) => void;
  onSubtract: (id: string) => void;
  onMessageChange: (id: string, message: string) => void;
}

function CartList({
  items,
  onAdd,
  onSubtract,
  onMessageChange,
}: CartListProps) {
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
            message={item.message}
            imageUrl={item.imageurl}
            onAdd={() => onAdd(item.itemId)}
            onSubtract={() => onSubtract(item.itemId)}
            onMessageChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              onMessageChange(item.itemId, e.target.value)
            }
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
