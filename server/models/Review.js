const { Schema, model } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const reviewSchema = new Schema({
  text: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const Review = model("Review", reviewSchema);

module.exports = { Review, reviewSchema };
