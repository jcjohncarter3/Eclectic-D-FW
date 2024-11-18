import { NavLink } from "react-router-dom";
import Auth from "../utils/auth";

function NavBar() {
  function logout() {
    Auth.logout();
  }
  return (
    <nav className="navigation">
      <div>
        <NavLink to="/">Explore</NavLink>
      </div>
      <div>
        <NavLink to="/live-music">Live Music</NavLink>
      </div>
      <div>
        <NavLink to="/about">About</NavLink>
      </div>
      {!Auth.loggedIn() ? (
        <div>
          <NavLink to="/auth">Login/Sign-Up</NavLink>
        </div>
      ) : (
        <button className="btn btn-secondary" onClick={logout}>
          Logout
        </button>
      )}
    </nav>
  );
}

export default NavBar;
