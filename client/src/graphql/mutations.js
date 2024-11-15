import { gql } from "@apollo/client";

export const ADD_REVIEW = gql`
  mutation addReview($text: String!, $rating: Int!, $venueId: ID) {
    addReview(text: $text, rating: $rating, venueId: $venueId) {
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

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        username
        reviews {
          _id
          text
        }
        savedVenues {
          _id
          name
        }
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;
