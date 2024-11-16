import "./profilePage.css";
import Hamburgericon from "../../components/HamburgerIcon/HamburgerIcon";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import Themeswitcher from "../../components/ThemeSwitcher/ThemeSwitcher";

function ProfilePage() {
  return (
    <main className="profile-page">
      <Hamburgericon />
      <h1 className="profile-page__heading">
        Välkommen till din profilsida Username
      </h1>
      <ProfileMenu />
      <Themeswitcher />
    </main>
  );
}

export default ProfilePage;
// Författare Fredrick.
