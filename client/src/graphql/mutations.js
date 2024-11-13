import { gql } from "@apollo/client";

export const ADD_REVIEW = gql`
  mutation addReview($text: String!, $rating: Int!, $userId: ID, $venueId: ID) {
    addReview(
      text: $text
      rating: $rating
      userId: $userId
      venueId: $venueId
    ) {
      _id
      text
      rating
      user {
        _id
        # Error: Can't return non-nullable (I haven't figured it out)
        # username
      }
    }
  }
`;
