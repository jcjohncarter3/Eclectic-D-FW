
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Venue {
    _id: ID!
    name: String!
    location: String!
    description: String
    reviews: [Review]
  }

  type Review {
    _id: ID!
    text: String!
    user: String!
    createdAt: String!
  }

  type Query {
    venues: [Venue]
    liveMusic: [LiveMusic]
  }

  type Mutation {
    addReview(venueId: ID!, reviewText: String!): Review
  }

  type LiveMusic {
    _id: ID!
    venueId: ID!
    artist: String!
    date: String!
    time: String!
  }
`;

module.exports = typeDefs;
