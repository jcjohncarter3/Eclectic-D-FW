

import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Explore</Link></li>
        <li><Link to="/live-music">Live Music</Link></li>
        <li><Link to="/music-venue">Music Venue</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
