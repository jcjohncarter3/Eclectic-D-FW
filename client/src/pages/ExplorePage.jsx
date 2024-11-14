
import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_VENUES } from '../graphql/queries';
import { Link } from "react-router-dom";

function ExplorePage() {
  const { loading, error, data } = useQuery(QUERY_ALL_VENUES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Explore Music Venues</h1>
      <ul>
        {data.venues.map((venue) => (
          <li key={venue._id}>
            <Link to={venue._id}>
              <h3>{venue.name}</h3>
              <p>{venue.location}</p>
              <p>{venue.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExplorePage;
