import { motion } from "motion/react";
import useAnimationStore from "../../stores/AnimationStore";
import "./receipt.css";

function Receipt() {
  const { fadeInUp, fadeInDown, scaleFade } = useAnimationStore();

  return (
    <>
      <motion.section
        className="receipt-page__details"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.p
          className="receipt-page__order-title"
          variants={fadeInDown}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Beställning 1
        </motion.p>

        <motion.ul
          className="receipt-page__order-list"
          variants={scaleFade}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.li
            className="receipt-page__order-item"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <label className="receipt-page__order-item-label">
              Lorem ipsum dolor sit amet
            </label>
          </motion.li>
          <motion.li
            className="receipt-page__order-item"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <label className="receipt-page__order-item-label">
              Integer at ornare nibh
            </label>
          </motion.li>
          <motion.li
            className="receipt-page__order-item"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <label className="receipt-page__order-item-label">
              Suspendisse venenatis elit
            </label>
          </motion.li>
          <motion.li
            className="receipt-page__order-item"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <label className="receipt-page__order-item-label">
              Maecenas id dui egestas
            </label>
          </motion.li>
        </motion.ul>

        <motion.h4
          className="receipt-page__wishlist-title"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Eventuella Önskemål:
        </motion.h4>

        <motion.p
          className="receipt-page__wishlist-text"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          deserunt ut velit dignissimos aliquam officiis magni cupiditate nulla
          rerum, impedit at laborum architecto, repellat numquam illum, quo
          temporibus officia pariatur!
        </motion.p>

        <motion.p
          className="receipt-page__total"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Totalsumma: 600kr
        </motion.p>
      </motion.section>
    </>
  );
}

export default Receipt;

// Författare Fredrick.
// Ändring av Fredrick. Animation Animation och åter Animation
// Ändring av Fredrick. Animation Animation och åter Animation
