
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_LIVE_MUSIC } from '../graphql/queries';

function LiveMusicPage() {
  const { loading, error, data } = useQuery(GET_LIVE_MUSIC);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Live Music Events</h1>
      <ul>
        {data.liveMusic.map((event) => (
          <li key={event._id}>
            <h3>{event.artist}</h3>
            <p>{event.date} at {event.time}</p>
            <p>Venue: {event.venueId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LiveMusicPage;
