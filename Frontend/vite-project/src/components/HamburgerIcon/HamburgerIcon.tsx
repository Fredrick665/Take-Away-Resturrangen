import { Link } from "react-router-dom";
import "./hamburgerIcon.css";
import useAnimationStore from "../../stores/AnimationStore";
import { motion } from "motion/react";
function Hamburgericon() {
  const { buttonHover, iconVariants } = useAnimationStore();
  return (
    <>
      <Link to="/start">
        <motion.div
          className="icon-wrapper"
          variants={buttonHover}
          whileHover="whileHover"
          whileTap="whileTap"
        >
          <motion.span
            className="hbmenu"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            whileTap="clicked"
          />
        </motion.div>
      </Link>
    </>
  );
}
export default Hamburgericon;
// Författare Fredrick.
// Ändring av Fredrick. Animation Animation och åter Animation
