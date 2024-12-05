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

// Katarinas Exempel
/*
 <motion.figure
                    className="vector-left"
                    onClick={decrementMinutes}
                    whileTap={{
                        scale: 1.6,
                        rotate: -20
                    }}
                    transition={{ duration: 0.2 }}
                > 
                                <motion.div
                className="set-btn"
                initial={{ y: 0, scale: 1, backgroundColor: 'rgba(255, 255, 255, 0)' }}
                animate={isClicked
                    ? { y: 100, opacity: 0, scale: 0.3, backgroundColor: 'rgb(0, 255, 0)' }
                    : { y: 0, opacity: 1, backgroundColor: 'rgba(255, 255, 255, 0)' }}

                transition={{
                    duration: 0.5
                }}
            > const handleClick = () => {
        anime({
            targets: 'img',
            rotate: [90, -360],     // startposition 90deg, rotation360deg
            duration: 1000,
            easing: 'linear',
            filter: 'invert(1) '
        })
        // anim. för att förstora icon och text
        anime({
            targets: '.loading',
            scale: 1.2,
            duration: 400,
            easing: 'easeInOutQuad',
            complete: () => {
                navigate('/set-timer');
            }
        });
    }
    return (
        <div className='loading' onClick={handleClick}>             <motion.section
                className="digital-btn"
                initial={{
                    scale: 1,
                    rotate: 0,
                    fontSize: 14
                }}
                animate={isClicked
                    ? {
                        scale: 1.6,
                        rotate: 360,
                        fontSize: 20
                    }
                    : {
                        scale: 1,
                        rotate: 0
                    }
                }
                transition={{ duration: 0.5 }}

            >  anime({
            targets: '.alarm-btn',
            scale: [1, 2, 0.1],
            duration: 900,
            easing: 'easeInOutQuad',
            opacity: [1, 1, 0],
            complete: () => {
                navigate('/set-timer');
            }
        });
    }; <Btn text="SET NU TIMER" onClick={handleSetNuTimer} />  const menuItemVariants = {
        hidden: {
            opacity: 0,
            x: 100
        },    // initial transparens 0, flyttas till höger
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.2 + 0.2,
                duration: 0.4
            },
        }),
    };

    //initial transparens för icon
    const iconVariants = {
        hidden: { opacity: 0, x: 100, filter: 'invert(0.8)' },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                delay: 0.2,
            },
        },
        clicked: {
            x: 0,
            rotate: 360,
            filter: 'invert(0.5)',
            scale: 0.8,
            transition: {
                duration: 0.9,
                ease: 'linear',
            },
        },
    };
  motion.img
                src={navicon}
                alt="nav icon"
                className="img"
                variants={iconVariants}
                initial="hidden"
                animate={isIconClicked ? 'clicked' : 'visible'}    //function att stänga anim
                onClick={handleIconClick}
                style={{ filter: isIconClicked ? 'invert(1)' : 'invert(0)' }}
            />
            {['digital', 'analog', 'visual'].map((option, index) => (
                <motion.h1
                    key={option}
                    variants={menuItemVariants}
                    initial='hidden'
                    animate='visible'   // användr animation
                    custom={index}      //som argument till animation
                    onClick={() => handleSelect(option)}
                >
                    {option.toUpperCase()}
                </motion.h1>
                */
// Författare Fredrick
