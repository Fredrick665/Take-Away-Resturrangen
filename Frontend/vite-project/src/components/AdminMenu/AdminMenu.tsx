import { Link } from "react-router-dom";
import "./adminMenu.css";
function Adminmenu() {
  return (
    <>
      <Link to="/update">
        <h2 className="admin-menu__heading">Uppdatera menyn och priser</h2>
      </Link>
      <Link to="/allorders">
        <h2 className="admin-menu__heading">Alla beställningar</h2>
      </Link>
      <Link to="/order">
        <h2 className="admin-menu__heading">Lagerstatus</h2>
      </Link>
    </>
  );
}
export default Adminmenu;
// Författare Fredrick.
