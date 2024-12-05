import "./adminpage.css";
import Hamburgericon from "../../components/HamburgerIcon/HamburgerIcon";
import Adminmenu from "../../components/AdminMenu/AdminMenu";
import { motion } from "motion/react";
import useAnimationStore from "../../stores/AnimationStore";
function Adminpage() {
  const { fadeInUp } = useAnimationStore();
  return (
    <motion.main
      className="admin-page"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Hamburgericon />
      <h1 className="admin-page__heading">
        Välkommen till din Adminsidan Username
      </h1>
      <Adminmenu />
    </motion.main>
  );
}

export default Adminpage;
// Författare Fredrick.
// Ändring av Fredrick. Animation Animation och åter Animation
