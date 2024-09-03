const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  library: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Library',
  },
  borrower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  image: {
    type: String, // URL or path to the image
  },
});

module.exports = mongoose.model('Book', bookSchema);
