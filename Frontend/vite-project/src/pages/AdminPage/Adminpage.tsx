import "./adminpage.css";
import Hamburgericon from "../../components/HamburgerIcon/HamburgerIcon";
import Adminmenu from "../../components/AdminMenu/AdminMenu";
function Adminpage() {
  return (
    <main className="admin-page">
      <Hamburgericon />
      <h1 className="admin-page__heading">
        Välkommen till din Adminsidan Username
      </h1>
      <Adminmenu />
    </main>
  );
}

export default Adminpage;
// Författare Fredrick.
