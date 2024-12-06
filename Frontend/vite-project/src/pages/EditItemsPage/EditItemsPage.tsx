import "./editItemsPage.css";
import Hamburgericon from "../../components/HamburgerIcon/HamburgerIcon";
import useAnimationStore from "../../stores/AnimationStore";
import { motion } from "motion/react";
function EditItemsPage() {
  const { fadeInUp, scaleFade } = useAnimationStore();

  return (
    <motion.main
      className="edit-items-page"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Hamburgericon />
      <motion.h1
        className="edit-items-page__title"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Redigera en nuvarande maträtt
      </motion.h1>
      <motion.section
        className="edit-items-page__details"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <motion.ul
          className="edit-items-page__order-list"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.li
            className="edit-items-page__order-item"
            variants={scaleFade}
          >
            <label className="edit-items-page__order-item-label">
              Lorem ipsum dolor sit amet
              <motion.button
                className="edit-items-page__order-item-button"
                variants={scaleFade}
              >
                Ändra/Ta bort
              </motion.button>
            </label>
          </motion.li>
          <motion.li
            className="edit-items-page__order-item"
            variants={scaleFade}
          >
            <label className="edit-items-page__order-item-label">
              Integer at ornare nibh
              <motion.button
                className="edit-items-page__order-item-button"
                variants={scaleFade}
              >
                Ändra/Ta bort
              </motion.button>
            </label>
          </motion.li>
          <motion.li
            className="edit-items-page__order-item"
            variants={scaleFade}
          >
            <label className="edit-items-page__order-item-label">
              Suspendisse venenatis elit
              <motion.button
                className="edit-items-page__order-item-button"
                variants={scaleFade}
              >
                Ändra/Ta bort
              </motion.button>
            </label>
          </motion.li>
          <motion.li
            className="edit-items-page__order-item"
            variants={scaleFade}
          >
            <label className="edit-items-page__order-item-label">
              Maecenas id dui egestas
              <motion.button
                className="edit-items-page__order-item-button"
                variants={scaleFade}
              >
                Ändra/Ta bort
              </motion.button>
            </label>
          </motion.li>
        </motion.ul>

        <motion.ul
          className="edit-items-page__order-list"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <motion.li
            className="edit-items-page__order-item"
            variants={scaleFade}
          >
            <label className="edit-items-page__order-item-label">
              Lorem ipsum dolor sit amet
              <motion.button
                className="edit-items-page__order-item-button"
                variants={scaleFade}
              >
                Ändra/Ta bort
              </motion.button>
            </label>
          </motion.li>
          <motion.li
            className="edit-items-page__order-item"
            variants={scaleFade}
          >
            <label className="edit-items-page__order-item-label">
              Integer at ornare nibh
              <motion.button
                className="edit-items-page__order-item-button"
                variants={scaleFade}
              >
                Ändra/Ta bort
              </motion.button>
            </label>
          </motion.li>
          <motion.li
            className="edit-items-page__order-item"
            variants={scaleFade}
          >
            <label className="edit-items-page__order-item-label">
              Suspendisse venenatis elit
              <motion.button
                className="edit-items-page__order-item-button"
                variants={scaleFade}
              >
                Ändra/Ta bort
              </motion.button>
            </label>
          </motion.li>
          <motion.li
            className="edit-items-page__order-item"
            variants={scaleFade}
          >
            <label className="edit-items-page__order-item-label">
              Maecenas id dui egestas
              <motion.button
                className="edit-items-page__order-item-button"
                variants={scaleFade}
              >
                Ändra/Ta bort
              </motion.button>
            </label>
          </motion.li>
        </motion.ul>

        <motion.ul
          className="edit-items-page__order-list"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <motion.li
            className="edit-items-page__order-item"
            variants={scaleFade}
          >
            <label className="edit-items-page__order-item-label">
              Lorem ipsum dolor sit amet
              <motion.button
                className="edit-items-page__order-item-button"
                variants={scaleFade}
              >
                Ändra/Ta bort
              </motion.button>
            </label>
          </motion.li>
          <motion.li
            className="edit-items-page__order-item"
            variants={scaleFade}
          >
            <label className="edit-items-page__order-item-label">
              Integer at ornare nibh
              <motion.button
                className="edit-items-page__order-item-button"
                variants={scaleFade}
              >
                Ändra/Ta bort
              </motion.button>
            </label>
          </motion.li>
          <motion.li
            className="edit-items-page__order-item"
            variants={scaleFade}
          >
            <label className="edit-items-page__order-item-label">
              Suspendisse venenatis elit
              <motion.button
                className="edit-items-page__order-item-button"
                variants={scaleFade}
              >
                Ändra/Ta bort
              </motion.button>
            </label>
          </motion.li>
          <motion.li
            className="edit-items-page__order-item"
            variants={scaleFade}
          >
            <label className="edit-items-page__order-item-label">
              Maecenas id dui egestas
              <motion.button
                className="edit-items-page__order-item-button"
                variants={scaleFade}
              >
                Ändra/Ta bort
              </motion.button>
            </label>
          </motion.li>
        </motion.ul>

        <motion.ul
          className="edit-items-page__order-list"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <motion.li
            className="edit-items-page__order-item"
            variants={scaleFade}
          >
            <label className="edit-items-page__order-item-label">
              Lorem ipsum dolor sit amet
              <motion.button
                className="edit-items-page__order-item-button"
                variants={scaleFade}
              >
                Ändra/Ta bort
              </motion.button>
            </label>
          </motion.li>
          <motion.li
            className="edit-items-page__order-item"
            variants={scaleFade}
          >
            <label className="edit-items-page__order-item-label">
              Integer at ornare nibh
              <motion.button
                className="edit-items-page__order-item-button"
                variants={scaleFade}
              >
                Ändra/Ta bort
              </motion.button>
            </label>
          </motion.li>
          <motion.li
            className="edit-items-page__order-item"
            variants={scaleFade}
          >
            <label className="edit-items-page__order-item-label">
              Suspendisse venenatis elit
              <motion.button
                className="edit-items-page__order-item-button"
                variants={scaleFade}
              >
                Ändra/Ta bort
              </motion.button>
            </label>
          </motion.li>
          <motion.li
            className="edit-items-page__order-item"
            variants={scaleFade}
          >
            <label className="edit-items-page__order-item-label">
              Maecenas id dui egestas
              <motion.button
                className="edit-items-page__order-item-button"
                variants={scaleFade}
              >
                Ändra/Ta bort
              </motion.button>
            </label>
          </motion.li>
        </motion.ul>
      </motion.section>
    </motion.main>
  );
}

export default EditItemsPage;
// Författare Fredrick.
// Ändring av Fredrick. Animation Animation och åter Animation
