import "./orderPage.css";
import Hamburgericon from "../../components/HamburgerIcon/HamburgerIcon";
import { motion } from "framer-motion";
import useAnimationStore from "../../stores/AnimationStore";

function OrderPage() {
  const { fadeInUp, staggeredFadeIn, inputFocusScale } = useAnimationStore();

  return (
    <motion.main
      className="order-page"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.7 }}
    >
      <Hamburgericon />

      <motion.h1
        className="order-page__title"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ delay: 0.2 }}
      >
        Lagerstatus på ingredienser
      </motion.h1>

      <motion.ul
        className="order-page__list"
        variants={staggeredFadeIn}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ delay: 0.3 }}
      >
        <motion.li
          className="order-page__list-item"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ delay: 0.4 }}
        >
          <label className="order-page__list-item-label">
            Lorem ipsum dolor sit amet
          </label>
          <motion.input
            type="number"
            className="order-page__number"
            id="item1"
            variants={inputFocusScale}
            whileFocus="whileFocus"
          />
        </motion.li>

        <motion.li
          className="order-page__list-item"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ delay: 0.5 }}
        >
          <label className="order-page__list-item-label">
            Integer at ornare nibh
          </label>
          <motion.input
            type="number"
            className="order-page__number"
            id="item2"
            variants={inputFocusScale}
            whileFocus="whileFocus"
          />
        </motion.li>

        <motion.li
          className="order-page__list-item"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ delay: 0.6 }}
        >
          <label className="order-page__list-item-label">
            Suspendisse venenatis elit
          </label>
          <motion.input
            type="number"
            className="order-page__number"
            id="item3"
            variants={inputFocusScale}
            whileFocus="whileFocus"
          />
        </motion.li>

        <motion.li
          className="order-page__list-item"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ delay: 0.7 }}
        >
          <label className="order-page__list-item-label">
            Maecenas id dui egestas
          </label>
          <motion.input
            type="number"
            className="order-page__number"
            id="item4"
            variants={inputFocusScale}
            whileFocus="whileFocus"
          />
        </motion.li>
      </motion.ul>
    </motion.main>
  );
}

export default OrderPage;

// Författare Fredrick.
// Ändring av Fredrick. Animation Animation och åter Animation
