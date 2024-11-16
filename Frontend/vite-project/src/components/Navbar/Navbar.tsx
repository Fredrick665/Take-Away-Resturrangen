import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <Link to="/register">
        <h2 className="start-page__heading">Sign In</h2>
      </Link>
      <Link to="/login">
        <h2 className="start-page__heading">Login</h2>
      </Link>
      <Link to="/profile">
        <h2 className="start-page__heading">Profilepage</h2>
      </Link>
      <Link to="/about">
        <h2 className="start-page__heading">About</h2>
      </Link>
      <Link to="/Admin">
        <h2 className="start-page__heading">Adminsidan</h2>
      </Link>
    </>
  );
}
export default Navbar;

// Författare Fredrick. Observa dock att länken till adminsidan tas bort när vi har user authentication
