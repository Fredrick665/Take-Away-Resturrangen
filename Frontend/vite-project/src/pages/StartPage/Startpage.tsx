import Navbar from "../../components/Navbar/Navbar";
import "./startpage.css";
import { motion } from "motion/react";
import useAnimationStore from "../../stores/AnimationStore";
function Startpage() {
  const { scaleUp } = useAnimationStore();

  return (
    <motion.main
      className="start-page"
      variants={scaleUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <Navbar />
    </motion.main>
  );
}

export default Startpage;

// Författare Fredrick  Att göra: Fixa Mediaquery som drar profilepage texten till höger
// Ändring av Fredrick. Animation Animation och åter Animation
