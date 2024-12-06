import { Link } from "react-router-dom";
import "./aboutPage.css";
import Logo from "../../assets/logo.png";
import Hamburgericon from "../../components/HamburgerIcon/HamburgerIcon";
import Footer from "../../components/Footer/Footer";
import { motion } from "motion/react";
import useAnimationStore from "../../stores/AnimationStore";
function AboutPage() {
  const { fadeInUp, fadeInDown } = useAnimationStore();
  return (
    <>
      <main className="about-page">
        <article className="about-page__article">
          <Hamburgericon />
          <Link to="/homepage">
            <motion.img
              src={Logo}
              alt="Logga"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            />
          </Link>
          <motion.h1
            className="about-page__title"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
          >
            Om SwiftDeluxe Restaurant
          </motion.h1>
          <motion.p
            className="about-page__text"
            variants={fadeInDown}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et odio
            lacus. Duis sem sapien, vulputate volutpat metus vitae, mollis
            lobortis libero. Integer at ornare nibh. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Nulla aliquet odio at ligula tempus, eu lobortis nisl gravida.
            Praesent dictum convallis sem, quis efficitur quam. Integer vel
            viverra leo. Integer varius velit tellus, ac ullamcorper ipsum
            condimentum nec. Suspendisse venenatis elit sit amet tristique
            placerat. Maecenas id dui egestas, scelerisque lectus ut, tincidunt
            nulla. Donec sit amet turpis tempor, dictum justo vitae, pretium
            leo. Donec ullamcorper velit a purus tempus, nec consectetur nibh
            faucibus. Nullam at pellentesque lorem, sit amet ornare orci. Proin
            lectus orci, pretium ac tincidunt in, posuere tincidunt magna. Sed
            iaculis, lacus ut vehicula euismod, orci est viverra velit, interdum
            maximus ante odio eu mi. Nullam ut quam libero. Sed id faucibus leo.
            Donec odio diam, scelerisque eget convallis sit amet, pharetra ut
            augue. Duis pretium, risus non porta efficitur, diam orci varius
            mauris, quis condimentum mauris nibh scelerisque tellus.
          </motion.p>
        </article>
        <Footer />
      </main>
    </>
  );
}

export default AboutPage;
// Författare Fredrick.
// Ändring av Fredrick. Lagt till routing så man hamnar på homepage när man klickar på loggan.
// Ändring av Fredrick. Animation Animation och åter Animation
