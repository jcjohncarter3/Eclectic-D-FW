import { gql } from "@apollo/client";

export const QUERY_ALL_VENUES = gql`
  query allVenues {
    venues {
      _id
      name
      location
      description
    }
  }
`;

export const QUERY_ALL_REVIEWS_PER_VENUE = gql`
  query reviewsByVenue($venueId: ID!) {
    reviewsByVenue(venueId: $venueId) {
      _id
      text
      rating
      user {
        _id
        username
        email
      }
      venue {
        _id
        name
        location
      }
    }
  }
`;
