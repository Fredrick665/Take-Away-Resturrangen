import { motion } from "motion/react";
import useAnimationStore from "../../stores/AnimationStore";
import "./profilePage.css";
import Hamburgericon from "../../components/HamburgerIcon/HamburgerIcon";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";

function ProfilePage() {
  const { fadeInUp } = useAnimationStore();

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="profile-page"
    >
      <Hamburgericon />
      <h1 className="profile-page__heading">
        Välkommen till din profilsida Username
      </h1>
      <ProfileMenu />
    </motion.main>
  );
}

export default ProfilePage;

// Författare Fredrick.
// Ändring av Fredrick. Animation Animation och åter Animation
