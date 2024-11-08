
import { gql } from '@apollo/client';

// Query to get all music venues
export const GET_VENUES = gql`
  query GetVenues {
    venues {
      _id
      name
      location
      description
    }
  }
`;

// Query to get all live music events
export const GET_LIVE_MUSIC = gql`
  query GetLiveMusic {
    liveMusic {
      _id
      venueId
      artist
      date
      time
    }
  }
`;

// Mutation to add a review
export const ADD_REVIEW = gql`
  mutation AddReview($venueId: ID!, $reviewText: String!) {
    addReview(venueId: $venueId, reviewText: $reviewText) {
      _id
      text
      user
      createdAt
    }
  }
`;
