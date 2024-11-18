import "./profileMenu.css";
import { Link } from "react-router-dom";
function ProfileMenu() {
  return (
    <>
      <Link to="/orderhistory">
        <h2 className="profile-menu__heading">Orderhistorik</h2>
      </Link>
      <Link to="/confirmedorders">
        <h2 className="profile-menu__heading">Orderstatus</h2>
      </Link>
      <Link to="/homepage">
        <h2 className="profile-menu__heading">Huvudsidan</h2>
      </Link>
    </>
  );
}
export default ProfileMenu;
// Författare Fredrick.
