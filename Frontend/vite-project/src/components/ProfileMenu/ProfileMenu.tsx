import { Link } from "react-router-dom";
function ProfileMenu() {
  return (
    <>
      <Link to="/orderhistory">
        <h2 className="profile-page__heading">Orderhistorik</h2>
      </Link>
      <Link to="/confirmedorders">
        <h2 className="profile-page__heading">Orderstatus</h2>
      </Link>
      <Link to="/homepage">
        <h2 className="profile-page__heading">Huvudsidan</h2>
      </Link>
    </>
  );
}
export default ProfileMenu;
// Författare Fredrick.
