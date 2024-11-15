import React from "react";
import { NavLink } from "react-router-dom";
import Auth from "../utils/auth";

function NavBar() {
  function logout() {
    Auth.logout();
  }
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Explore
          </NavLink>
        </li>
        <li>
          <NavLink to="/live-music" activeClassName="active">
            Live Music
          </NavLink>
        </li>
        <li>
          <NavLink to="/music-venue" activeClassName="active">
            Music Venue
          </NavLink>
        </li>
        {!Auth.loggedIn() ? (
          <li>
            <NavLink to="/auth" activeClassName="active">
              Login/Sign-Up
            </NavLink>
          </li>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
