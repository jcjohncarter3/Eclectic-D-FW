
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_VENUES } from '../graphql/queries';

function ExplorePage() {
  const { loading, error, data } = useQuery(GET_VENUES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Explore Music Venues</h1>
      <ul>
        {data.venues.map((venue) => (
          <li key={venue._id}>
            <h3>{venue.name}</h3>
            <p>{venue.location}</p>
            <p>{venue.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExplorePage;
