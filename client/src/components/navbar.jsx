import { NavLink } from "react-router-dom";
import Auth from "../utils/auth";

function NavBar() {
  function logout() {
    Auth.logout();
  }
  return (
    <nav className="navigation">
      <div>
        <NavLink to="/" activeClassName="active">
          Explore
        </NavLink>
      </div>
      <div>
        <NavLink to="/live-music" activeClassName="active">
          Live Music
        </NavLink>
      </div>
      <div>
        <NavLink to="/music-venue" activeClassName="active">
          Music Venue
        </NavLink>
      </div>

      {!Auth.loggedIn() ? (
        <div>
          <NavLink to="/auth" activeClassName="active">
            Login/Sign-Up
          </NavLink>
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
