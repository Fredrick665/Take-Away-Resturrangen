import { Link } from "react-router-dom";
import "./UpdatePage.css";
import Hamburgericon from "../../components/HamburgerIcon/HamburgerIcon";
function UpdatePage() {
  return (
    <main className="update-page">
      <Hamburgericon />
      <h1 className="update-page__heading">Uppdatera Menyn och Priser</h1>
      <Link to="/additem">
        <button className="update-page__button">Lägg till ny maträtt</button>
      </Link>
      <Link to="/edititems">
        <button className="update-page__button">
          Redigera en nuvarande maträtt
        </button>
      </Link>
    </main>
  );
}

export default UpdatePage;
// Författare Fredrick.
