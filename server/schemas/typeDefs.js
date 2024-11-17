const typeDefs = `
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
    rating: Int!
    venue: Venue
    user: User
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

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(id: ID!): User
    venues: [Venue]
    liveMusic: [LiveMusic]
    review(id: ID!): Review
    reviews: [Review]
    reviewsByVenue(venueId: ID!): [Review]
  }

  type Mutation {
    addVenue(name: String, location: String, description: String): Venue
    addUser(username: String!, email: String!, password: String!): Auth
    addReview(text: String!, rating: Int!, venueId: ID): Review
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
