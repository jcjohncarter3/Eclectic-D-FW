const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String },
  liveMusic: { type: Boolean, default: false },
});

module.exports = mongoose.model('Venue', venueSchema);
