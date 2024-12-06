import "./addItemPage.css";
import DD from "../../assets/DD.png";
import Hamburgericon from "../../components/HamburgerIcon/HamburgerIcon";
import useAnimationStore from "../../stores/AnimationStore";
import { motion } from "motion/react";

function AddItemPage() {
  const { fadeInUp, inputFocusScale } = useAnimationStore();

  return (
    <motion.main
      className="add-item-page"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.7 }}
    >
      <Hamburgericon />

      <motion.h1
        className="add-item-page__title"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ delay: 0.2 }}
      >
        Lägg till ny maträtt
      </motion.h1>

      <motion.article
        className="add-item-page__subtitle-container"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ delay: 0.3 }}
      >
        <h3 className="add-item-page__subtitle">Add Image</h3>
      </motion.article>

      <motion.section
        className="add-item-page__drag-and-drop"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ delay: 0.4 }}
      >
        <img src={DD} alt="Logga" />
        Drag and Drop
      </motion.section>

      <motion.article
        className="add-item-page__file-info"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ delay: 0.5 }}
      >
        <h3 className="add-item-page__subtitle">
          Choose file. No file chosen.
        </h3>
      </motion.article>

      <motion.article
        className="add-item-page__subtitle-container"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ delay: 0.6 }}
      >
        <h3 className="add-item-page__subtitle">Add food category</h3>
      </motion.article>

      <motion.input
        className="add-item-page__input_name"
        type="text"
        placeholder="Food category"
        variants={inputFocusScale}
        whileFocus="whileFocus"
      />

      <motion.article
        className="add-item-page__subtitle-container"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ delay: 0.7 }}
      >
        <h3 className="add-item-page__subtitle">Add name</h3>
      </motion.article>

      <motion.input
        className="add-item-page__input_name"
        type="text"
        placeholder="Dish name"
        variants={inputFocusScale}
        whileFocus="whileFocus"
      />

      <motion.article
        className="add-item-page__subtitle-container"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ delay: 0.8 }}
      >
        <h3 className="add-item-page__subtitle">Add Price</h3>
      </motion.article>

      <motion.section
        className="add-item-page__input-container"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ delay: 0.9 }}
      >
        <motion.input
          className="add-item-page__input_price"
          type="number"
          placeholder="Price"
          variants={inputFocusScale}
          whileFocus="whileFocus"
        />
      </motion.section>

      <motion.button
        className="add-item-page__button"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ delay: 1.2 }}
      >
        Create Dish!
      </motion.button>
    </motion.main>
  );
}

export default AddItemPage;
// Författare Fredrick.
// Ändring av Fredrick. Animation Animation och åter Animation
