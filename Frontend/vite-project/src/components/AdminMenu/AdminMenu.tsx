import { Link } from "react-router-dom";
import "./adminMenu.css";
import { motion } from "motion/react";
import useAnimationStore from "../../stores/AnimationStore";
function Adminmenu() {
  const { menuItemVariants } = useAnimationStore();
  return (
    <>
      <Link to="/update">
        <motion.h2
          className="admin-menu__heading"
          variants={menuItemVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Uppdatera menyn och priser
        </motion.h2>
      </Link>
      <Link to="/allorders">
        <motion.h2
          className="admin-menu__heading"
          variants={menuItemVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Alla beställningar
        </motion.h2>
      </Link>
      <Link to="/order">
        <motion.h2
          className="admin-menu__heading"
          variants={menuItemVariants}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          Lagerstatus
        </motion.h2>
      </Link>
      <Link to="/additem">
        <motion.h2
          className="admin-menu__heading"
          variants={menuItemVariants}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          Lägg till saker på menyn
        </motion.h2>
      </Link>
    </>
  );
}
export default Adminmenu;
// Författare Fredrick.
// Ändring av Fredrick. Animation Animation och åter Animation
