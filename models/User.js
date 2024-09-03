const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['Author', 'Borrower'],
    required: true,
  },
  language: {
    type: String,
    enum: ['en', 'hi'],
    default: 'en',
  },
});

module.exports = mongoose.model('User', userSchema);
