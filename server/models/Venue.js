const { Schema, model } = require("mongoose");
const reviewSchema = require("./Review");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const venueSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  description: {
    type: String,
  },
  //   reviews: [reviewSchema],
});

const Venue = model("Venue", venueSchema);

module.exports = { Venue, venueSchema };
