import { gql } from "@apollo/client";

export const QUERY_ALL_VENUES = gql`
  query allVenues {
    venues {
      _id
      name
      location
      description
      reviews {
        _id
        text
        username
        createdAt
      }
    }
  }
`;
