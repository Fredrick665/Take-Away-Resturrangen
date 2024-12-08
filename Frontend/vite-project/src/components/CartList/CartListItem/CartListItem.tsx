import "./cartListItem.css";
import useAnimationStore from "../../../stores/AnimationStore";
import { motion } from "motion/react";
interface CartListItemProps {
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  message: string;
  onAdd: () => void;
  onSubtract: () => void;
  onMessageChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function CartListItem({
  name,
  price,
  quantity,
  imageUrl,
  message,
  onAdd,
  onSubtract,
  onMessageChange,
}: CartListItemProps) {
  const { fadeInUp, inputFocusScale, scaleUp } = useAnimationStore();
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="product-item"
    >
      <div className="info-product">
        <img src={imageUrl} alt={`Bild på ${name}`} className="product-image" />
        <div className="product-details">
          <h2 className="text-product">{name}</h2>
          <p>{price} kr</p>
        </div>
      </div>
      <article className="notes-container">
        <motion.textarea
          id="notes"
          name="notes"
          placeholder="Anteckningar:"
          className="notes-input"
          value={message || ""}
          onChange={onMessageChange}
          variants={inputFocusScale}
        ></motion.textarea>
      </article>
      <div className="product-sum">{quantity}</div>
      <div className="btn-quantity">
        <motion.button
          className="btn-subtract"
          variants={scaleUp}
          onClick={onSubtract}
        >
          -
        </motion.button>
        <motion.button className="btn-add" variants={scaleUp} onClick={onAdd}>
          +
        </motion.button>
      </div>
    </motion.section>
  );
}

export default CartListItem;

// Förtfattare Katerina
// Ändringar av Fredrick. Har skickat props och typat om en del.
// Ändring av Fredrick. Animation Animation och åter Animation
