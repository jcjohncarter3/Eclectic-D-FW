
import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" activeClassName="active">Explore</NavLink></li>
        <li><NavLink to="/live-music" activeClassName="active">Live Music</NavLink></li>
        <li><NavLink to="/music-venue" activeClassName="active">Music Venue</NavLink></li>
        <li><NavLink to="/reviews" activeClassName="active">Reviews</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
