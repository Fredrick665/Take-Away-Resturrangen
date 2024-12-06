import { useCartStore } from "./../../../../stores/cartStore";
import "./menuFoodCard.css";
import { motion } from "motion/react";
import useAnimationStore from "../../../../stores/AnimationStore";
interface MenuFoodCardprops {
  imageurl: string;
  title: string;
  price: number;
  itemId: string;
  category: string;
}

function MenuFoodCard({
  imageurl,
  title,
  price,
  itemId,
  category,
}: MenuFoodCardprops) {
  const addItemToCart = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItemToCart({
      itemId,
      imageurl,
      title,
      price,
      desc: "",
      quantity: 1,
      notes: "",
      category,
      id: 0,
    });
  };
  const { slideInLeft, slideInUp, slideInRight } = useAnimationStore();
  return (
    <article className="menu__food-card">
      <figure>
        <motion.img src={imageurl} alt={title} variants={slideInLeft} />
      </figure>
      <motion.h4 variants={slideInUp}>{title}</motion.h4>
      <motion.p variants={slideInUp}>{price}kr</motion.p>
      <motion.button
        onClick={handleAddToCart}
        whileHover={{ scale: 1.1, boxShadow: "5px 5px 15px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.95, boxShadow: "5px 5px 5px rgba(0,0,0,0.2)" }}
        variants={slideInRight}
        initial="hidden"
        animate="visible"
        transition={{ duration: 2.5 }}
      >
        Add to Cart
      </motion.button>
    </article>
  );
}

export default MenuFoodCard;

// Författare: Miklós
// Ändring av Fredrick: Har typat upp props för att få ett fungerande beställningsflöde.
// Mer ändringar av Fredrick. Har typat om en del.
// Ändring av Fredrick. Animation Animation och åter Animation
