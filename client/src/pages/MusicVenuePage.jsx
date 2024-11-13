import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  QUERY_ALL_VENUES,
  QUERY_ALL_REVIEWS_PER_VENUE,
} from "../graphql/queries";
import { ADD_REVIEW } from "../graphql/mutations";
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
  const [addReview, { error }] = useMutation(ADD_REVIEW);
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(1);
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    const reviews = dataReviews?.reviewsByVenue || [];

    setReviewList(reviews);
  }, [dataReviews]);

  // useEffect(() => {}, [dataReviews]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("reviewText", reviewText);
    console.log("reviewRating", reviewRating);
    try {
      const newReview = await addReview({
        variables: {
          text: reviewText,
          rating: parseInt(reviewRating),
          venueId,
          userId: "6734fd0a49dd465ec3288076", // replace with JWT token later
        },
      });
      console.log("new review", newReview);
      // setReviewList([...reviewList, newReview]);
      setReviewList((oldArray) => [newReview.data.addReview, ...oldArray]);
      setReviewText("");
      setReviewRating(1);
    } catch (error) {
      console.error("Error posting review", error);
    }
  };

  if (loadingVenues || loadingReviews) return <p>Loading...</p>;
  if (errorVenues) return <p>Error: {errorVenues.message}</p>;
  if (errorReviews) return <p>Error: {errorReviews.message}</p>;
  console.log("dataReviews", dataReviews);
  const venue = dataVenues.venues.find((venue) => venue._id === venueId);

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
            <select onChange={(e) => setReviewRating(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button type="submit">Submit Review</button>
          </form>
        </div>
        <div className="review-list">
          {reviewList.length > 0 &&
            reviewList &&
            reviewList.map((review) => {
              return (
                <div key={review._id} style={{ border: "1px solid black" }}>
                  <p>Rating: {review.rating}/5</p>
                  <p> REview: {review.text}</p>
                  <p>By: {review.user.username}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default MusicVenuePage;
