const Book = require('../models/Book');
const Library = require('../models/Library');
const User = require('../models/User');

// Get all books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find()
      .populate('author', 'name')
      .populate('borrower', 'name')
      .populate('library', 'name');
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id)
      .populate('author', 'name')
      .populate('borrower', 'name')
      .populate('library', 'name');
    if (!book) return res.status(404).json({ message: 'Book not found' });

    res.json(book);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new book
exports.createBook = async (req, res) => {
  const { title, author, library, image } = req.body;
  try {
    const newBook = new Book({ title, author, library, image });
    await newBook.save();
    res.status(201).json({ message: 'Book created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update book details
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) return res.status(404).json({ message: 'Book not found' });

    res.json({ message: 'Book updated successfully', book });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete a book
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
