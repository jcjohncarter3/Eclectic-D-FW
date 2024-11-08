const { User, Venue } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => User.find(),
    venues: async () => Venue.find(),
  },
  Mutation: {
    addUser: async (_, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) throw new Error('User not found');
      const isValid = await user.isCorrectPassword(password);
      if (!isValid) throw new Error('Invalid credentials');
      const token = signToken(user);
      return { token, user };
    },
    addVenue: async (_, { name, location, description, liveMusic }) => {
      return Venue.create({ name, location, description, liveMusic });
    },
  },
};

module.exports = resolvers;
