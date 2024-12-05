import { motion } from "motion/react";
import { Link } from "react-router-dom";
import useAnimationStore from "../../stores/AnimationStore"; // Importera zustand store
import "./profileMenu.css";

function ProfileMenu() {
  const { menuItemVariants } = useAnimationStore();

  return (
    <>
      <Link to="/orderhistory">
        <motion.h2
          className="profile-menu__heading"
          variants={menuItemVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Orderhistorik
        </motion.h2>
      </Link>

      <Link to="/confirmedorders">
        <motion.h2
          className="profile-menu__heading"
          variants={menuItemVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Orderstatus
        </motion.h2>
      </Link>

      <Link to="/homepage">
        <motion.h2
          className="profile-menu__heading"
          variants={menuItemVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Huvudsidan
        </motion.h2>
      </Link>
    </>
  );
}

export default ProfileMenu;

// Författare Fredrick.
// Ändring av Fredrick. Animation Animation och åter Animation
