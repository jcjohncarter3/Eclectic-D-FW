import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  QUERY_ALL_VENUES,
  QUERY_ALL_REVIEWS_PER_VENUE,
} from "../graphql/queries";
import { ADD_REVIEW } from "../graphql/mutations";
import { useParams } from "react-router-dom";
import Auth from "../utils/auth";

function MusicVenuePage() {
  let { venueId } = useParams();

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
  // const [currentUserProfile, setCurrentUserProfile] = useState(null);

  useEffect(() => {
    const reviews = dataReviews?.reviewsByVenue || [];

    setReviewList(reviews);
  }, [dataReviews]);

  const currentUserProfile = Auth.loggedIn() ? Auth.getProfile()?.data : null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!reviewText) return;
    try {
      const newReview = await addReview({
        variables: {
          text: reviewText,
          rating: parseInt(reviewRating),
          venueId,
          // userId: currentUserProfile?._id, //"6734fd0a49dd465ec3288076", // replace with JWT token later
        },
      });

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

  const venue = dataVenues.venues.find((venue) => venue._id === venueId);

  return (
    <div className="px-3 py-3">
      <h1>{venue.name}</h1>
      <p>Location: {venue.location}</p>
      {venue.description && <p>Description: {venue.description}</p>}

      <div className="review-section pt-3">
        {Auth.loggedIn() ? (
          <div className="review-entry-form mb-4">
            <p className="title">Post a Review</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-2">
                <textarea
                  className="form-control"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Write your review"
                  required
                  rows="3"
                ></textarea>
              </div>
              <div
                className="form-group mb-2"
                onChange={(e) => setReviewRating(e.target.value)}
              >
                <label>Rating:</label>
                <select className="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={!reviewText}
              >
                Submit Review
              </button>
            </form>
          </div>
        ) : (
          <p className="prompt">Login to add review.</p>
        )}
        <div className="review-list">
          {reviewList.length > 0 &&
            reviewList &&
            reviewList.map((review) => {
              return (
                <div key={review._id} className="card mb-2">
                  <div className="card-body">
                    <p>Rating: {review.rating}/5</p>
                    <p className="main-text">Review: {review.text}</p>
                    <p>
                      By:{" "}
                      {review.user && review.user?.username
                        ? `${review.user?.username}`
                        : currentUserProfile?.username}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default MusicVenuePage;
