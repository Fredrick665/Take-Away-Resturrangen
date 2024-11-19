import "./profilePage.css";
import Hamburgericon from "../../components/HamburgerIcon/HamburgerIcon";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";

function ProfilePage() {
  return (
    <main className="profile-page">
      <Hamburgericon />
      <h1 className="profile-page__heading">
        Välkommen till din profilsida Username
      </h1>
      <ProfileMenu />
    </main>
  );
}

export default ProfilePage;
// Författare Fredrick.
