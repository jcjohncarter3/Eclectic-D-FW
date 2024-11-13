
import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ALL_VENUES } from '../graphql/queries';
// import { ADD_REVIEW } from '../graphql/queries';
import { useParams } from 'react-router-dom';

function MusicVenuePage() {
  let { venueId } = useParams();
  const { loading, error, data } = useQuery(QUERY_ALL_VENUES);
  // const [addReview] = useMutation(ADD_REVIEW);
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   await addReview({
    //     variables: {
    //       venueId,
    //       reviewText,
    //     },
    //   });
    //   setReviewText('');
    // } catch (error) {
    //   console.error('Error posting review', error);
    // }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const venue = data.venues.find((venue) => venue._id === venueId);

  return (
    <div>
      <h1>{venue.name}</h1>
      <p>{venue.location}</p>
      <p>{venue.description}</p>

      <h2>Post a Review</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your review"
          required
        />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default MusicVenuePage;
