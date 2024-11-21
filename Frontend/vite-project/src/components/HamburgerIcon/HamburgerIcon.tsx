import { Link } from "react-router-dom";
import "./hamburgerIcon.css";
function Hamburgericon() {
  return (
    <>
      <Link to="/start">
      <div className="icon-wrapper">
        <span className="hbmenu"></span>
      </div>
      </Link>
    </>
  );
}
export default Hamburgericon;
// Författare Fredrick.
