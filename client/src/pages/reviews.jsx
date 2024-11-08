
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_VENUES } from '../graphql/queries';

function ReviewPage({ match }) {
  const { venueId } = match.params;
  const { loading, error, data } = useQuery(GET_VENUES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const venue = data.venues.find((venue) => venue._id === venueId);

  return (
    <div>
      <h1>Reviews for {venue.name}</h1>
      <ul>
        {venue.reviews.map((review) => (
          <li key={review._id}>
            <p>{review.text}</p>
            <p>By: {review.user}</p>
            <p>On: {review.createdAt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewPage;
