import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  QUERY_ALL_VENUES,
  QUERY_ALL_REVIEWS_PER_VENUE,
} from "../graphql/queries";
// import { ADD_REVIEW } from '../graphql/queries';
import { useParams } from "react-router-dom";

function MusicVenuePage() {
  let { venueId } = useParams();
  console.log("venueId: ", venueId);
  const {
    loading: loadingVenues,
    error: errorVenues,
    data: dataVenues,
  } = useQuery(QUERY_ALL_VENUES);
  const {
    loading: loadingReviews,
    error: errorReviews,
    data: dataReviews,
  } = useQuery(QUERY_ALL_REVIEWS_PER_VENUE, {
    variables: { venueId },
  });
  // const [addReview] = useMutation(ADD_REVIEW);
  const [reviewText, setReviewText] = useState("");

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

  if (loadingVenues || loadingReviews) return <p>Loading...</p>;
  if (errorVenues) return <p>Error: {errorVenues.message}</p>;
  if (errorReviews) return <p>Error: {errorReviews.message}</p>;
  console.log("dataReviews", dataReviews);
  const venue = dataVenues.venues.find((venue) => venue._id === venueId);
  const reviews = dataReviews.reviewsByVenue || [];

  return (
    <div>
      <h1>{venue.name}</h1>
      <p>{venue.location}</p>
      <p>{venue.description}</p>

      <div className="review-section">
        <div className="review-entry-form">
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
        <div className="review-list">
          {reviews.length > 0 &&
            reviews &&
            reviews.map((review) => {
              return (
                <div key={review._id}>
                  <p>{review.text}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default MusicVenuePage;
