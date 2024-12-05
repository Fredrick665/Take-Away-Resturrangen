import { Link } from "react-router-dom";
import { motion } from "motion/react";
import useAnimationStore from "../../stores/AnimationStore";
function Navbar() {
  const { fadeInBottom } = useAnimationStore();
  return (
    <>
      <Link to="/register">
        <motion.h2
          variants={fadeInBottom}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className="start-page__heading"
        >
          Sign In
        </motion.h2>
      </Link>
      <Link to="/login">
        <motion.h2
          variants={fadeInBottom}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className="start-page__heading"
        >
          Login
        </motion.h2>
      </Link>
      <Link to="/profile">
        <motion.h2
          className="start-page__heading"
          variants={fadeInBottom}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.6, ease: "easeInOut" }}
        >
          Profilepage
        </motion.h2>
      </Link>
      <Link to="/about">
        <motion.h2
          className="start-page__heading"
          variants={fadeInBottom}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.6, ease: "easeInOut" }}
        >
          About
        </motion.h2>
      </Link>
      <Link to="/Admin">
        <motion.h2
          className="start-page__heading"
          variants={fadeInBottom}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.6, ease: "easeInOut" }}
        >
          Adminsidan
        </motion.h2>
      </Link>
    </>
  );
}
export default Navbar;

// Författare Fredrick. Observa dock att länken till adminsidan tas bort när vi har user authentication
// Ändring av Fredrick. Animation Animation och åter Animation
