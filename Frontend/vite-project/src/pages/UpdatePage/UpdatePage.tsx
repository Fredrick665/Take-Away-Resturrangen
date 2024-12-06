import { Link } from "react-router-dom";
import "./UpdatePage.css";
import Hamburgericon from "../../components/HamburgerIcon/HamburgerIcon";
import useAnimationStore from "../../stores/AnimationStore";
import { motion } from "motion/react";
function UpdatePage() {
  const { fadeInUp } = useAnimationStore();
  return (
    <main className="update-page">
      <Hamburgericon />

      <motion.h1
        className="update-page__heading"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Uppdatera Menyn och Priser
      </motion.h1>
      <Link to="/additem">
        <motion.button
          className="update-page__button"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Lägg till ny maträtt
        </motion.button>
      </Link>
      <Link to="/edititems">
        <motion.button
          className="update-page__button"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Redigera en nuvarande maträtt
        </motion.button>
      </Link>
    </main>
  );
}

export default UpdatePage;
// Författare Fredrick.
// Ändring av Fredrick. Animation Animation och åter Animation
