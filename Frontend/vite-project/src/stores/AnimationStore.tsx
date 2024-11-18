/*
import { create } from "zustand";
import { Variants } from "framer-motion";

const useAnimationStore = create(() => ({
  fadeInUp: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  } as Variants,

  scaleUp: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  } as Variants,

  slideInLeft: {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  } as Variants,

  staggerChildren: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  } as Variants,

  fadeInDown: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  } as Variants,

  scaleFade: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  } as Variants,

  fadeInTop: {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  } as Variants,

  staggeredFadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  } as Variants,

  fadeInBottom: {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  } as Variants,

  slideUp: {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  } as Variants,
}));

// Exempel på hur man kan använda det.
// <motion.section
//        initial="hidden"
//        animate="visible"
//        variants={fadeInUp}
//        transition={{ duration: 0.5 }}
//      >
// </motion.section>
//
// <motion.nav
//        initial="hidden"
//        animate="visible"
//        variants={slideInLeft}
//      >
// </motion.nav>
//
// <motion.img
//        initial="hidden"
//        animate="visible"
//        variants={scaleUp}
//        transition={{ duration: 0.5, delay: 0.4 }}
//      >
// </motion.img>
//
// <motion.div
//        initial="hidden"
//        animate="visible"
//        variants={staggerChildren}
//      >
// </motion.div>
//
// <motion.h1 variants={fadeInDown}>
// </motion.h1>
//
// Additional example animations for new variants
// <motion.section
//        initial="hidden"
//        animate="visible"
//        exit="exit"
//        variants={scaleFade}
//        transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
//      >
// </motion.section>
//
// <motion.header
//        initial="hidden"
//        animate="visible"
//        variants={fadeInTop}
//        transition={{ duration: 0.6, delay: 0.2 }}
//      >
// </motion.header>
//
// <motion.article
//        initial="hidden"
//        animate="visible"
//        variants={staggeredFadeIn}
//      >
// </motion.article>
//
// <motion.section
//        initial="hidden"
//        animate="visible"
//        exit="exit"
//        variants={fadeInBottom}
//        transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
//      >
// </motion.section>
//
// <motion.footer
//        initial="hidden"
//        animate="visible"
//        variants={slideUp}
//        transition={{ duration: 0.6, delay: 0.3 }}
//      >
// </motion.footer>
*/
/*
import { Variants } from "framer-motion";
Jespers Exempel

const buttonHover = {
  whileHover: {
    scale: 1.1,
    boxShadow: '5px 5px 15px #000',
    transition: { duration: 0.5 },
  },
  whileTap: {
    scale: 0.9,
    boxShadow: '5px 5px 5px #000',
    rotate: -10,
  },
};

const inputFocusScale = {
  whileFocus: {
    scale: 1.2,
  },
};

const inputFocusStyle = {
  whileFocus: {
    scale: 1.2,
    borderColor: '#ff0000',
    padding: '.5rem',
  },
};

const bounceBall = {
  initial: {
    backgroundColor: '#0000ff',
    y: '-20rem',
  },
  animate: {
    backgroundColor: '#8a2be2',
    y: 0,
  },
  transition: {
    duration: 1,
    ease: 'backInOut',
    repeat: Infinity,
    repeatType: 'mirror',
  },
};

const pulseRotateBall = {
  animate: {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ['20%', '20%', '50%', '50%', '20%'],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    times: [0, 0.1, 0.8, 0.9, 1],
  },
};

//Jespers exempel
// <motion.button
//    className="button"
//    whileHover={buttonHover.whileHover}
//    whileTap={buttonHover.whileTap}
// >
//    Klicka mig!
// </motion.button>
//
// <motion.input
//    type="text"
//    placeholder="Username"
//    whileFocus={inputFocusScale.whileFocus}
// />
//
// <motion.input
//    type="text"
//    placeholder="Password"
//    whileFocus={inputFocusStyle.whileFocus}
// />
//
// <motion.figure
//    className="ball"
//    initial={bounceBall.initial}
//    animate={bounceBall.animate}
//    transition={bounceBall.transition}
// ></motion.figure>
//
// <motion.figure
//    className="ball"
//    animate={pulseRotateBall.animate}
//    transition={pulseRotateBall.transition}
// ></motion.figure>
*/
// Författare Fredrick
