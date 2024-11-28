const { User, Venue, Review } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (_, { id }) => {
      return await User.findById(id);
    },
    venues: async () => Venue.find(),
    liveMusic: async () => [],
    review: async (_, { id }) => {
      return await Review.findById(id)
        .populate("user")
        .populate("venue")
        .exec();
    },
    reviews: async () => {
      return await Review.find().populate("user").populate("venue");
    },
    reviewsByVenue: async (_, { venueId }) => {
      return await Review.find({ venue: venueId })
        .populate("user")
        .populate("venue")
        .exec();
    },
  },
  Mutation: {
    // The mutation to sign on a user for a new account
    addUser: async (_, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
      // return user;
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) throw new Error("User not found");
      const isValid = await user.isCorrectPassword(password);
      if (!isValid) throw new Error("Invalid credentials");
      const token = signToken(user);
      return { token, user };
      // return user;
    },
    addVenue: async (_, { name, location, description }) => {
      return await Venue.create({ name, location, description });
    },
    addReview: async (_, { text, rating, venueId }, context) => {
      if (!context.hasToken || !context.data._id) {
        throw new Error("Unauthenticated.");
      }
      return await Review.create({
        text,
        rating,
        user: context.data._id,
        venue: venueId,
      });
    },
  },
};

module.exports = resolvers;

// const Venue = require('../models/Venue');
// const LiveMusic = require('../models/LiveMusic');
// const Review = require('../models/Review');

// const resolvers = {
//   Query: {
//     venues: async () => {
//       return await Venue.find();
//     },
//     liveMusic: async () => {
//       return await LiveMusic.find();
//     },
//   },

//   Mutation: {
//     addReview: async (_, { venueId, reviewText }) => {
//       const newReview = new Review({
//         text: reviewText,
//         user: 'Anonymous',
//         venueId,
//       });

//       await newReview.save();

//       const venue = await Venue.findById(venueId);
//       venue.reviews.push(newReview);
//       await venue.save();

//       return newReview;
//     },
//   },
