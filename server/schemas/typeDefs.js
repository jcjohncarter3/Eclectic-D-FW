const { gql } = require("apollo-server-express");

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
    username: String!
    createdAt: String!
    rating: Int!
  }
  type LiveMusic {
    _id: ID!
    venueId: ID!
    artist: String!
    date: String!
    time: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    savedVenues: [Venue]
    reviews: [Review]
  }

  type Query {
    user(id: ID!): User
    venues: [Venue]
    liveMusic: [LiveMusic]
  }

  type Mutation {
    addVenue(name: String, location: String, description: String): Venue
    addUser(username: String!, email: String!, password: String!): User
  }
`;

module.exports = typeDefs;
