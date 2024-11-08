const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Venue {
    _id: ID
    name: String
    location: String
    description: String
    liveMusic: Boolean
  }

  type Query {
    users: [User]
    venues: [Venue]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): Auth
    addVenue(name: String!, location: String!, description: String, liveMusic: Boolean): Venue
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
