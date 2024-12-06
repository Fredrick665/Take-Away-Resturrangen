import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import "./homePage.css";
import useAnimationStore from "../../stores/AnimationStore";
import { motion } from "motion/react";

function HomePage() {
  const { scaleUp } = useAnimationStore();
  return (
    <motion.section
      variants={scaleUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="homePage"
    >
      <Header />
      <Menu />
      <Footer />
    </motion.section>
  );
}

export default HomePage;

// Författare: Miklós
// HomePage är startsidan för appen
// Ändring av Fredrick. Animation Animation och åter Animation
