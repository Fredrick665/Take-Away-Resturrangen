import "./menu.css";
import MenuSection from "./MenuSection/MenuSection";
import { motion } from "motion/react";
import useAnimationStore from "../../stores/AnimationStore";
function Menu() {
  const { fadeInUp, staggeredFadeIn } = useAnimationStore();
  return (
    <motion.main
      className="menu"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2
        variants={staggeredFadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4 }}
      >
        Menu
      </motion.h2>
      <MenuSection />
    </motion.main>
  );
}

export default Menu;

// Författare: Miklós
// Komponenten visar upp en menu för restaurangens matträtter på startsidan
//Ändring av Fredrick. Tog bort renderingen av menusection två gånger för att vi för närvarande inte sorterar kategorierna.
// Ändring av Fredrick. Animation Animation och åter Animation
