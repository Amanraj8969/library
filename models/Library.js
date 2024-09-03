const mongoose = require('mongoose');

const librarySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
  }],
});

module.exports = mongoose.model('Library', librarySchema);
