import { Link } from "react-router-dom";
import { motion } from "motion/react";
import useAnimationStore from "../../stores/AnimationStore";
import "./confirmedOrdersPage.css";
import Logo from "../../assets/logo.png";
import Receipt from "../../components/Receipt/Receipt";

function ConfirmedOrdersPage() {
  const { fadeInUp, slideInLeft } = useAnimationStore();

  return (
    <main className="confirmed-orders-page">
      <Link to="/homepage">
        <motion.img
          className="confirmed-orders-page__logo"
          src={Logo}
          alt="Logga"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </Link>

      <motion.h1
        className="confirmed-orders-page__title"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Kvitto på din beställning
      </motion.h1>

      <motion.p
        className="confirmed-orders-page__description"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Ett mail har skickats till den epost du angett för att bekräfta denna
        beställning. Välkommen åter!
      </motion.p>

      <Receipt />

      <Link to="/homepage">
        <motion.button
          className="confirmed-orders-page__back-button"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Tillbaka till Homepage
        </motion.button>
      </Link>

      <motion.h1
        className="confirmed-orders-page__title"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Har du ångrat dig eller vill ändra din beställning?
      </motion.h1>

      <Link to="/orderhistory">
        <motion.button
          className="confirmed-orders-page__back-button"
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Ångra/Ändra.
        </motion.button>
      </Link>
    </main>
  );
}

export default ConfirmedOrdersPage;

// Författare Fredrick.
// // Ändring av Fredrick. Lagt till routing så man hamnar på homepage när man klickar på loggan.
// Ändring av Fredrick. Animation Animation och åter Animation
