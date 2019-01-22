// Load required packages
var mongoose = require('mongoose');

// Define our beer schema
var UtilitySchema   = new mongoose.Schema({
  name: String,
  type: String,
  quantity: Number,
  userId: String
});

// Export the Mongoose model
module.exports = mongoose.model('Utility', UtilitySchema);
